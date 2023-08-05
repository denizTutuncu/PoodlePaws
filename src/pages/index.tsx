import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Poodle Paws</title>
        <meta
          name="description"
          content="Poodle Paws"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
