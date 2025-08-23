import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

// Bu veri dizisini istediğiniz kadar kişi ekleyerek genişletebilirsiniz.
const sahaEkibiUyeleri = [
  {
    ad: "Ahmet Yılmaz",
    unvan: "Bölge Sorumlusu",
    telefon: "05321234567",
    bolge: "İç Anadolu Bölgesi",
    resim: "/images/about.jpg", // Geçici resim
  },
  {
    ad: "Ayşe Demir",
    unvan: "Bölge Sorumlusu",
    telefon: "05327654321",
    bolge: "Marmara Bölgesi",
    resim: "/images/about.jpg", // Geçici resim
  },
  {
    ad: "Mehmet Kaya",
    unvan: "Bölge Sorumlusu",
    telefon: "05329876543",
    bolge: "Ege Bölgesi",
    resim: "/images/about.jpg", // Geçici resim
  },
];

const SahaEkibi: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16 rounded-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık Bölümü */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            Saha Ekibimiz
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Hizmet verdiğimiz bölgelerde size en iyi şekilde yardımcı olacak
            uzmanlarımız.
          </p>
        </div>

        {/* Ekip Üyeleri Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sahaEkibiUyeleri.map((uye, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105"
            >
              {/* Yuvarlak Resim */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-red-500">
                <Image
                  src={uye.resim}
                  alt={uye.ad}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* İsim ve Ünvan */}
              <h3 className="text-xl font-semibold text-gray-900">{uye.ad}</h3>
              <p className="text-md text-gray-600 mb-4">{uye.unvan}</p>

              {/* Telefon Numarası */}
              <div className="flex items-center gap-2 text-lg text-red-600 font-bold mb-2">
                <Icon icon="ic:round-phone" className="text-2xl" />
                <a href={`tel:${uye.telefon}`} className="hover:underline">
                  {uye.telefon}
                </a>
              </div>

              {/* Bölge */}
              <div className="flex items-center gap-2 text-gray-700">
                <Icon
                  icon="ic:round-location-on"
                  className="text-2xl text-gray-500"
                />
                <p>{uye.bolge}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SahaEkibi;
