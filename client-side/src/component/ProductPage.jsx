import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import HookahImg from "../assets/hookah1.jpg"

function ProductPage() {
  let navigate = useNavigate();
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-800 py-10 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-[2.5rem]">
        <div className="cursor-pointer" onClick={() => navigate(-1)}>
          <FaChevronLeft className="text-white text-3xl mb-6" />
        </div>
        <div className="flex flex-col h-full justify-evenly items-center md:flex-row -mx-4 ">
          <div className="md:flex-1 justify-center px-4">
            <div className="h-[250px] md:h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full rounded-lg object-fill"
                src={HookahImg}
                alt="Product Image"
              />
            </div>

            <div className="px-2 mb-2 space-y-4">
              <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                Add to Cart
              </button>
              <button className="w-full bg-yellow-400 text-black font-bold py-2 px-4 rounded-full hover:scale-105">
                 View Cart
              </button>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-3xl mt-2 font-bold text-gray-800 dark:text-white mb-2">
              Product Name
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              ante justo. Integer euismod libero id mauris malesuada tincidunt.
            </p>
            <div className="flex-wrap mb-4">
              <div className="mr-4 space-x-4">
                <span className="font-bold text-xl text-gray-300">Price:</span>
                <span className="text-xl text-gray-300">Rs. <span id="price">4,599.00</span></span>
              </div>
              <div className="mr-4 space-x-4">
                <span className="font-bold text-xl text-gray-300">
                  Availability:
                </span>
                <span className="text-xl text-gray-300">In Stock</span>
              </div>
            </div>
            
            <div className="mb-4 flex justify-between flex-wrap">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Choose Quantity:
              </span>
              <div className="flex items-center">
                <button
                  type="button"
                  id="decrement-button"
                  data-input-counter-decrement="counter-input"
                  className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                >
                  <svg
                    className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h16"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  id="counter-input"
                  data-input-counter
                  className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                  placeholder=""
                  value="2"
                  readOnly
                />
                <button
                  type="button"
                  id="increment-button"
                  data-input-counter-increment="counter-input"
                  className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                >
                  <svg
                    className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Product Description:
              </span>
              <ul className="text-gray-300 text-sm mt-2">
                <li>Model with approx. 16 inches height</li>
                <li>Stainless steel full body</li>
                <li>Superb quality shisha in collection</li>
                <li>Purely stainless steel shisha</li>
                <li>Get hassle free experience in outdoor sessions as well</li>
                <li>Lock system helps you to hold it easily and comfortably</li>
                <li>Convenient for open party sessions</li>
                <li>
                  User friendly shisha, very much easy to assemble and dissemble
                </li>
              </ul>
            </div>
            <div className="font-bold text-white mt-[1rem]">
                NOTE: 
                <ul className="">
                  <li>You must be 18 years of age or order to purchase this
                  product.</li>
                  <li>Base Color or Stem Design may vary</li>
                  </ul>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
