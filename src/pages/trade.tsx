import type { NextPage } from "next";
import Head from "next/head";
import { TradeView } from "../views";

const Store: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Poodle Paws Asset Trade</title>
        <meta
          name="description"
          content="Poodle Paws Assets Trade"
        />
      </Head>
      <TradeView />
    </div>
  );
};

export default Store;