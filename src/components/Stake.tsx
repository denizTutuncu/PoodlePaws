import type { NextPage } from "next"
import { PublicKey } from "@solana/web3.js"
import { useWallet } from "@solana/wallet-adapter-react"
import { useEffect, useState } from "react"

export const Stake: NextPage<StakeProps> = ({ mint, imageSrc }) => {
    const wallet = useWallet()
    const [isStaking, setIsStaking] = useState(false)
    const [level, setLevel] = useState(1)

    useEffect(() => {
        wallet
      }, [wallet])

    return(
        <div>
            { !wallet.connected ? 
                <div> 
                    <h1 className="text-center text-xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                        Connect wallet
                    </h1>
                </div>
                :
                <div> 
                    <h1 className="text-center text-xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                        in Future
                    </h1>
                </div>
            }
        </div>
    )
}

interface StakeProps {
    mint: PublicKey
    imageSrc: string
}

Stake.getInitialProps = async ({ query }: any) => {
    const { mint, imageSrc } = query
  
    if (!mint || !imageSrc) throw { error: "no mint" }
  
    try {
      const mintPubkey = new PublicKey(mint)
      return { mint: mintPubkey, imageSrc: imageSrc }
    } catch {
      throw { error: "invalid mint" }
    }
  }