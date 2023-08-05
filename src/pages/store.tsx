import type { NextPage } from "next";
import Head from "next/head";
import { StoreView } from "../views";

const Store: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Poodle Paws DAO Store</title>
        <meta
          name="description"
          content="Poodle Paws DAO Store"
        />
      </Head>
      <StoreView />
    </div>
  );
};

export default Store;