import { multicall } from '@wagmi/core';
import { pairRewarderABI } from 'abis/types/generated';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import RoutePath from 'routes';
import { AllPairRewarderRewards, PairRewarderRewardItem } from 'types';
import getPairIsolatedRewardTokensAndAmounts from 'utils/getPairIsolatedRewardTokensAndAmounts';
import { Address, useAccount, useBlockNumber } from 'wagmi';

import { usePairRewarderFactory } from './usePairRewarderFactory';

export function usePairRewarderGetAccountRewards() {
  return useCallback(async function getData(
    pairRewarderAddress: Address,
    address: Address,
  ): Promise<PairRewarderRewardItem[]> {
    const [winDays] = await multicall({
      allowFailure: false,
      contracts: [
        {
          address: pairRewarderAddress,
          abi: pairRewarderABI,
          functionName: 'getUserLeaderBoardWins',
          args: [address],
        },
      ],
    });
    if (!winDays) return [];
    const claimedForDays = await multicall({
      allowFailure: false,
      contracts: winDays.map((item) => {
        return {
          abi: pairRewarderABI,
          address: pairRewarderAddress,
          functionName: 'userLeaderBoardClaimedForDay',
          args: [address, item],
        };
      }),
    });
    const leaderBoardWinnersForDays = await multicall({
      allowFailure: false,
      contracts: winDays.map((item) => {
        return {
          abi: pairRewarderABI,
          address: pairRewarderAddress,
          functionName: 'leaderBoardWinners',
          args: [item],
        };
      }),
    });
    const rewardsArray: PairRewarderRewardItem[] = [];
    for (let i = 0; i < winDays.length; i++) {
      const rankIndex = leaderBoardWinnersForDays[i].winners.findIndex((a) => a === address);
      rewardsArray.push({
        day: winDays[i],
        rank: rankIndex + 1,
        rewardTokensAndAmounts: getPairIsolatedRewardTokensAndAmounts(leaderBoardWinnersForDays[i].info, rankIndex),
        claimed: claimedForDays[i],
      });
    }
    return rewardsArray;
  },
  []);
}

export function usePairRewarderRewards(pairRewarderAddress: Address) {
  const { address } = useAccount();

  const [rewards, setRewards] = useState<PairRewarderRewardItem[] | null>(null);

  const { data: blockNumber } = useBlockNumber({
    watch: true,
  });
  const pairRewarderGetAccountRewards = usePairRewarderGetAccountRewards();
  useEffect(() => {
    if (address && pairRewarderAddress) {
      pairRewarderGetAccountRewards(pairRewarderAddress, address).then(setRewards);
    }
  }, [address, pairRewarderAddress, blockNumber, pairRewarderGetAccountRewards]);

  return {
    rewards,
  };
}

export function useWonPairRewarders(address: Address | undefined) {
  const [wonPairRewarderAddresses, setWonPairRewarderAddresses] = useState<`0x${string}`[] | null>(null);
  const location = useLocation();
  const [allPairRewarderRewards, setAllPairRewarderRewards] = useState<AllPairRewarderRewards | null>(null);
  const pairRewarderGetAccountRewards = usePairRewarderGetAccountRewards();

  const { allPairRewarders: allPairRewardersFromContract } = usePairRewarderFactory();
  const allPairRewarders: Address[] | null = useMemo(
    () =>
      location.pathname.startsWith(RoutePath.REWARDS_TEST)
        ? ['0x6cB66a0762E7Ce3c0Abc9d0241bF4cfFc67fcdA1']
        : allPairRewardersFromContract,
    [allPairRewardersFromContract, location.pathname],
  );

  useEffect(() => {
    async function getData() {
      if (!allPairRewarders || !address) return;
      const allWinDays = await multicall({
        allowFailure: false,
        contracts: allPairRewarders.map((pairRewarderAddress) => ({
          address: pairRewarderAddress,
          abi: pairRewarderABI,
          functionName: 'getUserLeaderBoardWins',
          args: [address],
        })),
      });
      setWonPairRewarderAddresses(allPairRewarders.filter((_item, i) => allWinDays[i].length !== 0));
    }

    getData();
  }, [allPairRewarders, address, location.pathname]);

  useEffect(() => {
    async function getData() {
      if (wonPairRewarderAddresses && address) {
        const result: AllPairRewarderRewards = {};
        const pairs = await multicall({
          allowFailure: false,
          contracts: wonPairRewarderAddresses.map((pairRewarderAddress) => ({
            address: pairRewarderAddress,
            abi: pairRewarderABI,
            functionName: 'pair',
          })),
        });

        const allRewards = await Promise.all(
          wonPairRewarderAddresses.map((pairRewarderAddress) =>
            pairRewarderGetAccountRewards(pairRewarderAddress, address),
          ),
        );
        wonPairRewarderAddresses.forEach((pairRewarderAddress, i) => {
          result[pairRewarderAddress] = {
            rewards: allRewards[i],
            pair: pairs[i],
          };
        });

        setAllPairRewarderRewards(result);
      }
    }

    getData();
  }, [address, pairRewarderGetAccountRewards, wonPairRewarderAddresses]);

  const pairsJoined = useMemo(
    () =>
      allPairRewarderRewards
        ? Object.values(allPairRewarderRewards).reduce((a, c) => a.add(c.pair), new Set()).size
        : null,
    [allPairRewarderRewards],
  );

  const [claimedPairRewarderRewards, unClaimedPairRewarderRewards] = useMemo(() => {
    if (!allPairRewarderRewards) return [null, null];
    const claimed: AllPairRewarderRewards = {};
    const unclaimed: AllPairRewarderRewards = {};

    for (const key of Object.keys(allPairRewarderRewards)) {
      const pairRewarderAddress = key as Address;
      const { pair, rewards } = allPairRewarderRewards[pairRewarderAddress];
      const [claimedRewards, unClaimedRewards] = rewards.reduce(
        (acc, reward) => {
          (reward.claimed ? acc[0] : acc[1]).push(reward);
          return acc;
        },
        [[] as PairRewarderRewardItem[], [] as PairRewarderRewardItem[]],
      );

      if (claimedRewards.length) {
        claimed[pairRewarderAddress] = { pair, rewards: claimedRewards };
      }

      if (unClaimedRewards.length) {
        unclaimed[pairRewarderAddress] = { pair, rewards: unClaimedRewards };
      }
    }

    return [claimed, unclaimed];
  }, [allPairRewarderRewards]);

  return {
    pairsJoined,
    wonPairRewarderAddresses,
    allPairRewarderRewards,
    claimedPairRewarderRewards,
    unClaimedPairRewarderRewards,
  };
}
