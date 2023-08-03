// Next, React
import { FC, useEffect, useState } from "react"
import Link from "next/link"

// Wallet
import { useWallet, useConnection } from "@solana/wallet-adapter-react"

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
    <div className="md:hero mx-auto p-5">
      <div className="md:hero-content flex flex-col">
        <h1 className="text-left text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
          Poodle Paws World Tour {" 🐩 "}
          <span className="text-sm font-normal align-top text-slate-700">
            v{pkg.version}
          </span>
        </h1>
        <h4 className="md:w-full text-center text-slate-300 my-2">
          <p className="max-auto text-center text-3xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
            89 unique poodles from famous cities.
          </p>
        </h4>

        <div className="text-center p-10">
          <a
            href="https://studio.metaplex.com/project/poodle-paws-world-tour"
            target="_blank"
            rel="noopener noreferrer"
            className="text-left p-5 text-3xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]"
          >
            Click to mint Poodle Paws World Tour on Metaflex
          </a>
        </div>

        <h3 className="md:w-full text-left text-slate-300 my-2">
            <p className="max-auto text-left text-xl md:pl-12 text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
            Once you've minted your exclusive Poodle Paws World Tour NFT, a whole new world of possibilities awaits you! 
            As a proud NFT owner, you hold the key 🔑 to unlock the gateway to the Poodle Paws DAO. With excitement in your heart, head to the DAO's dedicated page, where you can immerse yourself in the decentralized wonders that lie ahead. Armed with your voting power, you become an integral part of the decision-making process, actively shaping the destiny of the DAO. 
          </p>
        </h3>

        <h3 className="md:w-full text-left text-slate-300 my-2">
            <p className="max-auto text-left text-xl md:pl-12 text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
            Your voice matters, and your ideas count, as you engage with a vibrant community of like-minded individuals united by their passion for pets and animal welfare. 
            Step into the future of financial systems and join the Poodle Paws DAO, where your ownership is not just a status symbol but a profound opportunity to make a real impact and create a better world for our furry friends. 
            Together, let's pave the way for an extraordinary journey filled with innovation, compassion, and boundless possibilities! 
          </p>
        </h3>

        <img className={styles.product_image}src='/poodlepawsworldtour.png' alt='The Lira DAO'/>
        
        <div className="text-center p-10">
          <a
            href="https://studio.metaplex.com/project/poodle-paws-world-tour"
            target="_blank"
            rel="noopener noreferrer"
            className="text-left p-5 text-3xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]"
          >
            Click to mint Poodle Paws World Tour on Metaflex
          </a>
        </div>
      </div>
    </div>
  )
}
