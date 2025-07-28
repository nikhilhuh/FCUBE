import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#1e1b28] text-white border-t border-gray-700">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl font-bold uppercase mb-4 md:mb-0">
          F
          <span className="text-yellow-400 font-semibold">CUBE</span>
        </h1>

        {/* Social Links */}
        <div className="flex space-x-6 text-2xl md:text-3xl">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://wa.me/yourNumber"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition duration-300"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Optional Bottom Text */}
      <div className="text-center text-sm text-gray-400 pb-4">
        © {new Date().getFullYear()} F CUBE. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
