import React from "react";
import { motion } from "framer-motion";
import useStore from "../lib/store";
import watch from "../assets/download.jpeg";
import earphone from "../assets/download (1).jpeg";
import gamingMouse from "../assets/gamingmouse.jpeg";
import blSpeaker from "../assets/blspeaker.jpeg";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1999,
    image: watch,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2499,
    image: earphone,
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 799,
    image: gamingMouse,
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 1299,
    image: blSpeaker,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const MainSection = () => {
  const { addToCart } = useStore();

  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-20 px-6 md:px-20 text-white">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text drop-shadow-lg">
        Featured Products
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(96,165,250,0.6)",
            }}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl transition-all duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-100 mb-2">
                {product.name}
              </h3>
              <p className="text-blue-400 font-bold text-xl mb-4">
                ₹{product.price}
              </p>
              <button
                className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg text-white font-bold tracking-wide shadow-lg transition-all duration-300"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MainSection;
