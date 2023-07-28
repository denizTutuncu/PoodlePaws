import {
    VStack
  } from "@chakra-ui/react"
  import {
    FC,
    useEffect,
    useState,
  } from "react"
  import { useWallet } from "@solana/wallet-adapter-react"
  import CreateProduct from "./CreateProduct";
  import { Product } from "./Product"
  import styles from "../../styles/Product.module.css";

  const Store: FC = () => {
    const { publicKey } = useWallet();
    const isOwner = ( publicKey ? publicKey.toString() === `5hi2GkLd46S6nxBoWan3e7tNr2Hfa7VoAN7oaQSbuM6z` : false );
    const [creating, setCreating] = useState(false);
    const [products, setProducts] = useState([]);
  
      useEffect(() => {
        if (publicKey) {
          fetch(`api/fetchProducts`)
            .then(response => response.json())
            .then(data => {
              setProducts(data);
              console.log("Products", data);
            });
        }
      }, [publicKey]);
    
      const renderItemBuyContainer = () => (

          <div className={styles.products_container}>
            {products.map((product) => (
              <Product id={product.id} name={product.name} price={product.price} description={product.description} image_url={product.image_url}/>
            ))}
          </div>
     );
  
    return (
      <VStack>
            {isOwner && (
                    <button className={styles.buy_button} onClick={() => setCreating(!creating)}>
                    {creating ? "Close" : "Create Product"}
                    </button>
            )}
            { creating && <CreateProduct /> }

            { publicKey ? 
              // renderItemBuyContainer() 
              <h1 className="text-center text-xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                Coming soon
              </h1>
              :
              <div> 
                    <h1 className="text-center text-xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                        Connect wallet
                    </h1>
                </div>
            }
            
      </VStack>
    );
  }
  
  export default Store;