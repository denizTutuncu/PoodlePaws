// Next, React
import { FC, useEffect, useState } from 'react';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

import pkg from '../../../package.json';

//Components
import Image from 'next/image';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';

export const HomeView: FC = ({ }) => {
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
          Poodle Paws
        </h1>
        </div>

        <h4 className="md:w-full text-2x1 md:text-4xl text-lefts text-slate-300 my-2">
          <p>Revolutionizing Pet Brands and Empowering Animal Welfare in the Web3 Era</p>
        </h4>
        <h4 className="md:w-full text-2x1 md:text-2xl text-lefts text-slate-300 my-2">
          <p className='text-slate-500 text-x1 leading-relaxed'>
            In the rapidly evolving landscape of Web3 and decentralized technologies, innovative projects are constantly emerging to reshape traditional industries. 
            Among these groundbreaking initiatives, Poodle Paws DAO stands out as a promising venture that aims to revolutionize the pet industry while making a positive impact on animal welfare worldwide.
          </p>
        </h4>
        <h4 className="md:w-full text-2x1 md:text-2xl text-lefts text-slate-300 my-2">
        <p className='text-slate-500 text-x1 leading-relaxed'>
            Poodle Paws DAO envisions becoming the preeminent pet brand in the realm of Web3 and beyond. 
            However, its ambitions go beyond commercial success; the DAO is committed to leveraging its influence and resources to support animals in need across the globe. At the core of its mission is a deep-rooted desire to create a harmonious relationship between commerce, community, and compassion.
          </p>
        </h4>

        <h4 className="md:w-full text-2x1 md:text-4xl text-lefts text-slate-300 my-2">
          <p>Poodle Paws World Tour Collection: A Gateway to DAO Stakeholder Engagement</p>
        </h4>
        <h4 className="md:w-full text-2x1 md:text-2xl text-lefts text-slate-300 my-2">
          <p className='text-slate-500 text-x1 leading-relaxed'>
          As its first major initiative, Poodle Paws DAO has introduced the `Poodle Paws World Tour`` collection—an exclusive set of 89 unique non-fungible tokens (NFTs) residing on the Solana blockchain. 
          More than mere photographs, each NFT within this collection serves as a symbolic key 🔑 to unlock the DAO`s inner workings.
          </p>
        </h4>
        <h4 className="md:w-full text-2x1 md:text-2xl text-lefts text-slate-300 my-2">
          <p className='text-slate-500 text-x1 leading-relaxed'>
            By owning one of these NFT keys, stakeholders gain access to actively participate in Poodle Paws DAO. 
            They have the authority to propose new ideas and suggestions or cast their votes on existing proposals, effectively determining the movement of funds stored securely within the DAO`s virtual vaults. 
          </p>
        </h4>

        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-indigo-500 rounded-lg blur opacity-40 animate-tilt"></div>
          <div className="max-w-md mx-auto mockup-code bg-primary border-2 border-[#5252529f] p-6 px-10 my-2">
            <pre data-prefix="Poodle Paws World Tour NFT Collection">
              <code className="truncate">
                <div className='flex flex-row ml-1'>
                  <Image
                    src="/Poodlepawsworldtour.png"
                    alt="Poodle Paws World Tour NFT Collection"
                    width={400}
                    height={300}
                  />
                </div> 
              </code>
            </pre>
          </div>
        </div>

        <h4 className="md:w-full text-2x1 md:text-4xl text-lefts text-slate-300 my-2">
          <p>Decentralized Autonomous Organization (DAO): Redefining Financial Systems</p>
        </h4>
        <h4 className="md:w-full text-2x1 md:text-2xl text-lefts text-slate-300 my-2">
          <p className='text-slate-500 text-x1 leading-relaxed'>
            The innovative structure of Poodle Paws DAO embodies the principles of decentralization and autonomy. 
            As a Decentralized Autonomous Organization (DAO), it represents a new generation of financial systems, characterized by its democratic and transparent nature.
          </p>
        </h4>
        <h4 className="md:w-full text-2x1 md:text-2xl text-lefts text-slate-300 my-2">
          <p className='text-slate-500 text-x1 leading-relaxed'>
            Unlike traditional corporate entities, Poodle Paws DAO is not governed by a central authority; instead, it is a collectively managed organization, where all transactions and decision-making processes are publicly visible and open to scrutiny. 
            The 89 stakeholders collectively steer the direction of the DAO, ensuring that no single entity holds undue control over its operations. 
            This decentralized approach enhances trust, fosters community involvement, and encourages creativity and innovation from its members.
          </p>
        </h4>
        <h4 className="md:w-full text-2x1 md:text-2xl text-lefts text-slate-300 my-2">
          <p className='text-slate-500 text-x1 leading-relaxed'>
            The DAO makes decisions through a democratic voting mechanism, where a 60% majority vote is required.
          </p>
        </h4>
        <h4 className="md:w-full text-2x1 md:text-2xl text-lefts text-slate-300 my-2">
          <p className='text-slate-500 text-x1 leading-relaxed'>
            Ownership of NFTs effectively makes stakeholders part-owners of the DAO, giving them a direct stake in the organization`s success and future. 
            As they hold NFTs, they become legitimate shareholders with the right to propose initiatives that align with the organization`s mission, suggest improvements, and collectively decide on the distribution of profits.
          </p>
        </h4>
        <h4 className="md:w-full text-2x1 md:text-2xl text-lefts text-slate-300 my-2">
          <p className='text-slate-500 text-x1 leading-relaxed'>
            The democratic and transparent nature of DAOs ensures that decisions are made openly and that stakeholders have access to all relevant information. 
            This transparency builds trust and empowers shareholders to actively engage in the organization`s activities, fostering a strong sense of community and shared responsibility.
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
        {/* <div className="flex flex-col mt-2">
          <h4 className="md:w-full text-2xl text-slate-300 my-2">
          {wallet &&
          <div className="flex flex-row justify-center">
            <div>
              {(balance || 0).toLocaleString()}
            </div>
            <div className='text-slate-600 ml-2'>
              SOL
            </div>
          </div>
          }
          </h4>
        </div> */}
      </div>
    </div>
  );
};
