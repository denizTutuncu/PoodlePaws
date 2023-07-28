import type { NextPage } from "next"
import Head from "next/head"
import { DEXView } from "../views"

const DEX: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>DEX</title>
        <meta name="The Lira DAO's DEX" content="DEX" />
      </Head>
      <DEXView />
    </div>
  )
}

export default DEX
