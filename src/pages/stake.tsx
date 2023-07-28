import type { NextPage } from "next"
import Head from "next/head"
import { StakingView } from "../views"

const Stake: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Stake NFTS</title>
        <meta name="Stake NFTs" content="Stake" />
      </Head>
      <StakingView />
    </div>
  )
}

export default Stake
