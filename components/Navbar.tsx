import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";

const links = [
  {
    label: "Ana Sayfa",
    href: "/",
  },
  {
    label: "Hakkımızda",
    href: "/hakkimizda",
  },
  {
    label: "Ürünlerimiz",
    href: "/ürünlerimiz",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

function Navbar() {
  return (
    <div className="w-full flex justify-between items-center p-5 bg-white">
      <div>
        <img src="/images/logo.jpg"></img>
      </div>
      <div className="flex gap-9">
        {links.map((link) => (
          <div className="gap-5 flex" key={link.label}>
            <Link className="uppercase font-semibold" href={link.href}>
              {link.label}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex gap-5">
        <div className="flex items-center gap-2 bg-red-500 px-5 py-2 rounded-full text-white">
          <Link href={"/"}>Trendyol Mağazası</Link>
          <Icon icon="entypo:shop" width="20" height="20" />
        </div>
        <div className="flex items-center gap-2 bg-green-500 px-5 py-2 rounded-full text-white">
          <Link href={"/"}>İletişime Geç</Link>
          <Icon icon="ic:round-phone" width="24" height="24" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
