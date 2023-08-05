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

export const DaoView: FC = ({ }) => {
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
              Poodle Paws DAO
            </h1>
          </div>
          <div className="text-left">
            <Link href="https://app.realms.today/dao/PPWT" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                <div className='flex flex-row ml-1'>
                <h1 className="text-center text-3xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mb-4">
                    Open Poodle Paws DAO on Realms
                </h1>
                </div>
            </Link>
         </div>

          <h4 className="md:w-full text-2x1 md:text-2xl text-lefts text-slate-300 my-2">
            <p className='text-slate-500 text-x1 leading-relaxed'>
              Future proposals will be displayed here, but voting will happen on Realms.
            </p>
          </h4>

          <h4 className="md:w-full text-2x1 md:text-4xl text-lefts text-slate-300 my-2">
            <p>Empowering Innovation and the Pet-Loving Community</p>
          </h4>
          <h4 className="md:w-full text-2x1 md:text-2xl text-lefts text-slate-300 my-2">
            <p className='text-slate-500 text-x1 leading-relaxed'>
              Poodle Paws DAO is a decentralized autonomous organization that aims to revolutionize the pet industry by creating innovative digital products and services. 
              Through the sale of unique NFTs and staking SOL tokens, the DAO plans to generate funds to drive its mission forward.
            </p>
          </h4>

          <h4 className="md:w-full text-2x1 md:text-4xl text-lefts text-slate-300 my-2">
            <p>Vision and Mission</p>
          </h4>
          <h4 className="md:w-full text-2x1 md:text-2xl text-lefts text-slate-300 my-2">
            <p className='text-slate-500 text-x1 leading-relaxed'>
              Poodle Paws DAO envisions becoming the preeminent pet brand in the realm of Web3 and beyond.
            </p>
          </h4>
          <h4 className="md:w-full text-2x1 md:text-2xl text-lefts text-slate-300 my-2">
            <p className='text-slate-500 text-x1 leading-relaxed'>
              The DAO plans to generate profits through various means, such as the creation of additional NFT collections or physical products. 
              These profits are then channeled back into the organization to support its mission, which includes furthering its reach as a prominent pet brand and contributing to animal welfare initiatives worldwide.
            </p>
          </h4>

          <h4 className="md:w-full text-2x1 md:text-4xl text-lefts text-slate-300 my-2">
            <p>NFT Sales and Token Distribution Strategy</p>
          </h4>
          <h4 className="md:w-full text-2x1 md:text-2xl text-lefts text-slate-300 my-2">
            <p className='text-slate-500 text-x1 leading-relaxed'>
              Poodle Paws DAO offers 55 unique NFTs for sale, priced at 175 SOL tokens each. 
              95% of the proceeds will be deposited into the DAO's treasury, while the creators receive the remaining 5%. 
              You might wonder why only 55 out of 89 total NFTs are available for purchase.
            </p>
          </h4>
          <h4 className="md:w-full text-2x1 md:text-2xl text-lefts text-slate-300 my-2">
            <p className='text-slate-500 text-x1 leading-relaxed'>
              The limited number of NFTs available for purchase is due to the token distribution strategy, with 20% reserved for founders, 20% for the team, and 60% for the public sale. 
              The founders and team members will receive slightly less than the allocated 20% as they will be sharing a total of 34 NFTs. 
              By following this plan, the DAO expects to generate approximately 9143 $SOL tokens.
            </p>
          </h4>

          <h4 className="md:w-full text-2x1 md:text-4xl text-lefts text-slate-300 my-2">
            <p>NFTs and Voting Power</p>
          </h4>
          <h4 className="md:w-full text-2x1 md:text-2xl text-lefts text-slate-300 my-2">
            <p className='text-slate-500 text-x1 leading-relaxed'>
              The ownership of a specific NFT confers voting power within the DAO. 
              In the case of Poodle Paws DAO, the 89 stakeholders who hold these NFTs have the authority to propose new ideas, suggest changes to the organization, or vote on existing proposals. 
              The voting process is typically conducted on-chain through smart contracts, ensuring that it is transparent and tamper-proof
            </p>
          </h4>
          <h4 className="md:w-full text-2x1 md:text-2xl text-lefts text-slate-300 my-2">
            <p className='text-slate-500 text-x1 leading-relaxed'>
              Each NFT owner has the opportunity to voice their opinion, express their preferences, and cast their vote on proposals put forward by the community. 
              This democratic approach ensures that no single entity or group has disproportionate control over the organization's decisions. 
              Instead, voting power is distributed among all NFT holders, fostering a fair and inclusive governance model.
            </p>
          </h4>

          <h4 className="md:w-full text-2x1 md:text-4xl text-lefts text-slate-300 my-2">
            <p>Staking SOL Tokens and Monthly Returns</p>
          </h4>
          <h4 className="md:w-full text-2x1 md:text-2xl text-lefts text-slate-300 my-2">
            <p className='text-slate-500 text-x1 leading-relaxed'>
              After the NFT sales, the DAO may vote on staking 9000 $SOL tokens. 
              This action is projected to generate a monthly return of 52.93603 SOL, taking into account the current inflation rate of 7.4% annually. 
              This additional income will significantly boost the DAO's treasury on a monthly basis, empowering it to create innovative products or digital content and generate further profits.
            </p>
          </h4>

          <h4 className="md:w-full text-2x1 md:text-4xl text-lefts text-slate-300 my-2">
            <p>Democratic Decision-Making Process</p>
          </h4>
          <h4 className="md:w-full text-2x1 md:text-2xl text-lefts text-slate-300 my-2">
            <p className='text-slate-500 text-x1 leading-relaxed'>
              The DAO makes decisions through a democratic voting mechanism, where a 60% majority vote is required.
            </p>
          </h4>
          <div className='flex flex-row ml-1'>
            <Image
              src="/PoddlePawsVoting.png"
              alt="Poodle Paws DAO Voting"
              width={1500}
              height={300}
            />
          </div> 
          <h4 className="md:w-full text-2x1 md:text-2xl text-lefts text-slate-300 my-2">
            <p className='text-slate-500 text-x1 leading-relaxed'>
              Ownership of NFTs effectively makes stakeholders part-owners of the DAO, giving them a direct stake in the organization's success and future. 
              As they hold NFTs, they become legitimate shareholders with the right to propose initiatives that align with the organization's mission, suggest improvements, and collectively decide on the distribution of profits.
            </p>
          </h4>
          <h4 className="md:w-full text-2x1 md:text-2xl text-lefts text-slate-300 my-2">
            <p className='text-slate-500 text-x1 leading-relaxed'>
              The democratic and transparent nature of DAOs ensures that decisions are made openly and that stakeholders have access to all relevant information. 
              This transparency builds trust and empowers shareholders to actively engage in the organization's activities, fostering a strong sense of community and shared responsibility.
            </p>
          </h4>

          <div className="text-left">
            <Link href="https://app.realms.today/dao/PPWT" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                <div className='flex flex-row ml-1'>
                <h1 className="text-center text-3xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mb-4">
                    Open Poodle Paws DAO on Realms
                </h1>
                </div>
            </Link>
         </div>

        </div>
      </div>
    );
  };s
  