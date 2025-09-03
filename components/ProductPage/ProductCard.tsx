// components/ProductCard.tsx

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

interface ProductCardProps {
  name: string;
  link: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, link, image }) => {
  const { t } = useTranslation();
  return (
    <div className="relative rounded-xl  hover:shadow-lg transition-shadow duration-300 bg-white overflow-hidden group">
      {/* Resim Alanı */}
      <div className="relative w-full h-48 sm:h-64 md:h-72">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="contain"
          className="p-4 transition-filter duration-300 group-hover:filter group-hover:blur-sm"
        />
      </div>

      {/* Ürün Adı */}
      <div className="bg-gray-200 p-4 transition-filter duration-300 group-hover:filter group-hover:blur-sm">
        <h3 className="text-lg font-semibold text-gray-800 text-center">
          {name}
        </h3>
      </div>

      {/* Detaya Git Butonu (Hover'da görünür) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Link href={link} legacyBehavior>
          <a className=" flex items-center gap-3 bg-transparent text-white font-medium py-2 px-6 rounded-md border border-white transition-transform duration-300 transform scale-95 group-hover:scale-100">
            {t("products.see-detail")}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
