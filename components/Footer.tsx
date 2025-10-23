// components/Footer.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslation } from "@/hooks/useTranslation";

const Footer = () => {
  const { t } = useTranslation();

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

  // Güncel yılı alıyoruz
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gray-800 text-white p-10 px-20">
      <div className="flex flex-col md:flex-row justify-between h-auto md:h-[250px]">
        {/* Adres Bölümü */}
        <div className="mb-8 md:mb-0 max-w-xs">
          {/* Logoya tıklayınca anasayfaya yönlendirme */}
          <Link href="/">
            <Image
              width={200}
              height={60}
              src="/images/logo_beyaz.png"
              alt="Nutriwin Logo"
              className="mb-4"
            />
          </Link>
          <div className="mb-2">
            <span className="font-bold">{t("footer.address")}:</span>{" "}
            {t("footer.address-text")}
          </div>
          <div className="mb-2">
            <span className="font-bold">{t("footer.telephone")}:</span>{" "}
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
            <span className="font-bold">{t("footer.mail")}:</span>{" "}
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
            {t("footer.menu")}
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
              {t("footer.why-us")}
            </div>
            <div className="max-w-xs text-sm">{t("footer.why-us-text")}</div>
          </div>
          {/* Bizi Takip Edin */}
          <div>
            <div className="uppercase font-semibold mb-2 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/3 after:h-0.5 after:bg-red-500">
              {t("footer.follow-us")}
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

      {/* Telif Hakkı ve Powered by Bölümü */}
      <div className="mt-10 pt-5 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm">
        {/* Telif Hakkı (Sola Dayalı) */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          &copy; {currentYear} Nutriwin.{" "}
          {t("footer.copyright-text") || "Tüm hakları saklıdır."}
        </div>

        {/* Powered by Beq Creative (Sağa Dayalı) */}
        <div>
          <Link
            href="https://www.beqcreative.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <div className="flex items-center justify-center md:justify-end">
              <span className="mr-2">Powered by</span>
              <Image
                width={100} // İhtiyaca göre ayarlanabilir
                height={30} // İhtiyaca göre ayarlanabilir
                src="/images/beq.png"
                alt="Beq Creative Logo"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
