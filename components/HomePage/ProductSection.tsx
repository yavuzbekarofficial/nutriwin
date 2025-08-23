import React from "react";
import Link from "next/link";
import { productGroupLists } from "@/data/productGroupLists";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

function ProductSection() {
  return (
    <div>
      <div className="flex flex-col items-center mb-8">
        <div>
          <h2 className="font-bold text-4xl text-red-500 text-center">
            Ürün Gruplarımız
          </h2>
          {/* Kırmızı çizgi */}
          <div className="border-b-2 border-red-500 w-24 mt-2"></div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {productGroupLists.map((productGroupList) => (
          <Fade key={productGroupList.title} triggerOnce>
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-md group cursor-pointer">
              <Image
                src={productGroupList.image}
                alt={productGroupList.title}
                className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-black/50 transition-all duration-300">
                <div className="text-white font-bold text-2xl mb-4 text-center">
                  {productGroupList.title}
                </div>
                <Link
                  href={`/urunlerimiz/${productGroupList.slug}`}
                  legacyBehavior
                >
                  <a className="bg-red-600 text-white font-semibold text-center px-6 py-2 rounded-full transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    Ürünleri İncele
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
