import type { NextPage } from "next";
import Head from "next/head";
import { MintView } from "../views";

const Mint: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Poodle Paws World Tour Mint</title>
        <meta
          name="description"
          content="Poodle Paws World Tour NFT Collection Metaplex Mint"
        />
      </Head>
      <MintView />
    </div>
  );
};

export default Mint;