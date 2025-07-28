import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/Context.jsx";

const Navbar = ({ sidebar, setSidebar, scrollToHero, scrollToProducts }) => {
  const { state } = useCart();

  useEffect(() => {
    document.body.style.overflow = sidebar ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [sidebar]);

  return (
    <div className="relative w-full">
      <nav className="fixed w-full z-30 py-3 px-4 bg-gradient-to-r from-[#1e1b28] via-[#332544] to-[#3f1f38] shadow-lg text-white h-[8dvh]">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <h1 className="text-3xl font-extrabold uppercase tracking-wide">
              F<span className="text-yellow-400 font-semibold">CUBE</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-12 text-lg font-medium">
            <li
              className="hover:text-yellow-400 transition cursor-pointer"
              onClick={scrollToHero}
            >
              <Link to="/home">Home</Link>
            </li>
            <li
              className="hover:text-yellow-400 transition cursor-pointer"
              onClick={scrollToProducts}
            >
              <Link to="/home">Products</Link>
            </li>
            <li className="hover:text-yellow-400 transition cursor-pointer">
              <Link to="/contactus">Contact Us</Link>
            </li>
            <li className="relative hover:text-yellow-400 transition cursor-pointer">
              <Link to="/cart">
                <FaShoppingCart className="text-xl" />
                {state.items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {state.items.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <div className="flex items-center lg:hidden space-x-4">
            <Link to="/cart">
              <div className="relative">
                <FaShoppingCart className="text-2xl" />
                {state.items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {state.items.length}
                  </span>
                )}
              </div>
            </Link>
            <div
              onClick={() => setSidebar(!sidebar)}
              className="cursor-pointer"
            >
              {sidebar ? (
                <IoIosClose className="text-3xl" />
              ) : (
                <GiHamburgerMenu className="text-2xl" />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        {sidebar && (
          <div
            className="absolute top-full left-0 w-full bg-[#2a1d2f] text-white text-lg font-semibold px-6 py-8 space-y-6 transition-all duration-300 shadow-md animate-slideIn h-[92dvh] max-h-[92dvh] overflow-y-auto"
          >
            <ul className="flex flex-col gap-4">
              <li
                className="hover:text-yellow-400 cursor-pointer"
                onClick={() => {
                  scrollToHero();
                  setSidebar(false);
                }}
              >
                <Link to="/home">Home</Link>
              </li>
              <li
                className="hover:text-yellow-400 cursor-pointer"
                onClick={() => {
                  scrollToProducts();
                  setSidebar(false);
                }}
              >
                <Link to="/home">Products</Link>
              </li>
              <li
                className="hover:text-yellow-400 cursor-pointer"
                onClick={() => setSidebar(false)}
              >
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
