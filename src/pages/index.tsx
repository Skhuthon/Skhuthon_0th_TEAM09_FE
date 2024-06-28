import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>9팀</title>
        <meta name="description" content="9팀 과제" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>메인페이지</main>
    </>
  );
}
