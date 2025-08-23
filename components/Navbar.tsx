import React from "react";
import Link from "next/link";
import Image from "next/image"; // Next.js Image bileşeni için
import { Icon } from "@iconify/react/dist/iconify.js";
import { navLinks } from "@/data/Navlinks";
import { useRouter } from "next/router"; // useRouter hook'u eklendi

function Navbar() {
  const router = useRouter(); // router'ı başlatıyoruz

  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between px-16 py-5 bg-white h-[80px] shadow z-50">
      <div>
        {/* Logoya tıklayınca anasayfaya yönlendirme */}
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
            // Aktif linki kontrol ederek sınıfı değiştiriyoruz
            className={`font-medium transition-colors ${
              router.pathname === navLink.href
                ? "text-red-600" // Aktifse kırmızı
                : "text-gray-700 hover:text-red-600" // Aktif değilse gri ve hover
            }`}
          >
            {navLink.name}
          </Link>
        ))}
      </div>
      <div className="flex gap-3 text-white">
        {/* Trendyol Mağazası Butonu */}

        {/* İletişime Geç Butonu (WhatsApp) */}
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
  );
}

export default Navbar;
