import MainLayout from "@/layout/MainLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Head>
        {/*
          FAVICON İYİLEŞTİRMELERİ
          Masaüstü/Genel Tarayıcılar (ICO ve 32x32 PNG)
        */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />

        {/*
          Mobil (Apple Touch Icon)
          Bu, iPhone ana ekranına eklenmek üzere kullanılır.
        */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        {/*
          Web Uygulama Manifestosu
          Android ve Chrome için gereklidir, Google'ın tanınmasını kolaylaştırır.
        */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Tarayıcının çevirisini engellemek için meta etiketi */}
        <meta name="google" content="notranslate" />
      </Head>
      <Component {...pageProps} />
    </MainLayout>
  );
}
