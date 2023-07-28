import { FC } from "react"
import Store  from "../../components/Store/Store"
import { useWallet } from "@solana/wallet-adapter-react"
import { PublicKey } from "@solana/web3.js"

export const StoreView: FC = ({}) => {
  const wallet = useWallet()
  const mintPubKey = new PublicKey("AFgMKrBocQbvPGM5A5i7XbNcBnL8sSGSpSmGDSw3LpCU")

  return (
    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
          DAO Store
        </h1>
        {/* CONTENT GOES HERE */}
          <Store />
      </div>
    </div>
  )
}