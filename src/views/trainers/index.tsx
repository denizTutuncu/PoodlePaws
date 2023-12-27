// Next, React
import { FC, useEffect } from 'react';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';

import pkg from '../../../package.json';

export const TrainersView: FC = ({ }) => {
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
            Poodle Paws Community Trainers
          </h1>
          </div>

          <h4 className="md:w-full text-2x1 md:text-2xl text-lefts text-slate-300 my-2">
          <p className='text-slate-500 text-x1 leading-relaxed'>
                Poodle Paws DAO Introduces Supported Trainer Initiative!
          </p>
        </h4>

         
          <h4 className="md:w-full text-2x1 md:text-2xl text-lefts text-slate-300 my-2">
          <p className='text-slate-500 text-x1 leading-relaxed'>
            We are thrilled to share a groundbreaking initiative by Poodle Paws DAO. 
            Recognizing the profound bond between humans and our furry companions, we are excited to announce the selection of a dedicated group of dog trainers who will be championed and supported by our DAO.
            </p>
         </h4>

         <h4 className="md:w-full text-2x1 md:text-2xl text-lefts text-slate-300 my-2">
          <p className='text-slate-500 text-x1 leading-relaxed'>
          Our mission remains steadfast: to offer unparalleled opportunities for our trainers, fostering an environment where they can excel in imparting invaluable experiences to our pets. 
          Through the on-chain program, we aim to create a transparent and efficient platform, ensuring that every interaction and training session is optimized for the utmost benefit of our dogs.
          </p>
         </h4>

         <h4 className="md:w-full text-2x1 md:text-2xl text-lefts text-slate-300 my-2">
          <p className='text-slate-500 text-x1 leading-relaxed'>
          With this initiative, we are not just refining training techniques; we are elevating our relationship with our dogs to unprecedented heights. 
          Together, let`s embark on this journey to nurture, train, and cherish our furry friends like never before.
          </p>
         </h4>

         <h4 className="md:w-full text-2x1 md:text-2xl text-lefts text-slate-300 my-2">
          <p className='text-slate-500 text-x1 leading-relaxed'>
          Stay tuned for more updates and join us in this exciting new chapter!
          </p>
         </h4>

        </div>
      </div>
    );
  };
  