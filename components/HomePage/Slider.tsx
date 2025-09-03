"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

export default function Slider() {
  const { t, locale } = useTranslation();

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
  });

  // Autoplay için zamanlayıcı
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (slider) {
      timer = setInterval(() => {
        slider.current?.next();
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [slider]);

  // locale değişkenine göre farklı resim yolları atıyoruz
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
    <div className="relative" style={{ height: "calc(100vh - 80px)" }}>
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
            {/* Siyah gölgelendirme */}
          </div>
        ))}

        {/* Butonlar ve Oklar */}
        <div className="absolute bottom-5 w-full flex flex-col items-center justify-center p-4">
          <Link
            href="/urunlerimiz"
            className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            {t("homepage.explore_products")}
          </Link>
          <div className="mt-8 animate-bounce">
            <Icon
              icon="pajamas:scroll-down"
              className="text-white text-5xl"
            ></Icon>
          </div>
        </div>

        {/* Sol Ok */}
        <button
          onClick={() => slider.current?.prev()}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
        >
          <Icon icon="icon-park-outline:left"></Icon>
        </button>

        {/* Sağ Ok */}
        <button
          onClick={() => slider.current?.next()}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
        >
          <Icon icon="icon-park-outline:right"></Icon>
        </button>
      </div>
    </div>
  );
}
