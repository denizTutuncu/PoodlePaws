// Next, React
import { FC, useEffect, useState } from 'react';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';

//Components
import Image from 'next/image';
import Link from 'next/link';

import pkg from '../../../package.json';

export const MintView: FC = ({ }) => {
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
              Poodle Paws World Tour 🐩 
            </h1>
          </div>
        
         <h4 className="md:w-full text-2x1 md:text-4xl text-lefts text-slate-300 my-2">
            <p>89 unique poodles from famous cities.</p>
         </h4>

         <div className='flex flex-row ml-1'>
            <Image
              src="/DAOBanner.png"
              alt="Poodle Paws World Tour NFT Collection Banner"
              width={1500}
              height={300}
            />
          </div>

          <h4 className="md:w-full text-2x1 md:text-2xl text-lefts text-slate-300 my-2">
            <p className='text-slate-500 text-x1 leading-relaxed'>
                Once you`ve minted your exclusive Poodle Paws World Tour NFT, a whole new world of possibilities awaits you! As a proud NFT owner, you hold the key 🔑 to unlock the gateway to the Poodle Paws DAO. 
                With excitement in your heart, head to the DAO`s dedicated page, where you can immerse yourself in the decentralized wonders that lie ahead. 
                Armed with your voting power, you become an integral part of the decision-making process, actively shaping the destiny of the DAO.
            </p>
          </h4>
          <h4 className="md:w-full text-2x1 md:text-2xl text-lefts text-slate-300 my-2">
            <p className='text-slate-500 text-x1 leading-relaxed'>
            Your voice matters, and your ideas count, as you engage with a vibrant community of like-minded individuals united by their passion for pets and animal welfare. 
            Step into the future of financial systems and join the Poodle Paws DAO, where your ownership is not just a status symbol but a profound opportunity to make a real impact and create a better world for our furry friends. 
            Together, let`s pave the way for an extraordinary journey filled with innovation, compassion, and boundless possibilities!
            </p>
          </h4>

          <h4 className="md:w-full text-2x1 md:text-2xl text-lefts text-slate-300 my-2">
            <p className='text-slate-500 text-x1 leading-relaxed'>
              We are absolutely thrilled to discover which delightful poodle and charming city you`ll end up with!
            </p>
          </h4>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-indigo-500 rounded-lg blur opacity-40 animate-tilt"></div>
            <div className="max-w-md mx-auto mockup-code bg-primary border-2 border-[#5252529f] p-6 px-10 my-2">
              <pre data-prefix="Launches on 01/01/2024 08:00:00 UTC">
                <code className="flex flex-row">
                  <Link href="https://studio.metaplex.com/project/poodle-paws-world-tour" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                    <h1 className="text-center text-3xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mb-4">
                      Mint on Metaplex
                    </h1>
                  </Link>
                </code>
              </pre>
            </div>
          </div>
      
          <h4 className="md:w-full text-2x1 md:text-4xl text-lefts text-slate-300 my-2">
            <p>13 poodles from PPWT NFT Collection</p>
         </h4>

          <div className='flex flex-row ml-1'>
            <Image
              src="/Poodles.png"
              alt="Poodle Paws DAO Voting"
              width={1500}
              height={300}
            />
          </div> 

          <h4 className="md:w-full text-2x1 md:text-2xl text-lefts text-slate-300 my-2">
            <p className='text-slate-500 text-x1 leading-relaxed'>
              The Poodle Paws World Tour NFT collection will be open for public minting on Metaplex starting January 1, 2024.
            </p>
          </h4>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-indigo-500 rounded-lg blur opacity-40 animate-tilt"></div>
            <div className="max-w-md mx-auto mockup-code bg-primary border-2 border-[#5252529f] p-6 px-10 my-2">
              <pre data-prefix="Launches on 01/01/2024 08:00:00 UTC">
                <code className="flex flex-row">
                  <Link href="https://studio.metaplex.com/project/poodle-paws-world-tour" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                    <h1 className="text-center text-3xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mb-4">
                      Mint on Metaplex
                    </h1>
                  </Link>
                </code>
              </pre>
            </div>
          </div> 
      
        </div>
      </div>
    );
  };
  