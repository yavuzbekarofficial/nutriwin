import MainLayout from "@/layout/MainLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* Eğer PNG kullanacaksan */}
        {/* <link rel="icon" type="image/png" href="/favicon.png" /> */}
      </Head>
      <Component {...pageProps} />
    </MainLayout>
  );
}
