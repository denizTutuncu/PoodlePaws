// Next, React
import { FC, useEffect, useState } from "react"
import Link from "next/link"

// Wallet
import { useWallet, useConnection } from "@solana/wallet-adapter-react"

// Components
import { FetchCandyMachine } from "../../components/FetchCandyMachine"
import Mint from "../../components/Mint"

import pkg from "../../../package.json"

// Store
import useUserSOLBalanceStore from "../../stores/useUserSOLBalanceStore"
import styles from '../../styles/custom.module.css';

export const MintView: FC = ({}) => {
  const wallet = useWallet()
  const { connection } = useConnection()

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
        <h1 className="text-center text-6xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
          Poodle Paws World Tour {" 🐩 "}
          <span className="text-sm font-normal align-top text-slate-700">
            v{pkg.version}
          </span>
        </h1>
        <h4 className="md:w-full text-center text-slate-300 my-2">
          <p className="max-auto text-center text-4xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
            89 unique poodles from famous cities.
          </p>
          
        </h4>

        <img className={styles.product_image}src='/poodlepawsworldtour.png' alt='The Lira DAO'/>
        
        {/* <div className="max-auto max-auto mockup-code bg-primary p-6 my-2">
          <pre data-prefix="Wallet">
          {wallet && wallet.connected && (
            <p className="text-center text-3xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
              {wallet.publicKey ? wallet.publicKey.toLocaleString() : ""}
            </p>
          )}
          <pre data-prefix="Balance"></pre>
            {wallet && wallet.connected && <p className="text-left text-4xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">{(balance).toLocaleString()} SOL</p>}

          </pre>
        </div> */}

        <div className="text-center p-10">
          <a
            href="https://studio.metaplex.com/project/poodle-paws-world-tour"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center p-5 text-3xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]"
          >
            Click to mint Poodle Paws World Tour on Metaflex
          </a>
{/* 
        <div className="text-center">
            { wallet.connected ? <Mint/> : 
              <div>
                <p  className="text-center text-3xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                  Connect wallet to mint
                </p>
            </div>
          }
          <div className="text-center">
            <FetchCandyMachine />
          </div>
      
        </div> */}

        </div>
      </div>
    </div>
  )
}
