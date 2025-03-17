import ProductCard from "../components/ProductCard";
import { HttpTypes } from "@medusajs/types";

async function fetchProducts() {
  const res = await fetch(`${process.env.MEDUSA_BACKEND_URL}/store/products`, {
    headers: {
      "x-publishable-api-key": process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY!,
    },
  });
  const products = await res.json();
  return products;
}

export default async function ProductsPage() {
  const products: HttpTypes.StoreProduct[] = await fetchProducts();

  return (
    <div className="container mx-auto p-4 bg-white text-black">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-bold mb-4 sm:mb-0 text-black">Products</h1>
        <div className="flex items-center space-x-2">
          <label className="text-black">Sort by</label>
          <select className="p-1 rounded bg-gray-100 text-black">
            <option>Latest Arrivals</option>
            <option>Price: Low - High</option>
            <option>Price: High - Low</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}