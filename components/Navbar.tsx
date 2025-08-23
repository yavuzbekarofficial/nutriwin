import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/router";
import useIsMobile from "@/hooks/useIsMobile"; // useIsMobile hook'unu doğru yoluyla ekleyin

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

function Navbar() {
  const router = useRouter();
  const isMobile = useIsMobile(); // Hook'u kullanarak mobil olup olmadığını kontrol ediyoruz
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Hamburger menü durumunu yönetiyoruz

  // Linke tıklandığında menüyü kapatmak için
  const handleLinkClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow">
      {/* Masaüstü ve mobil navbar'ı ayırma */}
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
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 p-2"
            >
              {/* Hamburger veya çarpı ikonu */}
              <Icon
                icon={isMenuOpen ? "codicon:chrome-close" : "ci:hamburger-lg"}
                className="w-8 h-8"
              />
            </button>
          </div>

          {/* Mobil Menü (Açıldığında Görünür) */}
          <div
            className={`fixed top-[60px] left-0 h-full w-full bg-white transition-transform duration-300 ease-in-out transform ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } flex flex-col items-center pt-8 gap-6 `}
          >
            {navLinks.map((navLink) => (
              <Link
                key={navLink.name}
                href={navLink.href}
                onClick={handleLinkClick}
                className={`text-2xl font-semibold transition-colors ${
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
              <span>İLETİŞİME GEÇ</span>
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
                className={`font-medium transition-colors ${
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
            <Link
              href="https://wa.me/908503040946"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#25D366] p-2 px-4 rounded-3xl gap-3 hover:opacity-80 transition-opacity"
            >
              <Icon icon="streamline-plump:phone"></Icon>
              <span>İLETİŞİME GEÇ</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
