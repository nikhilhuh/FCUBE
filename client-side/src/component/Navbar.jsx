import React from "react";
import { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/Context.jsx";

const Navbar = ({ sidebar, setSidebar, scrollToHero, scrollToProducts }) => {
  const { state } = useCart();
  useEffect(() => {
    // Lock body scroll when the sidebar is open
    if (sidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      // Clean up to restore normal scrolling behavior on unmount or when sidebar closes
      document.body.style.overflow = "auto";
    };
  }, [sidebar]);

  return (
    <div className="relative w-full">
      <div className="fixed w-full py-2 text-white z-20 bg-gradient-to-r from-primary to-secondary">
        <div data-aos="fade-down" className="container">
          <div className="flex justify-between items-center pr-4">
           <Link to="/">
             <h1 className="text-4xl font-bold uppercase">
               F
               <span className="font-normal-400 text-3xl text-yellow-500 text-shadow">
                 CUBE
               </span>
             </h1>
           </Link>
            <ul className="space-x-14 text-xl hidden lg:flex">
              <Link to="/home">
                <li
                  className="hover:text-yellow-400 hover:font-bold hover:cursor-pointer"
                  onClick={scrollToHero}
                >
                  Home
                </li>
              </Link>
              <Link to="/home">
                <li
                  className="hover:text-yellow-400 hover:font-bold hover:cursor-pointer"
                  onClick={scrollToProducts}
                >
                  Products
                </li>
              </Link>

              <Link to="/contactus">
                <li className="hover:text-yellow-400 hover:font-bold hover:cursor-pointer">
                  Contact Us
                </li>
              </Link>

              <Link to="/cart">
                <li className="hover:text-yellow-400 hover:font-bold hover:cursor-pointer relative">
                  <FaShoppingCart className="text-2xl" />
                  <div className="absolute top-[-8px] right-[-8px] bg-yellow-500 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {state.items.length}
                  </div>
                </li>
              </Link>
            </ul>

            <div className="lg:hidden" onClick={() => setSidebar(!sidebar)}>
              {sidebar ? (
                <IoIosClose className="text-4xl cursor-pointer" />
              ) : (
                <GiHamburgerMenu className="text-3xl cursor-pointer" />
              )}
            </div>

            {/* Sidebar Menu for Mobile */}
            {sidebar && (
              <div style={{ height: "calc(100vh - 56.8px)" }} className={`absolute top-[56.8px] w-[100%] py-6 text-lg font-bold pl-5 bg-primaryDark origin-right right-0 flex flex-col justify-between transform ${
                sidebar ? 'animate-slideIn' : 'animate-slideOut'
              }`}>
                <div>
                  <ul className="flex flex-col justify-center space-y-4">
                    <Link to="/home">
                      <li
                        onClick={() => {
                          scrollToHero();
                          setSidebar(false);
                        }}
                        className="cursor-pointer"
                      >
                        Home
                      </li>
                    </Link>
                    <Link to="/home">
                      <li
                        onClick={() => {
                          scrollToProducts();
                          setSidebar(false);
                        }}
                        className="cursor-pointer"
                      >
                        Products
                      </li>
                    </Link>
                    <Link to="/contactus">
                      <li
                        className="cursor-pointer"
                        onClick={() => {
                          setSidebar(false);
                        }}
                      >
                        Contact Us
                      </li>
                    </Link>
                    <Link to="/cart">
                      <li
                        className="hover:text-yellow-400 hover:font-bold hover:cursor-pointer flex gap-4"
                        onClick={() => {
                          setSidebar(false);
                        }}
                      >
                        My Cart
                        <div className="relative">
                          <FaShoppingCart className="text-2xl" />
                          <div className="absolute top-[-8px] right-[-8px] bg-yellow-500 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {state.items.length}
                          </div>
                        </div>
                      </li>
                    </Link>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <img src="" alt="Logo" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
