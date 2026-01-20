// pages/urunlerimiz/[grup]/[urun_slug].tsx

import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import { urunler } from "@/data/productLists"; // Türkçe
import { products } from "@/data/productLists_en"; // İngilizce
import { products_ar } from "@/data/productLists_ar"; // Arapça
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useTranslation } from "@/hooks/useTranslation";

// Ürün tipini belirleyelim (Hata almamak için verilerinizin yapısına uygun olmalı)
interface Product {
  slug: string;
  name: string;
  group: string;
  image: string;
  description?: string;
  content?: string;
  kullanimAmaci?: string | string[];
  etkiAlani?: string[];
  ambalaj?: string | string[];
}

const UrunDetay: React.FC = () => {
  const router = useRouter();
  const { urun_slug } = router.query;
  const { t, locale } = useTranslation();

  // TypeScript için tip belirleyerek verileri seçiyoruz
  const getProductsByLocale = (): Product[] => {
    if (locale === "tr") return urunler as Product[];
    if (locale === "ar") return products_ar as Product[];
    return products as Product[];
  };

  const currentProducts = getProductsByLocale();
  const urun = currentProducts.find((u) => u.slug === urun_slug);

  if (!urun) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold">
          {t("product_not_found") || "Ürün bulunamadı"}
        </p>
      </div>
    );
  }

  return (
    <div dir={locale === "ar" ? "rtl" : "ltr"}>
      <Head>
        <title>
          {urun.name} {t("products.product-details")} | Nutriwin Kimya
        </title>
        <meta
          name="description"
          content={urun.description || `${urun.name} ürününü keşfedin.`}
        />
        <link
          rel="canonical"
          href={`https://www.nutriwin.com.tr/urunlerimiz/${urun.group}/${urun.slug}`}
        />
      </Head>

      <Navbar />

      <div className="mt-[80px]">
        <PageBanner title={t("products.our-product")} />
      </div>

      <div className="max-w-6xl mx-auto px-12 py-10">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 mb-6 text-gray-600 hover:text-red-500 transition-colors duration-200"
        >
          <Icon
            icon="mingcute:left-line"
            className={`text-2xl ${locale === "ar" ? "rotate-180" : ""}`}
          />
          <span className="font-semibold">{t("products.go-back")}</span>
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Ürün Görseli */}
          <div className="w-full md:w-1/3 relative h-64 md:h-96">
            <Image
              src={urun.image}
              alt={urun.name}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Ürün Bilgileri */}
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {urun.name}
            </h1>
            <div className="border-b-2 border-red-500 w-24 mb-6"></div>

            <p className="text-lg text-gray-600 mb-4">
              <span className="font-semibold">{t("products.group")}:</span>{" "}
              <span className="uppercase">{urun.group}</span>
              <span> </span>
              {t("products.group")}
            </p>

            {urun.description && (
              <p className="text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
                {urun.description}
              </p>
            )}

            <div className="mt-8 space-y-4 text-gray-700">
              {/* Kullanım Amacı */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <span className="font-semibold text-gray-900">
                  {t("products.purpose-of-use")}:
                </span>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  {Array.isArray(urun.kullanimAmaci) ? (
                    urun.kullanimAmaci.map((madde, index) => (
                      <li key={index}>{madde}</li>
                    ))
                  ) : (
                    <li>{urun.kullanimAmaci}</li>
                  )}
                </ul>
              </div>

              {/* Etki Alanı */}
              {urun.etkiAlani && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <span className="font-semibold text-gray-900">
                    {t("products.area-of-influence")}:
                  </span>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    {urun.etkiAlani.map((madde, index) => (
                      <li key={index}>{madde}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Ambalaj */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <span className="font-semibold text-gray-900">
                  {t("products.packing")}:
                </span>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  {Array.isArray(urun.ambalaj) ? (
                    urun.ambalaj.map((madde, index) => (
                      <li key={index}>{madde}</li>
                    ))
                  ) : (
                    <li>{urun.ambalaj}</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UrunDetay;
