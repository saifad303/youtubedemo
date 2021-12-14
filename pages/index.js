import axios from "axios";
import Head from "next/head";
import { useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({ results }) {
  console.log(results);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />

        <Nav />

        <Results results={results} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genres;

  // console.log("Genre = ", genre);

  // console.log("Link = ", `https://api.themoviedb.org/3${requests[genre]?.url}`);

  const res = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { results: data.results } };
}
