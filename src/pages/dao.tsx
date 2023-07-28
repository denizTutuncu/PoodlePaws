import type { NextPage } from "next"
import Head from "next/head"
import { DAOView } from "../views"

const DAO: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>DAO</title>
        <meta name="DAO" content="DAO" />
      </Head>
      <DAOView />
    </div>
  )
}

export default DAO