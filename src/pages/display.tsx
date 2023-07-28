import type { NextPage } from "next"
import Head from "next/head"
import { DisplayView } from "../views"

const Display: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Display NFT</title>
        <meta name="My NFTs" content="Display" />
      </Head>
      <DisplayView />
    </div>
  )
}

export default Display
