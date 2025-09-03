// pages/urunlerimiz/[grup]/[urun_slug].tsx

import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
// İki dilli veri dosyalarını da import ediyoruz
import { urunler } from "@/data/productLists"; // Türkçe veriler
import { products } from "@/data/productLists_en"; // İngilizce veriler
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useTranslation } from "@/hooks/useTranslation";

const UrunDetay: React.FC = () => {
  const router = useRouter();
  const { urun_slug } = router.query;
  const { t, locale } = useTranslation();

  // locale değişkenine göre doğru veri dosyasını seçiyoruz
  const currentProducts = locale === "tr" ? urunler : products;

  // Seçilen veri dosyasında ürünü buluyoruz
  const urun = currentProducts.find((u) => u.slug === urun_slug);

  if (!urun) {
    // Ürün bulunamadı mesajını çeviri fonksiyonu ile gösteriyoruz
    return <div>{t("product_not_found")}</div>;
  }

  return (
    <div>
      <Head>
        <title>
          {urun.name} {t("product_details_title")} | {t("company_name")}
        </title>
      </Head>

      <Navbar />

      <div className="mt-[80px]">
        <PageBanner title={t("products.our-product")}></PageBanner>
      </div>

      <div className="max-w-6xl mx-auto px-12 py-10">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 mb-6 text-gray-600 hover:text-red-500 transition-colors duration-200"
        >
          <Icon icon="mingcute:left-line" className="text-2xl" />
          <span className="font-semibold">{t("products.go-back")}</span>
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3 relative h-64 md:h-96">
            <Image
              src={urun.image}
              alt={urun.name}
              layout="fill"
              objectFit="contain"
            />
          </div>

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
              <p className="text-gray-700 leading-relaxed mb-4">
                {urun.description}
              </p>
            )}
            {urun.content && (
              <p className="text-gray-700 leading-relaxed">{urun.content}</p>
            )}

            <div className="mt-8 space-y-4 text-gray-700">
              <div className="bg-gray-50 p-4 rounded-lg">
                <span className="font-semibold text-gray-900">
                  {t("products.purpose-of-use")}:
                </span>{" "}
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

              {urun.etkiAlani && Array.isArray(urun.etkiAlani) && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <span className="font-semibold text-gray-900">
                    {t("products.area-of-influence")}:
                  </span>{" "}
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    {urun.etkiAlani.map((madde, index) => (
                      <li key={index}>{madde}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-gray-50 p-4 rounded-lg">
                <span className="font-semibold text-gray-900">
                  {t("products.packing")}:
                </span>{" "}
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
