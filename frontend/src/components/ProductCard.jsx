import React from "react";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 20px rgba(59, 130, 246, 0.6)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-gray-800 shadow-md rounded p-4 cursor-pointer text-white"
    >
      <img
        src={product.image}
        alt={product.title || "Product image"}
        className="w-full h-48 object-cover rounded mb-3"
      />
      <h3 className="text-lg font-semibold text-gray-100">{product.title}</h3>
      <p className="text-blue-400 font-bold">{product.price}</p>
      <a
        href={`/product/${product.id}`}
        aria-label={`View details for ${product.title}`}
        className="inline-block mt-3 text-sm bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition text-white"
      >
        View Details
      </a>
    </motion.div>
  );
};

export default ProductCard;
