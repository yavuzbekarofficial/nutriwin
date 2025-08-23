import React from "react";
import Navbar from "../Navbar";
import Slider from "./Slider";
import AboutSectioon from "./AboutSectioon";
import ProductSection from "./ProductSection";
import BlogSection from "./BlogSection";
import Footer from "../Footer";
import NumbersSection from "../NumbersSection";
import Maps from "../Maps";
import SahaEkibi from "../SahaEkibi";

function HomePage() {
  return (
    <div>
      <Navbar />

      {/* Slider tam genişlikte kalacak */}
      <div className="mt-[80px]">
        <Slider />
      </div>

      {/* Ortalanmış içerikler */}
      <div className="max-w-6xl mx-auto px-12 py-10 flex flex-col gap-10">
        <AboutSectioon />
        <ProductSection />
        <BlogSection />
        {/* <SahaEkibi /> */}
        <NumbersSection />
        <Maps />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
