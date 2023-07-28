import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { Metaplex, walletAdapterIdentity } from "@metaplex-foundation/js"
import { FC, useEffect, useState } from "react"
import styles from "../styles/custom.module.css"

export const FetchNft: FC = () => {
  const [nftData, setNftData] = useState(null)

  const wallet = useWallet()
  const { connection } = useConnection()

  const metaplex = Metaplex.make(connection).use(walletAdapterIdentity(wallet))

  const fetchNfts = async () => {
    if (!wallet.connected) {
      return
    }

    const nfts = await metaplex
      .nfts()
      .findAllByOwner({ owner: wallet.publicKey })

    let nftData = []

    for (let i = 0; i < nfts.length; i++) {
      let fetchResult = await fetch(nfts[i].uri)
      let json = await fetchResult.json()
      nftData.push(json)
    }

    setNftData(nftData)
  }

  useEffect(() => {
    wallet && fetchNfts()
  }, [wallet])

  return (
    <div>
      {nftData ? (
        <div className={styles.gridNFT}>
          {nftData.map((nft) => (
            <div key={nft.name}>
              <ul>{nft.name}</ul>
              <img className={styles.imageView} src={nft.image} />
              <ul>{nft.symbol}</ul>
              <ul>
                {nft.attributes?.map((attribute) => (
                  <li>{`${attribute.trait_type}: ${attribute.value}`}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )
      :
      <div>
        <h1 className="text-center text-xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
          Connect wallet
        </h1>
      </div>
      }
    </div>
  )
}

