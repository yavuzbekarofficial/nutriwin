"use client";
import useIsMobile from "@/hooks/useIsMobile";
import { useTranslation } from "@/hooks/useTranslation";
import React from "react";

const CatalogSection: React.FC = () => {
  const isMobile = useIsMobile();
  const { t, locale } = useTranslation();

  // Resim URL'si: Next.js 'public/images' klasöründe olduğunu varsayıyoruz.
  // Lütfen bu yolu projenize göre kontrol edin ve gerekirse düzeltin (örn: "/katalog.jpg" yapın).
  const imageUrl = "/images/katalog.jpg";

  return (
    <section
      className={`relative w-full ${
        isMobile ? "py-16 px-4" : "py-28 px-8"
      } mx-auto max-w-7xl overflow-hidden rounded-3xl shadow-2xl`} // Konteyner stili korundu
    >
      {/* 1. Arka Plan Resmi, Bulanıklık ve Koyu Overlay (Overlay şimdi %50 opaklıkta) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-gray-900" // Resim yüklenemezse yedek zemin
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* Kesinlikle Resmin Üstünde Koyu Katman (Overlay) */}
        <div className="absolute inset-0 bg-black opacity-10"></div>

        {/* İstenen Bulanıklık Efekti (backdrop-blur-lg ile uygulandı) */}
        <div className="absolute inset-0 backdrop-filter backdrop-blur-lg bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* 2. İçerik Alanı: Metin Rengi Beyaz (Kontrast için) */}
      <div className="relative z-10 flex flex-col items-center text-center text-white">
        {/* Vurgu Çizgisi: Koyu zemin üzerinde dikkat çekmesi için Beyaz */}
        <div
          className={`h-1 w-16 bg-white rounded-full mb-3 ${
            isMobile ? "mb-4" : "mb-5"
          }`}
        />

        {/* Başlık: Beyaz renk ve shadow korundu */}
        <h2
          className={`font-extrabold tracking-tight drop-shadow-lg ${
            isMobile ? "text-3xl mb-3" : "text-5xl mb-5"
          } text-white`}
        >
          {t("catalog.catalog-title")}
        </h2>

        {/* Alt Başlık/Açıklama: Açık gri tonu korundu */}
        <p
          className={`text-gray-200 font-medium drop-shadow-md ${
            isMobile ? "text-base mb-8" : "text-xl mb-12 max-w-2xl"
          }`}
        >
          {t("catalog.catalog-description")}
        </p>

        {/* Buton: Koyu zemin üzerinde en iyi kontrastı veren Beyaz Buton korundu */}
        <a
          href="/katalog.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`font-bold rounded-lg transition-all duration-300 shadow-2xl transform hover:scale-[1.03] active:scale-[0.98]
          ${
            isMobile
              ? "bg-white text-red-600 px-8 py-3 text-lg hover:bg-gray-100"
              : "bg-white text-red-600 px-12 py-5 text-xl hover:bg-gray-100"
          }`}
        >
          {t("catalog.catalog-button-text")}
        </a>
      </div>
    </section>
  );
};

export default CatalogSection;
