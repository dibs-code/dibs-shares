import TokenAddressInput from 'components/basic/input/TokenAddressInput';
import Modal, { ModalProps } from 'components/modal';
import { CreateLeaderBoardModalCreateStage } from 'components/pairIsolated/CreateLeaderBoardModal/CreateStage';
import usePairRewarderSetPrize from 'hooks/dibs/usePairRewarderSetPrize';
import React, { useState } from 'react';

export enum CreateLeaderBoardStage {
  CREATE,
  SET_TOKENS,
  SET_AMOUNTS,
}

export default function CreateLeaderBoardModal(props: ModalProps) {
  const [createLeaderBoardStage, setCreateLeaderBoardStage] = useState(CreateLeaderBoardStage.CREATE);
  const {
    leaderBoardSpotsCount,
    setLeaderBoardSpotsCount,
    setRewardTokenCount,
    setRewardTokenAddresses,
    setAllTokenAmounts,
    pairName,
    pairAddress,
    setPairAddress,
    rewardTokenCount,
    rewardTokenAddresses,
    allTokenAmounts,
    handleTokenAmountChange,
    handleButtonClick,
    handleTokenAddressChange,
    pending,
    activeLeaderBoardInfo,
  } = usePairRewarderSetPrize();

  return (
    <Modal {...props}>
      <div>
        {createLeaderBoardStage === CreateLeaderBoardStage.CREATE ? (
          <CreateLeaderBoardModalCreateStage
            leaderBoardSpotsCount={leaderBoardSpotsCount}
            setLeaderBoardSpotsCount={setLeaderBoardSpotsCount}
            onNext={() => setCreateLeaderBoardStage(CreateLeaderBoardStage.SET_TOKENS)}
          />
        ) : (
          <div className="w-full max-w-lg px-8 py-4 mx-auto bg-white rounded-lg shadow-md mt-2">
            {createLeaderBoardStage === CreateLeaderBoardStage.SET_TOKENS ? (
              <>
                {rewardTokenAddresses.slice(0, rewardTokenCount).map((tokenAddress, i) => (
                  <div className="border-t-2 py-2" key={i}>
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="tokenCount">
                      Reward Token {i + 1}
                    </label>
                    <TokenAddressInput
                      type="text"
                      className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
                      value={tokenAddress}
                      placeholder={`Token Address`}
                      onChange={(event) => handleTokenAddressChange(i, event.target.value)}
                    />
                  </div>
                ))}
                <div>
                  <button
                    className={'btn-medium btn-primary'}
                    onClick={() => setRewardTokenCount((count) => Math.min(count + 1, 4))}
                  >
                    +
                  </button>
                </div>

                <button className={'btn-medium btn-primary'}>Prev</button>
                <button
                  className={'btn-medium btn-primary'}
                  onClick={() => setCreateLeaderBoardStage(CreateLeaderBoardStage.SET_AMOUNTS)}
                >
                  Next
                </button>
              </>
            ) : (
              <>
                {rewardTokenAddresses.slice(0, rewardTokenCount).map((tokenAddress, i) => (
                  <div className="border-t-2 py-2" key={i}>
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="tokenCount">
                      Reward Token {i + 1}
                    </label>
                    <TokenAddressInput
                      type="text"
                      className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
                      value={tokenAddress}
                      placeholder={`Token Address`}
                      onChange={(event) => handleTokenAddressChange(i, event.target.value)}
                    />
                    <div className="flex py-2 flex-wrap">
                      {allTokenAmounts[i].slice(0, leaderBoardSpotsCount).map((rewardAmount, j) => (
                        <div className={'w-1/2 px-2'} key={j}>
                          Rank {j + 1} Reward Amount
                          <input
                            type="number"
                            className="block w-full px-4 py-2 border border-gray-300 rounded-md"
                            value={rewardAmount}
                            onChange={(event) => handleTokenAmountChange(i, j, Number(event.target.value))}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleButtonClick();
                  }}
                  disabled={pending}
                  className="w-full px-4 py-2 mt-4 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-700"
                >
                  {pending
                    ? 'Sending Transaction...'
                    : activeLeaderBoardInfo && activeLeaderBoardInfo?.winnersCount !== BigInt(0)
                    ? 'Update Rewards'
                    : 'Set Rewards'}
                </button>

                <button
                  className={'btn-medium btn-primary'}
                  onClick={() => setCreateLeaderBoardStage(CreateLeaderBoardStage.SET_TOKENS)}
                >
                  Prev
                </button>
                <button className={'btn-medium btn-primary'}>Next</button>
              </>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
}
