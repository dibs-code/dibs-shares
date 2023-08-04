import Modal from 'components/modal';
import usePairName from 'hooks/dibs/usePairName';
import React, { useEffect, useState } from 'react';
import { Address } from 'wagmi';

export function ShowPair({ pairAddress }: { pairAddress: string }) {
  const { pairName } = usePairName(pairAddress as Address);
  return <>{pairName || 'Unknown Pair'}</>;
}

function SelectPair({ pairAddress, onConfirm }: { pairAddress: string; onConfirm: (pairAddress: string) => void }) {
  const [pairAddressLocal, setPairAddressLocal] = useState('');
  useEffect(() => {
    setPairAddressLocal(pairAddress);
  }, [pairAddress]);
  const { pairName } = usePairName(pairAddressLocal as Address);

  return (
    <>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="tokenCount">
          Pair
        </label>
        <input
          className={`block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md`}
          value={pairAddressLocal}
          onChange={(e) => setPairAddressLocal(e.target.value)}
        />
        {pairName || 'Unknown Pair'}
      </div>
      <button className={'btn-medium btn-primary'} onClick={() => onConfirm(pairAddressLocal)}>
        Confirm
      </button>
    </>
  );
}

export function SetPairStage({
  leaderBoardSpotsCount,
  setLeaderBoardSpotsCount,
  pairAddress,
  setPairAddress,
  onNext,
  onPrev,
}: {
  leaderBoardSpotsCount: number;
  setLeaderBoardSpotsCount: (count: number) => void;
  pairAddress: string;
  setPairAddress: (value: string) => void;
  onNext?: () => void;
  onPrev?: () => void;
}) {
  const [pairSelectModalOpen, setPairSelectModalOpen] = useState(false);

  return (
    <>
      {pairAddress ? (
        <div>
          <ShowPair pairAddress={pairAddress} />
          <button className={'btn-medium btn-primary mb-4'} onClick={() => setPairSelectModalOpen(true)}>
            Change Pair
          </button>
        </div>
      ) : (
        <button className={'btn-medium btn-primary mb-4'} onClick={() => setPairSelectModalOpen(true)}>
          Select Pair
        </button>
      )}

      <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="tokenCount">
        Leaderboard spots
      </label>
      <input
        type="number"
        className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
        value={leaderBoardSpotsCount}
        onChange={(e) => setLeaderBoardSpotsCount(Math.max(Math.min(Number(e.target.value), 16), 1))}
      />
      <section className="pagination flex justify-between w-full px-4 gap-20">
        <img src="/assets/images/modal/back-gray.svg" alt="" className="w-8 h-8" />
        <div className="flex mx-auto items-center gap-2">
          <div className="pagination__page bg-primary w-[72px] h-2 rounded-full"></div>
          <div className="pagination__page bg-gray6 w-[72px] h-2 rounded-full"></div>
          <div className="pagination__page bg-gray6 w-[72px] h-2 rounded-full"></div>
        </div>
        <img src="/assets/images/modal/next-colored.svg" onClick={onNext} alt="" className="w-8 h-8 cursor-pointer" />
      </section>
      <Modal open={pairSelectModalOpen} closeModal={() => setPairSelectModalOpen(false)}>
        <SelectPair
          pairAddress={pairAddress}
          onConfirm={(value) => {
            setPairAddress(value);
            setPairSelectModalOpen(false);
          }}
        />
      </Modal>
    </>
  );
}
