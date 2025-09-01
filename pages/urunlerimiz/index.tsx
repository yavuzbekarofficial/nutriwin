// pages/urunlerimiz/index.tsx

import ProductSidebar from "../../components/ProductPage/ProductSidebar";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductPage/ProductList";
import { urunler } from "@/data/productLists";

const UrunlerAnaSayfa: React.FC = () => {
  // Tüm ürünleri tek bir dizide toplar.
  // Bu şekilde urunler nesnesindeki tüm gruplar birleştirilir.
  const tumUrunler = Object.values(urunler).flat();

  return (
    <div>
      <Navbar />

      {/* Sayfa başlığı */}
      <div className="mt-[80px]">
        <PageBanner title="Ürünlerimiz"></PageBanner>
      </div>

      {/* Ana içerik alanı */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/*
            ProductSidebar bileşenine md:w-80 sınıfı eklendi.
            Bu, masaüstü görünümde sidebar'ın genişliğini sabitler ve görünümün bozulmasını engeller.
          */}
          <div className="w-full md:w-80">
            <ProductSidebar />
          </div>

          {/* Ürün listesi */}
          <div className="flex-1 p-0 md:p-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Tüm Ürünlerimiz
            </h1>
            <ProductList urunler={tumUrunler} grup="tum-urunler" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UrunlerAnaSayfa;
