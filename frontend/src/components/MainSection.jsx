import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "₹1,999",
    image: "https://via.placeholder.com/300x200?text=Product+1",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "₹2,499",
    image: "https://via.placeholder.com/300x200?text=Product+2",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: "₹799",
    image: "https://via.placeholder.com/300x200?text=Product+3",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: "₹1,299",
    image: "https://via.placeholder.com/300x200?text=Product+4",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const MainSection = () => {
  return (
    <section className="bg-gray-900 py-16 px-6 md:px-20 text-white">
      <h2 className="text-3xl font-semibold text-center mb-12 text-blue-400">
        Featured Products
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(59, 130, 246, 0.6)",
            }}
            className="bg-gray-800 p-5 rounded-lg shadow-md cursor-pointer transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md mb-5"
            />
            <h3 className="text-lg font-semibold text-gray-100 mb-2">
              {product.name}
            </h3>
            <p className="text-blue-400 font-bold text-lg">{product.price}</p>
            <button
              className="mt-5 w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded text-white font-semibold shadow-lg"
              aria-label={`Add ${product.name} to cart`}
            >
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MainSection;
