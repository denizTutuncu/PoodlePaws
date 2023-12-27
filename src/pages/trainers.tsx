import type { NextPage } from "next";
import Head from "next/head";
import { TrainersView } from "../views";

const Store: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Poodle Paws Trainers</title>
        <meta
          name="description"
          content="Poodle Paws Community Trainers"
        />
      </Head>
      <TrainersView />
    </div>
  );
};

export default Store;