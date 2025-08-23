import React from "react";
import Link from "next/link";
import Image from "next/image"; // Next.js Image bileşeni için
import { Icon } from "@iconify/react/dist/iconify.js";

const navLinks = [
  {
    name: "ANASAYFA",
    href: "/",
  },
  {
    name: "HAKKIMIZDA",
    href: "/hakkimizda",
  },
  {
    name: "ÜRÜNLERİMİZ",
    href: "/urunlerimiz",
  },
  {
    name: "BLOG",
    href: "/blog",
  },
  {
    name: "İLETİŞİM",
    href: "/iletisim",
  },
];

function Footer() {
  return (
    <div className="bg-gray-800 text-white p-10 px-20">
      <div className="flex flex-col md:flex-row justify-between h-auto md:h-[250px]">
        {/* Adres Bölümü */}
        <div className="mb-8 md:mb-0 max-w-xs">
          {/* Logoya tıklayınca anasayfaya yönlendirme */}
          <Link href="/">
            <Image
              width={200}
              height={60} // Görüntü kalitesi için height değeri eklendi
              src="/images/logo_beyaz.png"
              alt="Nutriwin Logo"
              className="mb-4"
            />
          </Link>

          <div className="mb-2">
            <span className="font-bold">Adres:</span> Çevik Yapı - Halil İbrahim
            Çevik Boya Kimya İnşaat San. Ltd. Şti., Fevziçakmak, 10514. Sk.
            No:45, 42050 Karatay/Konya
          </div>
          <div className="mb-2">
            <span className="font-bold">Telefon:</span>{" "}
            <a
              href="https://wa.me/908503040946"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors duration-200"
            >
              0850 304 09 46
            </a>
          </div>
          <div>
            <span className="font-bold">E-mail:</span>{" "}
            <a
              href="mailto:info@nutriwin.com.tr"
              className="hover:text-red-500 transition-colors duration-200"
            >
              info@nutriwin.com.tr
            </a>
          </div>
        </div>

        {/* Menü Bölümü */}
        <div className="mb-8 md:mb-0">
          <div className="uppercase font-semibold mb-2 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/3 after:h-0.5 after:bg-red-500">
            Menü
          </div>
          {navLinks.map((navLink) => (
            <div key={navLink.name} className="mb-1">
              <Link
                href={navLink.href}
                className="hover:text-red-500 transition-colors duration-200"
              >
                {navLink.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Neden Biz ve Sosyal Medya Bölümü */}
        <div>
          {/* Neden Biz */}
          <div className="mb-8">
            <div className="uppercase font-semibold mb-2 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/3 after:h-0.5 after:bg-red-500">
              Neden biz?
            </div>
            <div className="max-w-xs text-sm">
              Yenilikçi ve güvenilir çözümlerimizle hayvan sağlığını
              önceliklendiriyor, sektördeki tecrübemizle fark yaratıyoruz.
            </div>
          </div>

          {/* Bizi Takip Edin */}
          <div>
            <div className="uppercase font-semibold mb-2 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/3 after:h-0.5 after:bg-red-500">
              Bizi takip edin
            </div>
            <div className="flex space-x-4">
              {/* Instagram linki */}
              <Link
                href="https://www.instagram.com/nutriwin.tr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  icon="mdi:instagram"
                  className="text-2xl cursor-pointer hover:text-red-500 transition-colors duration-200"
                />
              </Link>
              {/* Facebook linki */}
              <Link
                href="https://www.facebook.com/nutriwin.tr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  icon="mdi:facebook"
                  className="text-2xl cursor-pointer hover:text-red-500 transition-colors duration-200"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
