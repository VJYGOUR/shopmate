// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-400">
          ShopMate
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link to="/products" className="hover:text-blue-400 transition">
            Products
          </Link>
          <Link to="/cart" className="hover:text-blue-400 transition">
            Cart
          </Link>
        </nav>

        {/* Right: Auth / Menu */}
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="hidden md:inline-block px-4 py-1 rounded-full text-sm bg-blue-500 hover:bg-blue-600 transition"
          >
            Login
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 space-y-2 text-sm font-medium">
          <Link
            to="/"
            className="block py-2 border-b border-gray-700 hover:text-blue-400"
          >
            Home
          </Link>
          <Link
            to="/product"
            className="block py-2 border-b border-gray-700 hover:text-blue-400"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="block py-2 border-b border-gray-700 hover:text-blue-400"
          >
            Cart
          </Link>
          <Link to="/login" className="block py-2 hover:text-blue-400">
            Login
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
