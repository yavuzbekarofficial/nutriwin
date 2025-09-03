// components/ProductSidebar.tsx

import { useTranslation } from "@/hooks/useTranslation";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useRouter } from "next/router";

const gruplar = [
  {
    slug: "homeopatik",
    name: { tr: "Homeopatik Ürünleri", en: "Homeopathic Products" },
  },
  { slug: "besleme", name: { tr: "Besleme Ürünleri", en: "Feeding Products" } },
  { slug: "bakim", name: { tr: "Bakım Ürünleri", en: "Care Products" } },
  { slug: "boluslar", name: { tr: "Boluslar", en: "Boluses" } },
];

const ProductSidebar: React.FC = () => {
  const router = useRouter();
  const { t, locale } = useTranslation();

  const currentLocale = locale === "en" ? "en" : "tr";

  return (
    <aside className="w-full md:w-80 p-6 bg-gray-200 rounded-xl h-auto md:h-[300px] overflow-y-auto">
      <h4 className="text-xl font-semibold mb-4 text-gray-800">
        {t("products.product-group")}
      </h4>
      <ul className="space-y-2">
        {gruplar.map((grup) => (
          <li key={grup.slug}>
            <Link
              href={`/urunlerimiz/${grup.slug}`}
              className={`block py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-between ${
                router.query.grup === grup.slug
                  ? "bg-red-600 text-white shadow-lg"
                  : "text-gray-700 hover:bg-white"
              }`}
            >
              {grup.name[currentLocale]}
              <Icon icon="mingcute:right-line"></Icon>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ProductSidebar;
