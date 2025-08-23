"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function NumbersSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animasyonu sadece bir kez çalıştır
    threshold: 0.1, // Bölümün %10'u görünür olduğunda tetikle
  });

  return (
    <div ref={ref} className="mt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="relative inline-block mb-12">
          <h3 className="text-4xl font-bold text-red-600">
            Sayılarla Nutriwin
          </h3>
          {/* Başlığın altına eklenen kırmızı çizgi */}
          <div className="border-b-2 border-red-600 w-24 mt-2"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Sayı Kartı 1: Yıllık Tecrübe */}
          <div className="flex flex-col items-center p-4">
            <div className="text-red-600 text-5xl mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                <path d="M12 12v4" />
                <path d="M12 7.5v.5" />
              </svg>
            </div>
            <div className="text-6xl font-extrabold text-gray-800 mb-1">
              {inView && <CountUp start={0} end={5} duration={2.5} />}+
            </div>
            <div className="text-lg text-gray-600 font-semibold">
              Yıllık Tecrübe
            </div>
          </div>
          {/* Sayı Kartı 2: Mutlu Hayvan Dostu */}
          <div className="flex flex-col items-center p-4">
            <div className="text-red-600 text-5xl mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.5 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                <path d="M6 15c-3 0-5.5 1.5-5.5 4v1.5a2.5 2.5 0 0 0 2.5 2.5h16c1.4 0 2.5-1.12 2.5-2.5V19c0-2.5-2.5-4-5.5-4h-8" />
              </svg>
            </div>
            <div className="text-6xl font-extrabold text-gray-800 mb-1">
              {inView && <CountUp start={0} end={150} duration={2.5} />}+
            </div>
            <div className="text-lg text-gray-600 font-semibold">
              Mutlu Hayvan Dostu
            </div>
          </div>
          {/* Sayı Kartı 3: Yenilikçi Ürün */}
          <div className="flex flex-col items-center p-4">
            <div className="text-red-600 text-5xl mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5.5" />
                <path d="M11 16H8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4" />
                <path d="M19.5 14.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z" />
                <path d="M21 17l-1 1-1-1" />
              </svg>
            </div>
            <div className="text-6xl font-extrabold text-gray-800 mb-1">
              {inView && <CountUp start={0} end={20} duration={2.5} />}+
            </div>
            <div className="text-lg text-gray-600 font-semibold">
              Yenilikçi Ürün
            </div>
          </div>
          {/* Sayı Kartı 4: Ülke */}
          <div className="flex flex-col items-center p-4">
            <div className="text-red-600 text-5xl mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                <path d="M12 2v20" />
                <path d="M2 12h20" />
                <path d="M12 20a8 8 0 0 0 8-8" />
                <path d="M12 4a8 8 0 0 1 8 8" />
                <path d="M12 4a8 8 0 0 0-8 8" />
                <path d="M12 20a8 8 0 0 1-8-8" />
              </svg>
            </div>
            <div className="text-6xl font-extrabold text-gray-800 mb-1">
              {inView && <CountUp start={0} end={10} duration={2.5} />}+
            </div>
            <div className="text-lg text-gray-600 font-semibold">Ülke</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NumbersSection;
