import React from "react";
import { motion } from "framer-motion";

const linkVariants = {
  hover: { scale: 1.1, color: "#3b82f6" }, // blue-500
};

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gray-900 text-gray-300 py-8 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white">ShopMate</h2>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} ShopMate. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6 text-sm">
          {["Privacy Policy", "Terms of Service", "Contact"].map((item) => (
            <motion.a
              key={item}
              href="#"
              className="cursor-pointer"
              variants={linkVariants}
              whileHover="hover"
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
