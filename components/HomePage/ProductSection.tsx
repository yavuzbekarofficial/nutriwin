import React from "react";
import Link from "next/link";
import { productGroupLists } from "@/data/productGroupLists";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

function ProductSection() {
  const { t, locale } = useTranslation();

  // Eğer locale değeri yoksa veya geçersizse 'tr' varsayılanını kullan
  const currentLocale = locale === "en" ? "en" : "tr";

  return (
    <div>
      <div className="flex flex-col items-center mb-8">
        <div>
          <h2 className="font-bold text-4xl text-red-500 text-center">
            {t("products.product-group")}
          </h2>
          {/* Kırmızı çizgi */}
          <div className="border-b-2 border-red-500 w-24 mt-2"></div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {productGroupLists.map((productGroupList) => (
          <Fade key={productGroupList.slug} triggerOnce>
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-md group cursor-pointer">
              <Image
                src={productGroupList.image}
                // Alt metni dinamik olarak alıyoruz
                alt={productGroupList.title[currentLocale]}
                fill
                className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-black/50 transition-all duration-300">
                <div className="text-white font-bold text-2xl mb-4 text-center">
                  {/* Başlık metnini dinamik olarak alıyoruz */}
                  {productGroupList.title[currentLocale]}
                </div>
                <Link
                  href={`/urunlerimiz/${productGroupList.slug}`}
                  legacyBehavior
                >
                  <a className="bg-red-600 text-white font-semibold text-center px-6 py-2 rounded-full transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {t("products.see-product")}
                  </a>
                </Link>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}

export default ProductSection;
