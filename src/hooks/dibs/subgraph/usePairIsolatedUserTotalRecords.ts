import { useApolloClient } from '@apollo/client';
import { UserVolumeDataQuery } from 'apollo/__generated__/graphql';
import { UserVolumeData } from 'apollo/queries';
import BigNumberJS from 'bignumber.js';
import { useCallback, useEffect, useState } from 'react';
import { fromWei } from 'utils/numbers';
import { Address } from 'wagmi';

const usePairIsolatedUserTotalRecords = (account: Address | undefined) => {
  const apolloClient = useApolloClient();

  const [userTotalVolume, setUserTotalVolume] = useState<BigNumberJS | null>(null);
  const [userTotalRecords, setUserTotalRecords] = useState<UserVolumeDataQuery['dailyGeneratedVolumes'] | null>(null);
  const getUserAllDaysLeaderboardData = useCallback(
    async (user: string): Promise<UserVolumeDataQuery['dailyGeneratedVolumes']> => {
      let offset = 0;
      const result: UserVolumeDataQuery['dailyGeneratedVolumes'] = [];
      let chunkResult: UserVolumeDataQuery['dailyGeneratedVolumes'] = [];
      do {
        chunkResult = (
          await apolloClient.query({
            query: UserVolumeData,
            variables: { user, skip: offset },
            fetchPolicy: 'cache-first',
          })
        ).data.dailyGeneratedVolumes;
        result.push(...chunkResult);
        offset += chunkResult.length;
      } while (chunkResult.length && offset <= 5000);
      return result;
    },
    [apolloClient],
  );

  useEffect(() => {
    const fetchInfo = async () => {
      if (!account) return;
      try {
        const records = await getUserAllDaysLeaderboardData(account);
        setUserTotalRecords(records);
        const totalUserVolumeWei = records.reduce(
          (a, c) => a.plus(new BigNumberJS(c.amountAsReferrer)),
          new BigNumberJS(0),
        );
        setUserTotalVolume(fromWei(totalUserVolumeWei));
      } catch (error) {
        console.log('leaderboard get error :>> ', error);
      }
    };
    fetchInfo();
  }, [account, getUserAllDaysLeaderboardData]);

  return { userTotalVolume, userTotalRecords };
};
export default usePairIsolatedUserTotalRecords;
