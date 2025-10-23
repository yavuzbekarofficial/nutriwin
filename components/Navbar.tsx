// components/Navbar.tsx

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/router";
import useIsMobile from "@/hooks/useIsMobile";
import { useTranslation } from "@/hooks/useTranslation";

function Navbar() {
  const router = useRouter();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // useTranslation hook'undan hem t'yi hem de yeni changeLanguage fonksiyonunu al
  const { t, locale, changeLanguage } = useTranslation();

  // Sabit Navbar yüksekliğini tanımlıyoruz (80px)
  const NAV_HEIGHT = "80px";

  const handleLanguageChange = () => {
    changeLanguage(locale === "tr" ? "en" : "tr");
  };

  const navLinks = [
    {
      name: t("navbar.home"),
      href: "/",
    },
    {
      name: t("navbar.about"),
      href: "/hakkimizda",
    },
    {
      name: t("navbar.products"),
      href: "/urunlerimiz",
    },
    {
      name: t("navbar.blog"),
      href: "/blog",
    },
    {
      name: t("navbar.contact"),
      href: "/iletisim",
    },
  ];

  const handleLinkClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    // Navbar sabit (fixed) ve en önde (z-50)
    <div className="fixed top-0 left-0 w-full z-50 shadow">
      {isMobile ? (
        // Mobil Navbar
        <div className="flex items-center justify-between px-4 py-3 bg-white h-[80px]">
          <div>
            <Link href="/" onClick={handleLinkClick}>
              <Image
                src="/images/logo.png"
                alt="Şirket Logosu"
                width={120}
                height={40}
              />
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="https://wa.me/908503040946"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#25D366] p-2 rounded-3xl gap-2 text-white text-sm"
            >
              <Icon icon="streamline-plump:phone" className="w-4 h-4"></Icon>
            </Link>
            {/* Dil değiştirme butonu - Mobil */}
            <button
              onClick={handleLanguageChange}
              className="p-1 rounded-full transition-opacity hover:opacity-80"
            >
              <Icon
                icon={locale === "tr" ? "flag:gb-4x3" : "flag:tr-4x3"}
                className="w-7 h-7"
              />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 p-2"
            >
              <Icon
                icon={isMenuOpen ? "codicon:chrome-close" : "ci:hamburger-lg"}
                className="w-8 h-8"
              />
            </button>
          </div>

          {/* DÜZELTME: Mobil Menü Konumlandırması ve Yüksekliği */}
          <div
            // top-[80px] ile navbar'ın hemen altından başlatıldı.
            // h-full yerine, tam ekran yüksekliğinden navbar yüksekliği çıkarılarak
            // menü yüksekliği hesaplandı (h-[calc(100dvh-80px)]).
            // 100dvh, mobil tarayıcıların kendi çubuklarından etkilenmemesi için daha iyidir.
            style={{ top: NAV_HEIGHT, height: `calc(100dvh - ${NAV_HEIGHT})` }}
            className={`fixed left-0 w-full bg-white transition-transform duration-300 ease-in-out transform overflow-y-auto ${
              // overflow-y-auto eklendi
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } flex flex-col items-center pt-8 gap-6 z-40`} // z-index 40 yapıldı (navbar 50)
          >
            {navLinks.map((navLink) => (
              <Link
                key={navLink.name}
                href={navLink.href}
                onClick={handleLinkClick}
                locale={locale} // Next.js'in dil bilgisini koruması için Link bileşenine locale prop'u eklendi
                className={`text-2xl font-semibold transition-colors uppercase ${
                  router.pathname === navLink.href
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                {navLink.name}
              </Link>
            ))}
            <Link
              href="https://wa.me/908503040946"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mt-4 bg-[#25D366] p-3 px-6 rounded-full gap-3 text-white font-medium hover:opacity-80 transition-opacity"
            >
              <Icon icon="streamline-plump:phone"></Icon>
              <span className="uppercase">{t("navbar.contact-now")}</span>
            </Link>
          </div>
        </div>
      ) : (
        // Masaüstü Navbar
        <div className="flex items-center justify-between px-16 py-5 bg-white h-[80px]">
          <div>
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Şirket Logosu"
                width={150}
                height={50}
              />
            </Link>
          </div>
          <div className="flex gap-5">
            {navLinks.map((navLink) => (
              <Link
                key={navLink.name}
                href={navLink.href}
                locale={locale} // Link bileşenine locale prop'u eklendi
                className={`font-medium transition-colors uppercase ${
                  router.pathname === navLink.href
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                {navLink.name}
              </Link>
            ))}
          </div>
          <div className="flex gap-3 text-white">
            {/* Dil değiştirme butonu - Masaüstü */}
            <button
              onClick={handleLanguageChange}
              className="p-1 rounded-full transition-opacity hover:opacity-80"
            >
              <Icon
                icon={locale === "tr" ? "flag:gb-4x3" : "flag:tr-4x3"}
                className="w-8 h-8"
              />
            </button>
            <Link
              href="https://wa.me/908503040946"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#25D366] p-2 px-4 rounded-3xl gap-3 hover:opacity-80 transition-opacity"
            >
              <Icon icon="streamline-plump:phone"></Icon>
              <span className="uppercase">{t("navbar.contact-now")}</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
