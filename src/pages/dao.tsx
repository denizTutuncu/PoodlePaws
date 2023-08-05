import type { NextPage } from "next";
import Head from "next/head";
import { DaoView } from "../views";

const Dao: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Poodle Paws DAO</title>
        <meta
          name="description"
          content="Poodle Paws DAO on Realms"
        />
      </Head>
      <DaoView />
    </div>
  );
};

export default Dao;