import { FC } from "react"
import { Stake } from "../../components/Stake"
import { useWallet } from "@solana/wallet-adapter-react"
import { PublicKey } from "@solana/web3.js"

export const StakingView: FC = ({}) => {
  const wallet = useWallet()
  const mintPubKey = new PublicKey("HbsW9wKykTu2w18uAeCyPezpJGdbKLwMoDNQAbSjd3qC")

  return (
    <div className="md:hero mx-auto p-5">
      <div className="md:hero-content flex flex-col">
        <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
          Stake NFTs
        </h1>
        {/* CONTENT GOES HERE */}
        <div className="text-center">
          <Stake mint={mintPubKey} imageSrc={""} />
        </div>
      </div>
    </div>
  )
}