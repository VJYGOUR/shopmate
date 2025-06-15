// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Cart", path: "/cart" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const mobileVariants = {
    hidden: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-black/40 backdrop-blur-md shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold bg-gradient-to-r from-fuchsia-500 to-blue-400 text-transparent bg-clip-text animate-pulse"
        >
          ShopMate
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-semibold tracking-wider text-white">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="relative group hover:text-blue-400 transition"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="px-5 py-2 rounded-full text-sm font-bold bg-blue-600 hover:bg-blue-700 shadow-lg transition-all"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-5 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white shadow-xl transition-all"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-white hover:text-blue-400 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileVariants}
            className="md:hidden bg-black/90 text-white px-6 py-4 space-y-4 backdrop-blur-md"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="block text-lg font-semibold hover:text-blue-400 transition"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block bg-blue-600 hover:bg-blue-700 text-center py-2 rounded-full font-bold shadow-md"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={() => setMenuOpen(false)}
              className="block bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-center py-2 rounded-full font-bold shadow-lg"
            >
              Sign Up
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
