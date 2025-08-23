// components/ProductList.tsx

import ProductCard from "./ProductCard";

interface Urun {
  slug: string;
  name: string;
  image: string;
}

interface ProductListProps {
  urunler: Urun[];
  grup: string;
}

const ProductList: React.FC<ProductListProps> = ({ urunler, grup }) => {
  if (urunler.length === 0) {
    return (
      <p className="text-gray-500 text-lg text-center">
        Bu grupta henüz ürün bulunmamaktadır.
      </p>
    );
  }

  // Burada her satırda 3 öğe olacak şekilde düzenliyoruz
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {urunler.map((urun) => (
        <ProductCard
          key={urun.slug}
          name={urun.name}
          image={urun.image}
          link={`/urunlerimiz/${grup}/${urun.slug}`}
        />
      ))}
    </div>
  );
};

export default ProductList;
