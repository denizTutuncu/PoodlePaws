import type { NextPage } from "next"
import Head from "next/head"
import { StoreView } from "../views"

const Store: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Store</title>
        <meta name="DAO Store" content="Store" />
      </Head>
      <StoreView />
    </div>
  )
}

export default Store