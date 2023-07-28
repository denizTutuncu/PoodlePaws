import type { NextPage } from "next";
import Head from "next/head";
import { MintView } from "../views";

const Mint: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Mint</title>
        <meta
          name="description"
          content="Mint"
        />
      </Head>
      <MintView />
    </div>
  );
};

export default Mint;
