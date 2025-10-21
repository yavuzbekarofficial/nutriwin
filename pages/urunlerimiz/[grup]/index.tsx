// pages/urunlerimiz/[grup]/index.tsx
import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import ProductSidebar from "@/components/ProductPage/ProductSidebar";
import ProductList from "@/components/ProductPage/ProductList";
import { urunler } from "@/data/productLists";
import useIsMobile from "@/hooks/useIsMobile";

const GrupSayfasi: React.FC = () => {
  const router = useRouter();
  const { grup } = router.query;
  const grupAdi =
    (grup as string)?.charAt(0).toUpperCase() + (grup as string)?.slice(1);

  // Gelen grup adına göre ürünleri filtrele
  const grupUrunleri = urunler.filter((urun) => urun.group === grup);

  const isMobile = useIsMobile();

  return (
    <>
      {/* SEO */}
      <Head>
        <title>{grupAdi} Ürünleri | İlaç Firması</title>
        <meta
          name="description"
          content={`${grupAdi} grubuna ait ürünleri keşfedin ve detaylı bilgi alın.`}
        />
        <meta
          name="keywords"
          content={`${grupAdi}, ürünler, ilaç, sağlık, ürün listesi`}
        />
        <meta
          property="og:title"
          content={`${grupAdi} Ürünleri | İlaç Firması`}
        />
        <meta
          property="og:description"
          content={`${grupAdi} grubuna ait ürünleri keşfedin ve detaylı bilgi alın.`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://www.siteadi.com/urunlerimiz/${grup}`}
        />
        <meta
          property="og:image"
          content="https://www.siteadi.com/images/urunler-banner.jpg"
        />
        <link
          rel="canonical"
          href={`https://www.siteadi.com/urunlerimiz/${grup}`}
        />
      </Head>

      <Navbar />

      {/* Banner */}
      <div className="mt-[80px]">
        <PageBanner title="Ürünlerimiz" />
      </div>

      {/* İçerik */}
      <div className="max-w-6xl mx-auto px-4 sm:px-12 py-10 flex flex-col gap-10">
        {/* Geri Dön Butonu */}
        <div className="mb-6">
          <Link
            href="/urunlerimiz"
            className="inline-flex items-center text-gray-700 hover:text-red-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Tüm Ürünler
          </Link>
        </div>

        {isMobile ? (
          // Mobil Görünüm
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {grupAdi} Grubu Ürünleri
            </h1>
            <ProductSidebar />
            <ProductList urunler={grupUrunleri} grup={grup as string} />
          </div>
        ) : (
          // Masaüstü Görünüm
          <div className="flex flex-1 gap-8">
            <div className="w-80">
              <ProductSidebar />
            </div>
            <div className="flex-1 px-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                {grupAdi} Grubu Ürünleri
              </h1>
              <ProductList urunler={grupUrunleri} grup={grup as string} />
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default GrupSayfasi;
