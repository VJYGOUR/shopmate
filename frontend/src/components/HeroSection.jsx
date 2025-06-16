import { motion } from "framer-motion";
const HeroSection = ({ userName }) => {
  return (
    <section className="relative bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] py-20 px-6 md:px-16 text-center text-white overflow-hidden">
      {/* Floating Blobs */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        className="absolute -top-48 -left-48 w-[28rem] h-[28rem] bg-fuchsia-600 opacity-30 rounded-full filter blur-3xl mix-blend-multiply"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
        className="absolute -bottom-48 -right-48 w-[28rem] h-[28rem] bg-blue-600 opacity-30 rounded-full filter blur-3xl mix-blend-multiply"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        {/* 👇 Add this welcome line conditionally */}
        {userName && (
          <h2 className="text-2xl md:text-3xl font-medium mb-4 text-blue-300">
            Welcome,{" "}
            <span className="font-bold text-amber-300 text-6xl">
              {userName}
            </span>
            👋
          </h2>
        )}

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-fuchsia-400 text-transparent bg-clip-text animate-text-glow">
            Discover Unique Finds&nbsp;
          </span>
          at <span className="text-blue-500">Unbeatable Prices</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Elevate your style with curated picks from our best-selling
          collections.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href="/products"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-white font-bold text-lg shadow-xl hover:shadow-blue-700/40 transition-all duration-300"
          >
            🚀 Start Shopping
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default HeroSection;
