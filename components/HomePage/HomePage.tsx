import React from "react";
import Head from "next/head";
import Navbar from "../Navbar";
import Slider from "./Slider";
import AboutSectioon from "./AboutSectioon";
import ProductSection from "./ProductSection";
import BlogSection from "./BlogSection";
import Footer from "../Footer";
import NumbersSection from "../NumbersSection";
import Maps from "../Maps";

function HomePage() {
  return (
    <div>
      {/* SEO Başlık, Meta, Open Graph, JSON-LD */}
      <Head>
        {/* Title ve Meta Description */}
        <title>Nutriwin — Hayvansal İlaç Üretimi ve Çözümleri</title>
        <meta
          name="description"
          content="Nutiriwn, büyükbaş, küçükbaş ve kanatlı hayvanlar için veteriner ilaçları üretir. Firma homeopati kültürünü benimser ve Türkiye’de daha önce olmayan yenilikçi çözümleri sunar."
        />
        <link rel="canonical" href="https://example.com/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Nutriwin - Hayvansal İlaç Üretimi ve Çözümleri"
        />
        <meta
          property="og:description"
          content="Nutriwin, büyükbaş, küçükbaş ve kanatlı hayvanlar için veteriner ilaçları üretir ve Türkiye’de daha önce olmayan yenilikçi çözümleri sunar."
        />
        <meta
          property="og:image"
          content="https://www.nutriwin.com.tr/images/about.jpg"
        />
        <meta property="og:url" content="https://www.nutriwin.com.tr/" />
        <meta property="og:type" content="website" />

        {/* JSON-LD Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nutriwin Kimya",
              url: "https://www.nutriwin.com.tr",
              logo: "https://www.nutriwin.com.tr/images/logo.png",
              sameAs: ["https://www.instagram.com/nutriwin.tr/"],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+90 850 304 0946",
                  contactType: "customer service",
                  email: "info@nutriwin.com.tr",
                  areaServed: "TR",
                  availableLanguage: ["Turkish"],
                },
              ],
            }),
          }}
        />
      </Head>

      {/* Sayfa İçeriği */}
      <Navbar />

      {/* Slider tam genişlikte */}
      <div className="mt-[80px] relative">
        <Slider />
        <h1 className="sr-only">
          Hayvansal İlaç Üretimi, Veteriner Ürünler ve Yenilikçi Çözümler |
          Nutriwin
        </h1>
      </div>

      {/* Ortalanmış içerikler */}
      <div className="max-w-6xl mx-auto px-12 py-10 flex flex-col gap-10">
        <AboutSectioon />
        <ProductSection />
        <BlogSection />
        {/* <NumbersSection /> */}
        <Maps />
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
