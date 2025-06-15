import React from "react";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-gray-900 rounded-2xl shadow-lg p-4 cursor-pointer transition-all duration-300"
    >
      <div className="overflow-hidden rounded-xl">
        <img
          src={product.image}
          alt={product.title || "Product image"}
          className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300 rounded-xl"
        />
      </div>

      <h3 className="mt-4 text-lg font-semibold text-white tracking-wide">
        {product.title}
      </h3>

      <p className="text-blue-400 font-bold text-lg mt-1">₹{product.price}</p>

      <a
        href={`/product/${product.id}`}
        aria-label={`View details for ${product.title}`}
        className="inline-block mt-4 text-sm font-semibold px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition duration-300 shadow-md"
      >
        View Details
      </a>
    </motion.div>
  );
};

export default ProductCard;
