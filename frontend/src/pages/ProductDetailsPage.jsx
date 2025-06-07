import React, { useState } from "react";

const dummyProduct = {
  id: 1,
  title: "Wireless Headphones",
  price: "₹1,999",
  description:
    "High-quality wireless headphones with noise cancellation, long battery life, and comfortable fit. Perfect for music lovers and professionals alike.",
  image: "https://images.unsplash.com/photo-1585386959984-a415522e3f8b",
  stock: 10,
};

const ProductDetailsPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${dummyProduct.title} to cart`);
    // Here you can call your cart context or API
  };

  return (
    <main className="max-w-6xl mx-auto p-6 md:p-20 bg-white">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Product Image */}
        <img
          src={dummyProduct.image}
          alt={dummyProduct.title}
          className="w-full md:w-1/2 rounded-lg object-cover"
        />

        {/* Product Info */}
        <div className="md:w-1/2 flex flex-col">
          <h1 className="text-4xl font-bold mb-4">{dummyProduct.title}</h1>
          <p className="text-3xl text-blue-600 font-semibold mb-4">
            {dummyProduct.price}
          </p>
          <p className="text-gray-700 mb-6">{dummyProduct.description}</p>
          <p className="mb-6 text-sm text-gray-500">
            Available stock: {dummyProduct.stock}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              -
            </button>
            <span className="text-xl">{quantity}</span>
            <button
              onClick={() =>
                setQuantity((q) => Math.min(dummyProduct.stock, q + 1))
              }
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={dummyProduct.stock === 0}
            className={`px-6 py-3 rounded text-white font-semibold ${
              dummyProduct.stock === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {dummyProduct.stock === 0 ? "Out of Stock" : "Add to Cart"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailsPage;
