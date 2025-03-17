import { HttpTypes } from "@medusajs/types";

// Extend the StoreProductVariant type to include prices explicitly
interface ExtendedStoreProductVariant extends HttpTypes.StoreProductVariant {
  prices?: Array<{ amount: number; currency_code?: string }>;
}

export default function ProductCard({ product }: { product: HttpTypes.StoreProduct }) {
  const variant = product.variants?.[0] as ExtendedStoreProductVariant | undefined;
  const price = variant?.prices?.[0]?.amount
    ? (variant.prices[0].amount / 100).toFixed(2) +
      (variant.prices[0].currency_code ? ` ${variant.prices[0].currency_code}` : "")
    : "N/A";

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <img
        src={product.thumbnail || "/placeholder.jpg"}
        alt={product.title || "Unnamed Product"}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h2 className="text-xl font-bold mt-2 text-black">{product.title || "Unnamed Product"}</h2>
      <p className="text-gray-700 font-semibold">{price}</p>
      <button className="mt-3 px-4 py-2 bg-black text-white rounded-lg">Add to Cart</button>
    </div>
  );
}