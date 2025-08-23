// pages/urunlerimiz/index.tsx

import Head from "next/head";
import ProductSidebar from "../../components/ProductPage/ProductSidebar";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductPage/ProductList";
import { urunler } from "@/data/productLists";

const UrunlerAnaSayfa: React.FC = () => {
  // Tüm gruplardaki ürünleri tek bir diziye birleştiriyoruz
  const tumUrunler = Object.values(urunler).flat();

  return (
    <div>
      <Navbar />

      {/* Slider tam genişlikte kalacak */}
      <div className="mt-[80px]">
        <PageBanner title="Ürünlerimiz"></PageBanner>
      </div>

      {/* Ortalanmış içerikler */}
      <div className="max-w-6xl mx-auto px-12 py-10 flex flex-col gap-10">
        <div className="flex flex-1">
          <ProductSidebar />
          <div className="flex-1 p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Tüm Ürünlerimiz
            </h1>
            {/* Tüm ürünleri listelemek için ProductList bileşenini kullanıyoruz */}
            <ProductList urunler={tumUrunler} grup="tum-urunler" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UrunlerAnaSayfa;
