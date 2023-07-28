import type { NextPage } from "next"
import { PublicKey } from "@solana/web3.js"
import { useWallet } from "@solana/wallet-adapter-react"
import { useEffect } from "react"

export const Dex: NextPage = ({ }) => {
    const wallet = useWallet()

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
                        in future
                    </h1>
                </div>
            }
        </div>
    )
}