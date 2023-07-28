import { useConnection } from "@solana/wallet-adapter-react"
import { PublicKey } from "@solana/web3.js"
import { Metaplex } from "@metaplex-foundation/js"
import { FC, useEffect, useMemo, useState } from "react"
import styles from "../styles/custom.module.css"

export const FetchCandyMachine: FC = () => {
  const candyMachineV2Address = "FVHnPoTaGDa2Z9cpwi2YFmKFy7sSstAwXGSkkcamsP6Q"
  const [collectionID, setCollectionID] = useState(null)
  const [candyMachineData, setCandyMachineData] = useState(null)
  const [itemsMinted, setItemsRedeemed] = useState(null)
  const [itemsAvailable, setItemsAvailable] = useState(null)

  const [pageItems, setPageItems] = useState(null)
  const [page, setPage] = useState(1)
  const { connection } = useConnection()

  const metaplex = useMemo(() => {
    return Metaplex.make(connection)
  }, [connection])

  const fetchCandyMachine = async () => {
    setPage(1)
    try {

      const candyMachine = await metaplex
        .candyMachinesV2()
        .findByAddress({ address: new PublicKey(candyMachineV2Address) })

     
      setItemsAvailable(candyMachine.itemsAvailable.toNumber());
      setItemsRedeemed(candyMachine.itemsMinted.toString())
      setCandyMachineData(candyMachine.items);
      setCollectionID(candyMachine.collectionMintAddress.toString());  
    } catch (error) {
      alert("Please submit a valid Candy Machine V2 address")
    }
  }

  const getPage = async (page, perPage) => {
    const pageItems = candyMachineData?.slice(
      (page - 1) * perPage,
      page * perPage
    )

    let nftData = []
    for (let i = 0; i < pageItems?.length; i++) {
      let fetchResult = await fetch(pageItems[i]?.uri)
      let json = await fetchResult.json()
      nftData.push(json)
    }

    setPageItems(nftData)
  }

  const prev = async () => {
    if (page - 1 < 1) {
      setPage(1)
    } else {
      setPage(page - 1)
    }
  }

  const next = async () => {
    setPage(page + 1)
  }

  useEffect(() => {
    !candyMachineData && fetchCandyMachine();
    getPage(page, 10)
  }, [candyMachineData,  page])
  
  return (
    <div>
      {pageItems && (
        <div>
          {candyMachineData && <ul className="text-center text-3xl md:pl-00 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]"> Minted: {itemsMinted} | Available: {itemsAvailable - itemsMinted} | Total: {itemsAvailable}</ul> }

          <div className={styles.gridNFT}>
            {pageItems.map((nft) => (
              <div key={nft.name}>
                <div> <img className={styles.imageView} src={nft.image} /></div>
                <ul>{nft.name}</ul>
                <ul>{nft.symbol}</ul>
              </div>
            ))}
          </div>

          {candyMachineData && (
            <div className="flex flex-col items-center justify-center p-5">
              <ul className="text-center text-2xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">Candy Machine ID: {candyMachineV3Address}</ul>
              <ul className="text-center text-2xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">Collection Mint ID: {collectionID}</ul>
             </div>
           
          )}
          <button
            className="px-8 m-2 btn animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ..."
            onClick={prev}
          >
            Prev
          </button>
          <button
            className="px-8 m-2 btn animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ..."
            onClick={next}
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}
