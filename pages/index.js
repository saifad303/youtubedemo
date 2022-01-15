import axios from "axios";
import Head from "next/head";
import { useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";
import Sidebar from "../components/Sidebar";
import MiniSidebar from "../components/MiniSidebar";

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

        <div className="flex items-start">
          <div className="w-[300px] h-screen bg-white xl:inline-block hidden">
            <Sidebar />
          </div>
          <div className="w-[100px] h-screen bg-white inline-block xl:hidden">
            <MiniSidebar />
          </div>
          <div className="w-full h-screen">
            <div className=" sticky">
              <Nav />
            </div>
            <div className="h-screen">
              <Results results={results} />
            </div>
          </div>
        </div>
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
