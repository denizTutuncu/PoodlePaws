
import { FC, useEffect } from 'react';
import Link from 'next/link';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';
import pkg from '../../../package.json';

export const TradeView: FC = ({ }) => {
    const wallet = useWallet();
    const { connection } = useConnection();

    const balance = useUserSOLBalanceStore((s) => s.balance)
    const { getUserSOLBalance } = useUserSOLBalanceStore()
  
    useEffect(() => {
      if (wallet.publicKey) {
        console.log(wallet.publicKey.toBase58())
        getUserSOLBalance(wallet.publicKey, connection)
      }
    }, [wallet.publicKey, connection, getUserSOLBalance])
  
    return (
  
      <div className="md:hero mx-auto p-4">
        <div className="md:hero-content flex flex-col">
          <div className='mt-6'>
          <div className='text-sm font-normal align-bottom text-right text-slate-600 mt-4'>v{pkg.version}</div>
          <h1 className="text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mb-4">
            Poodle Paws DAO Assets Official Trading Links
          </h1>
          </div>

          <h4 className="md:w-full text-2x1 md:text-2xl text-lefts text-slate-300 my-2">
          <p className='text-slate-500 text-x1 leading-relaxed'>
            Poodle Paws World Tour NFT Collection
          </p>
        </h4>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-indigo-500 rounded-lg blur opacity-40 animate-tilt"></div>
            <div className="max-w-md mx-auto mockup-code bg-primary border-2 border-[#5252529f] p-6 px-10 my-2">
              <pre data-prefix="DAO NFT Collection">
                <code className="flex flex-row">
                  <Link href="https://www.tensor.trade/trade/poodlepawsworldtour" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                    <h1 className="text-center text-xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mb-4">
                        Trade PPWT on Tensor
                    </h1>
                  </Link>
                </code>
              </pre>
            </div>
          </div> 

        <h4 className="md:w-full text-2x1 md:text-2xl text-lefts text-slate-300 my-2">
          <p className='text-slate-500 text-x1 leading-relaxed'>
                Poodle Paws DAO Community Token GPAW (Launching soon!)
          </p>
        </h4>

        {/* <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-indigo-500 rounded-lg blur opacity-40 animate-tilt"></div>
            <div className="max-w-md mx-auto mockup-code bg-primary border-2 border-[#5252529f] p-6 px-10 my-2">
              <pre data-prefix="DAO Community Token">
                <code className="flex flex-row">
                  <Link href="https://www.tensor.trade/trade/poodlepawsworldtour" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                    <h1 className="text-center text-xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mb-4">
                        Trade GPAW on DEX
                    </h1>
                  </Link>
                </code>
              </pre>
            </div>
          </div>  */}


        </div>
      </div>
    );
  };
