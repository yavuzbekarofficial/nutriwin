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
  const { t, locale, changeLanguage } = useTranslation();

  const NAV_HEIGHT = "80px";

  // 3 Dil arasında geçiş yapan yeni fonksiyon (TR -> EN -> AR -> TR)
  const handleLanguageChange = () => {
    if (locale === "tr") {
      changeLanguage("en");
    } else if (locale === "en") {
      changeLanguage("ar");
    } else {
      changeLanguage("tr");
    }
  };

  // Aktif dile göre bayrak ikonunu belirle
  const getLangIcon = () => {
    if (locale === "tr") return "flag:tr-4x3";
    if (locale === "en") return "flag:gb-4x3";
    return "flag:sa-4x3"; // Arapça için Suudi Arabistan bayrağı
  };

  const navLinks = [
    { name: t("navbar.home"), href: "/" },
    { name: t("navbar.about"), href: "/hakkimizda" },
    { name: t("navbar.products"), href: "/urunlerimiz" },
    { name: t("navbar.blog"), href: "/blog" },
    { name: t("navbar.contact"), href: "/iletisim" },
  ];

  const handleLinkClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    // dir={...} özelliği sayesinde Arapça seçildiğinde Logo ve Menü yer değiştirir (RTL)
    <div
      className="fixed top-0 left-0 w-full z-50 shadow bg-white"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      {isMobile ? (
        // --- MOBİL NAVBAR ---
        <div className="flex items-center justify-between px-4 py-3 h-[80px]">
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

            {/* Dil Değiştirme Butonu - Mobil */}
            <button
              onClick={handleLanguageChange}
              className="flex items-center gap-1 p-1 rounded-full transition-opacity hover:opacity-80 border border-gray-100"
            >
              <Icon icon={getLangIcon()} className="w-7 h-7" />
              <span className="text-[10px] font-bold uppercase text-gray-500">
                {locale}
              </span>
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

          {/* Mobil Menü Paneli */}
          <div
            style={{ top: NAV_HEIGHT, height: `calc(100dvh - ${NAV_HEIGHT})` }}
            className={`fixed left-0 w-full bg-white transition-transform duration-300 ease-in-out transform overflow-y-auto ${
              isMenuOpen
                ? "translate-x-0"
                : locale === "ar"
                  ? "translate-x-full"
                  : "-translate-x-full"
            } flex flex-col items-center pt-8 gap-6 z-40`}
          >
            {navLinks.map((navLink) => (
              <Link
                key={navLink.name}
                href={navLink.href}
                onClick={handleLinkClick}
                locale={locale}
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
        // --- MASAÜSTÜ NAVBAR ---
        <div className="flex items-center justify-between px-16 py-5 h-[80px]">
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
                locale={locale}
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
          <div className="flex items-center gap-4">
            {/* Dil Değiştirme Butonu - Masaüstü */}
            <button
              onClick={handleLanguageChange}
              className="flex items-center gap-2 p-1 px-2 rounded-xl transition-all hover:bg-gray-50 border border-transparent hover:border-gray-200"
            >
              <Icon icon={getLangIcon()} className="w-8 h-8" />
              <span className="text-xs font-bold uppercase text-gray-600">
                {locale}
              </span>
            </button>

            <Link
              href="https://wa.me/908503040946"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#25D366] text-white p-2 px-4 rounded-3xl gap-3 hover:opacity-80 transition-opacity"
            >
              <Icon icon="streamline-plump:phone"></Icon>
              <span className="uppercase text-sm font-medium">
                {t("navbar.contact-now")}
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
