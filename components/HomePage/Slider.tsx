"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import useIsMobile from "@/hooks/useIsMobile";

export default function Slider() {
  const { t, locale } = useTranslation();
  const isMobile = useIsMobile();

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
  });

  // Autoplay
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (slider) {
      timer = setInterval(() => {
        slider.current?.next();
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [slider]);

  const slides =
    locale === "en"
      ? [
          { img: "/images/slider1_en.jpg", alt: "Cattle Group" },
          { img: "/images/slider2_en.jpg", alt: "Small Ruminant Group" },
          { img: "/images/slider3_en.jpg", alt: "Poultry Group" },
        ]
      : [
          { img: "/images/slider1.jpg", alt: "Büyükbaş Hayvan Grubu" },
          { img: "/images/slider2.jpg", alt: "Küçükbaş Hayvan Grubu" },
          { img: "/images/slider3.jpg", alt: "Kanatlı Hayvan Grubu" },
        ];

  return (
    <div
      className="relative"
      style={{
        height: isMobile ? "calc(40vh - 40px)" : "calc(100vh - 80px)",
      }}
    >
      <div ref={sliderRef} className="keen-slider h-full">
        {slides.map((slide, i) => (
          <div key={i} className="keen-slider__slide relative">
            <Image
              src={slide.img}
              alt={slide.alt}
              fill
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}

        {/* Buton ve ikon kısmı */}
        <div
          className={`absolute w-full flex flex-col items-center justify-center p-4 transition-all duration-300
            ${isMobile ? "bottom-2" : "bottom-5"}`}
        >
          <Link
            href="/urunlerimiz"
            className={`bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition
              ${isMobile ? "px-3 py-1.5 text-xs" : "px-6 py-3 text-base"}`}
          >
            {t("navbar.explore-products")}
          </Link>
          <div
            className={`animate-bounce transition-all duration-300 ${
              isMobile ? "mt-3" : "mt-8"
            }`}
          >
            <Icon
              icon="pajamas:scroll-down"
              className={`text-white ${isMobile ? "text-2xl" : "text-5xl"}`}
            />
          </div>
        </div>

        {/* Sol Ok */}
        <button
          onClick={() => slider.current?.prev()}
          className={`absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full hover:bg-black/70 transition ${
            isMobile ? "p-2" : "p-3"
          }`}
        >
          <Icon
            icon="icon-park-outline:left"
            className={isMobile ? "text-xl" : "text-2xl"}
          />
        </button>

        {/* Sağ Ok */}
        <button
          onClick={() => slider.current?.next()}
          className={`absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full hover:bg-black/70 transition ${
            isMobile ? "p-2" : "p-3"
          }`}
        >
          <Icon
            icon="icon-park-outline:right"
            className={isMobile ? "text-xl" : "text-2xl"}
          />
        </button>
      </div>
    </div>
  );
}
