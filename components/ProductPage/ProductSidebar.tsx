// components/ProductSidebar.tsx

import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useRouter } from "next/router";

const gruplar = [
  { slug: "homeopatik", name: "Homeopatik" },
  { slug: "besleme", name: "Besleme" },
  { slug: "bakim", name: "Bakım" },
  { slug: "boluslar", name: "Boluslar" },
];

const ProductSidebar: React.FC = () => {
  const router = useRouter();

  return (
    <aside className="w-1/4 p-6 bg-gray-200 rounded-xl h-[300px] overflow-y-auto">
      <h4 className="text-xl font-semibold mb-4 text-gray-800">
        Ürün Grupları
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
              {grup.name}
              <Icon icon="mingcute:right-line"></Icon>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ProductSidebar;
