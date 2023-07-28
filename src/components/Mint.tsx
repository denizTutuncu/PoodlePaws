import {
    VStack
  } from "@chakra-ui/react"
  import {
    FC,
    MouseEventHandler,
    useCallback,
    useEffect,
    useMemo,
    useState,
  } from "react"
  import { PublicKey } from "@solana/web3.js"
  import { useConnection, useWallet } from "@solana/wallet-adapter-react"
  import {
    Metaplex,
    walletAdapterIdentity,
    CandyMachine,
  } from "@metaplex-foundation/js"
  import { useRouter } from "next/router"
  
  const Mint: FC = () => {
    const { connection } = useConnection()
    const walletAdapter = useWallet()
    const [candyMachine, setCandyMachine] = useState<CandyMachine>()
    const [isMinting, setIsMinting] = useState(false)
  
    const metaplex = useMemo(() => {
      return Metaplex.make(connection).use(walletAdapterIdentity(walletAdapter))
    }, [connection, walletAdapter])
  
    useEffect(() => {
      if (!metaplex) return
  
      metaplex
        .candyMachines()
        .findByAddress({
          address: new PublicKey("SwEn7xQspRFbcDAeiivdiVDXgmWsarZTSvbGZ78RNYt"),
        })
       
        .then((candyMachine) => {
          console.log(candyMachine)
          setCandyMachine(candyMachine)
        })
        .catch((error) => {
          alert(error)
        })
    }, [metaplex])
  
    const router = useRouter()
  
    const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
      async (event) => {
        if (event.defaultPrevented) return
  
        if (!walletAdapter.connected || !candyMachine) {
          return
        }
  
        if (candyMachine.itemsRemaining.toNumber() == 0) {
          alert("Sold out!")
          return
        }
  
        const pubKey = walletAdapter.publicKey
        if (pubKey) {
          const balance = await connection.getBalance(pubKey)
          const collectionMintAddress = candyMachine.collectionMintAddress?.toString()
          console.log("balance", balance)
          console.log("collectionMintAddress", collectionMintAddress)
          console.log("candyMachine", candyMachine)
        }
        
        try {
          setIsMinting(true)
          const nft = await metaplex.candyMachines().mint({
              candyMachine,
              collectionUpdateAuthority: new PublicKey("9P5LGe5wg2Kw8cWpj1AtrUGzjRhDsQaLiAaP1pLqEYaf")
          })
  
          console.log(nft)
          router.push(`/newMint?mint=${nft.nft.address.toBase58()}`)
        } catch (error) {
          alert(error)
        } finally {
          setIsMinting(false)
        }
      },
      [metaplex, walletAdapter, candyMachine]
    )
  
    return (
      <VStack spacing={20}>
         <button
            className="px-20 m-20 btn text-4xl animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ..."
            onClick={handleClick}
          >
            Mint
          </button>
      </VStack>
    )
  }
  
  export default Mint