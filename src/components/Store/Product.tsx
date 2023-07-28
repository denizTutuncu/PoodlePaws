import type { NextPage } from "next"
import { useWallet } from "@solana/wallet-adapter-react"
import { useEffect, useState } from "react"
import styles from "../../styles/Product.module.css";
import Buy from "./Buy";

export const Product: NextPage<ProductProps> = ({ id, name, price, description, image_url }) => {
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
                    <h1 className="text-left font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">

                    <div className={styles.product_container}>
                      <div >
                        <img className={styles.product_image}src={image_url} alt={name} />
                      </div>

                      <div className={styles.product_details}>
                        <div className={styles.product_text}>
                          <div className={styles.product_title}>{name}</div>
                            <div className={styles.product_description}>{description}</div>
                        </div>

                        <div className={styles.product_action}>
                          <div className={styles.product_price}>{price} SOL</div>
                            <Buy itemID={id} />
                        </div>
                      </div>
                    </div>
                    </h1>
                </div>
            } 
        </div>
    )
}

interface ProductProps {
    id: string
    name: string
    price: string
    description: string
    image_url: string
}

Product.getInitialProps = async ({ query }: any) => {
    const { id, name, price, description, image_url} = query
  
    if (!id) throw { error: "no id" }
  
    try {
      return { id: id, name: name, price: price, description: description, image_url: image_url }
    } catch {
      throw { error: "invalid mint" }
    }
  }