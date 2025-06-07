import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-20 px-6 md:px-20 text-center text-white overflow-hidden">
      {/* Animated Gradient Background (blurred circles) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        className="absolute -top-40 -left-40 w-96 h-96 bg-blue-700 opacity-30 rounded-full filter blur-3xl mix-blend-multiply"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-700 opacity-30 rounded-full filter blur-3xl mix-blend-multiply"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          Discover Quality Products at{" "}
          <span className="text-blue-400">Unbeatable Prices</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto drop-shadow-sm">
          Shop our curated collection of must-have items for every lifestyle.
        </p>
        <motion.a
          href="/shop"
          whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-blue-700/50 transition-colors duration-300"
        >
          Shop Now
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
