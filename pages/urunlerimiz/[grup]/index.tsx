// pages/urunlerimiz/[grup]/index.tsx

import Head from "next/head";
import { useRouter } from "next/router";
import ProductSidebar from "../../../components/ProductPage/ProductSidebar";
import ProductList from "../../../components/ProductPage/ProductList";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import { urunler } from "@/data/productLists";
import Link from "next/link";
import useIsMobile from "@/hooks/useIsMobile"; // Hook'u import et

const GrupSayfasi: React.FC = () => {
  const router = useRouter();
  const { grup } = router.query;
  const grupAdi =
    (grup as string)?.charAt(0).toUpperCase() + (grup as string)?.slice(1);

  // urunler dizisini gelen grup değerine göre filtreliyoruz
  const grupUrunleri = urunler.filter((urun) => urun.group === grup);

  // useIsMobile hook'unu kullan
  const isMobile = useIsMobile();

  return (
    <div>
      <Head>
        <title>{grupAdi} Ürünleri | İlaç Firması</title>
      </Head>

      <Navbar />

      {/* Slider tam genişlikte kalacak */}
      <div className="mt-[80px]">
        <PageBanner title="Ürünlerimiz"></PageBanner>
      </div>

      {/* Ortalanmış içerikler */}
      <div className="max-w-6xl mx-auto px-4 sm:px-12 py-10 flex flex-col gap-10">
        {/* Geri Dön butonu */}
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
          <div className="flex flex-1">
            <ProductSidebar />
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
    </div>
  );
};

export default GrupSayfasi;
