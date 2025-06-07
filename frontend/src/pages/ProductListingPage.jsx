import React from "react";
import ProductCard from "../components/ProductCard";

const dummyProducts = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: "₹1,999",
    image: "https://images.unsplash.com/photo-1585386959984-a415522e3f8b",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: "₹2,499",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
  },
  {
    id: 3,
    title: "Gaming Mouse",
    price: "₹799",
    image: "https://images.unsplash.com/photo-1593642531955-b62e17c2c1f5",
  },
];

const ProductsListingPage = () => {
  return (
    <main className="px-6 md:px-20 py-12 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-white">All Products</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default ProductsListingPage;
