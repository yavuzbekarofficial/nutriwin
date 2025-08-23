import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import { Icon } from "@iconify/react/dist/iconify.js";
import Maps from "@/components/Maps";
import SahaEkibi from "@/components/SahaEkibi";

const Iletisim: React.FC = () => {
  // Footer'daki bilgilerle güncellendi
  const sirketBilgileri = {
    ad: "Nutriwin İlaç Kimya",
    adres:
      "Çevik Yapı - Halil İbrahim Çevik Boya Kimya İnşaat San. Ltd. Şti., Fevziçakmak, 10514. Sk. No:45, 42050 Karatay/Konya",
    telefon: "08503040946",
    email: "info@nutriwin.com.tr",
    logo: "/images/logo.png",
  };

  return (
    <div>
      <Head>
        <title>İletişim | Nutriwin İlaç Kimya</title>
      </Head>

      <Navbar />

      <div className="mt-[80px]">
        <PageBanner title="İletişim"></PageBanner>
      </div>

      <div className="max-w-6xl mx-auto px-12 py-10 flex flex-col gap-10">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-6">
          Bize Ulaşın
        </h1>

        {/* İletişim Bilgileri */}
        <div className="w-full p-6 bg-gray-100 rounded-xl shadow-md flex flex-col items-center text-center">
          <div className="mb-6">
            {/* Logo */}
            <Image
              src={sirketBilgileri.logo}
              alt={sirketBilgileri.ad}
              width={150}
              height={150}
            />
          </div>

          <div className="w-full space-y-4 text-gray-700">
            <div className="flex items-center justify-center gap-3">
              <Icon icon="ic:round-email" className="text-2xl text-red-600" />
              <a
                href={`mailto:${sirketBilgileri.email}`}
                className="hover:underline"
              >
                {sirketBilgileri.email}
              </a>
            </div>

            <div className="flex items-center justify-center gap-3">
              <Icon icon="ic:round-phone" className="text-2xl text-red-600" />
              <div className="flex flex-col items-end">
                <a
                  href={`https://wa.me/90${sirketBilgileri.telefon.replace(
                    /\s/g,
                    ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {sirketBilgileri.telefon}
                </a>
                <span className="  font-bold text-gray-500">win</span>
              </div>
            </div>

            <div className="flex items-start justify-center gap-3 text-left">
              <Icon
                icon="ic:round-location-on"
                className="text-2xl text-red-600 flex-shrink-0 mt-1"
              />
              <p>{sirketBilgileri.adres}</p>
            </div>
          </div>
        </div>
        {/* <SahaEkibi></SahaEkibi> */}
        {/* Google Haritalar Eklentisi */}
        <Maps></Maps>
      </div>

      <Footer />
    </div>
  );
};

export default Iletisim;
