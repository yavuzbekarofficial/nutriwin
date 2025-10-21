import About from "@/components/AboutPage/About";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import { useTranslation } from "@/hooks/useTranslation";
import React from "react";
import Head from "next/head";

function Index() {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>
          Hakkımızda | Nutriwin - Hayvansal İlaç Üretimi ve Çözümleri
        </title>
        <meta
          name="description"
          content="Nutriwin, büyükbaş, küçükbaş ve kanatlı hayvanlar için veteriner ilaçları üretir. Hakkımızda sayfasında firmamızın misyonu, vizyonu ve değerlerini keşfedin."
        />
        <link rel="canonical" href="https://www.nutriwin.com.tr/hakkimizda" />

        {/* Open Graph */}
        <meta property="og:title" content="Hakkımızda | Nutriwin" />
        <meta
          property="og:description"
          content="Nutriwin, büyükbaş, küçükbaş ve kanatlı hayvanlar için veteriner ilaçları üretir. Hakkımızda sayfasında firmamızın misyonu, vizyonu ve değerlerini keşfedin."
        />
        <meta
          property="og:image"
          content="https://www.nutriwin.com.tr/images/about.jpg"
        />
        <meta
          property="og:url"
          content="https://www.nutriwin.com.tr/hakkimizda"
        />
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
                },
              ],
            }),
          }}
        />
      </Head>

      <Navbar />

      {/* Slider tam genişlikte kalacak */}
      <div className="mt-[80px]">
        <PageBanner title={t("about.about")} />
      </div>

      {/* Ortalanmış içerikler */}
      <div className="max-w-6xl mx-auto px-12 py-10 flex flex-col gap-10">
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default Index;
