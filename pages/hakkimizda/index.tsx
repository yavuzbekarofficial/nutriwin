import About from "@/components/AboutPage/About";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import { useTranslation } from "@/hooks/useTranslation";
import React from "react";

function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />

      {/* Slider tam genişlikte kalacak */}
      <div className="mt-[80px]">
        <PageBanner title={t("about.about")}></PageBanner>
      </div>

      {/* Ortalanmış içerikler */}
      <div className="max-w-6xl mx-auto px-12 py-10 flex flex-col gap-10">
        <About></About>
      </div>
      <Footer />
    </div>
  );
}

export default index;
