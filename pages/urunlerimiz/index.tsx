// pages/urunlerimiz/index.tsx

import React from "react";
import Head from "next/head";
import ProductSidebar from "../../components/ProductPage/ProductSidebar";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductPage/ProductList";
import { urunler } from "@/data/productLists";
import { useTranslation } from "@/hooks/useTranslation";

const UrunlerAnaSayfa: React.FC = () => {
  const tumUrunler = Object.values(urunler).flat();
  const { t } = useTranslation();

  return (
    <>
      {/* SEO Başlık ve Meta */}
      <Head>
        <title>{t("products.our-product")} | Nutriwin İlaç Kimya</title>
        <meta
          name="description"
          content="Nutriwin İlaç Kimya ürünlerini keşfedin. Homeopatik, Besleme, Bakım ve Bolus ürünleri hakkında detaylı bilgiler burada."
        />
        <meta
          name="keywords"
          content="Nutriwin, ürünler, homeopatik ürünler, besleme ürünleri, bakım ürünleri, boluslar"
        />
        <meta
          property="og:title"
          content={`${t("products.our-product")} | Nutriwin İlaç Kimya`}
        />
        <meta
          property="og:description"
          content="Nutriwin İlaç Kimya ürünlerini keşfedin. Homeopatik, Besleme, Bakım ve Bolus ürünleri hakkında detaylı bilgiler burada."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.nutriwin.com.tr/urunlerimiz"
        />
        <meta
          property="og:image"
          content="https://www.nutriwin.com.tr/images/urunler-banner.jpg"
        />
        <link rel="canonical" href="https://www.nutriwin.com.tr/urunlerimiz" />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Sayfa başlığı */}
      <div className="mt-[80px]">
        <PageBanner title={t("products.our-product")} />
      </div>

      {/* Ana içerik */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-80">
            <ProductSidebar />
          </div>

          {/* Ürün listesi */}
          <div className="flex-1 p-0 md:p-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {t("products.all-product")}
            </h1>
            <ProductList urunler={tumUrunler} grup="tum-urunler" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default UrunlerAnaSayfa;
