// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Animation variants for mobile menu sliding down
  const menuVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  };

  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-400 hover:text-blue-500 transition-colors"
        >
          ShopMate
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm font-semibold tracking-wide">
          <Link
            to="/"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Cart
          </Link>
        </nav>

        {/* Right: Auth / Menu */}
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="hidden md:inline-block px-5 py-2 rounded-full text-sm bg-blue-600 hover:bg-blue-700 transition-colors duration-300 font-semibold shadow-md"
          >
            Login
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none p-2 rounded hover:bg-gray-700 transition"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <motion.svg
              key={menuOpen ? "open" : "closed"}
              initial={{ rotate: 0 }}
              animate={{ rotate: menuOpen ? 90 : 0 }}
              className="w-7 h-7 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobileMenu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="md:hidden bg-gray-800 px-6 pb-6 space-y-3 text-sm font-medium border-t border-gray-700"
          >
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block py-2 border-b border-gray-700 hover:text-blue-400 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="block py-2 border-b border-gray-700 hover:text-blue-400 transition-colors"
            >
              Products
            </Link>
            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="block py-2 border-b border-gray-700 hover:text-blue-400 transition-colors"
            >
              Cart
            </Link>
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block py-2 hover:text-blue-400 transition-colors"
            >
              Login
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
