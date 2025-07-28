import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageNotFound from "../component/PageNotFound";
import Swal from "sweetalert2";
import FruitPopup from "./FruitPopup";
import ReactDOMServer from "react-dom/server";
import FlavourPopup from "./FlavourPopup";
import { useCart } from "../context/Context.jsx";

const backend_url = import.meta.env.VITE_BACKEND_URL;

function ProductPage() {
  let navigate = useNavigate();
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const { state, dispatch } = useCart(); // Access cart state and dispatch function
  const product = location.state?.product;
  let selectedFruit , selectedFlavours
  const [ hours , setHours ] = useState(1)

  const handleincrement = () => {
    setHours(hours+1)
  }
  const handledecrement = () => {
    if(hours>1){
      setHours(hours-1)
    }
  }

  if (!product) {
    return <PageNotFound />;
  }

  const handleAddToCart = (product_name,product_image,product_original_price,product_offer_price,quantity,selectedFruit,selectedFlavours) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { product_name,product_image,product_original_price,product_offer_price,quantity,selectedFruit,selectedFlavours}
    });
  };

  function showFruitPopup(product_name,product_image,product_original_price,product_offer_price,quantity) {
    Swal.fire({
      title: "Select Fruit",
      position: "bottom",
      animation: false,
      html: ReactDOMServer.renderToString(
        <FruitPopup />
      ),
      showCancelButton: true,
      confirmButtonText: "Next",
      customClass: {
        popup: "max-w-[90vw] md:max-w-[60vw] mb-[4rem]",
        title: "text-xl",
        confirmButton: "bg-green-400 text-black font-bold hover:bg-green-600 outline-none",
        cancelButton: "bg-red-400 text-black hover:bg-red-500 outline-none",
        actions: "flex-row-reverse",
      },
      preConfirm: () => {
        // Return selected fruit for further processing after the user clicks "Next"
        selectedFruit = document.querySelector('input[name="fruit"]:checked').value;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // If "Next" is clicked, show the second popup
        showFlavourPopup(product_name,product_image,product_original_price,product_offer_price,quantity,selectedFruit);
      }
    });
  }
  function showFlavourPopup(product_name,product_image,product_original_price,product_offer_price,quantity,selectedFruit) {
    Swal.fire({
      title: "Select Flavours",
      position: "bottom",
      animation: false,
      html: ReactDOMServer.renderToString(
        <FlavourPopup />
      ),
      showCancelButton: true,
      cancelButtonText: "Back",
      confirmButtonText: "Add to Cart",
      customClass: {
        popup: "max-w-[90vw] md:max-w-[60vw] mb-[4rem]",
        title: "text-xl",
        confirmButton: "bg-green-400 text-black font-bold hover:bg-green-600 outline-none",
        cancelButton: "bg-red-400 text-black hover:bg-red-500 outline-none",
        actions: "flex-row-reverse",
      },
      preConfirm: () => {
        // Get all checkboxes with the name "flavour"
        selectedFlavours = Array.from(
          document.querySelectorAll('input[name="flavour"]:checked')
        ).map((checkbox) => checkbox.value);
      },
    }).then((secondResult) => {
      // If "Back" is clicked, show the first popup again
      if (secondResult.isDismissed) {
        showFruitPopup(product_name,product_image,product_original_price,product_offer_price,quantity);  // Cycle back to the first popup
      }
      else{
        handleAddToCart(product_name,product_image,product_original_price,product_offer_price,quantity,selectedFruit,selectedFlavours);
        Swal.fire({
          text: "Item has been added to your cart",
          icon: "success",
          position: "top-right",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: "md:max-w-[40vw] max-w-[80vw]",
            text: "text-sm"
          },
        })
      }
    });
  }
  
  const handleCartClicked = (product_name,product_image,product_original_price,product_offer_price,quantity) => {
    showFruitPopup(product_name,product_image,product_original_price,product_offer_price,quantity)
  };
  return (
  <div className="bg-[#1a1a2e] text-white py-10 min-h-screen">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-[2.5rem]">
      <div className="cursor-pointer w-max" onClick={() => navigate(-1)}>
        <FaChevronLeft className="text-yellow-400 text-3xl mb-6 hover:scale-110 transition-transform" />
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
        {/* Product Image */}
        <div className="md:w-1/2 w-full">
          <div className="h-[250px] md:h-[460px] rounded-xl overflow-hidden shadow-lg bg-gray-700">
            <img
              className="w-full h-full object-contain"
              src={`${backend_url}${product.product_image}`}
              alt={product.product_name}
            />
          </div>

          <div className="mt-6">
            <button
              onClick={() =>
                handleCartClicked(
                  product.product_name,
                  product.product_image,
                  product.product_original_price,
                  product.product_offer_price,
                  hours
                )
              }
              className="w-full py-3 rounded-full bg-yellow-400 text-black font-bold text-lg hover:bg-yellow-300 transition"
            >
              Add to Cart
            </button>

            <Link to="/cart">
              <button className="w-full mt-4 py-3 rounded-full bg-gray-800 border border-yellow-400 text-yellow-400 font-bold text-lg hover:bg-gray-700 transition">
                View Cart
              </button>
            </Link>
          </div>
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 w-full space-y-6">
          <h2 className="text-3xl font-bold text-yellow-300">
            {product.product_name}
          </h2>
          <p className="text-gray-300 text-sm">{product.product_info}</p>

          <div className="space-y-2">
            <div className="text-lg">
              <span className="text-gray-400 mr-2">Price:</span>
              <span className="line-through text-red-400 mr-2">
                ₹{product.product_original_price}
              </span>
              <span className="text-yellow-400 font-semibold text-xl">
                ₹{product.product_offer_price} /hr
              </span>
            </div>
            <div className="text-lg">
              <span className="text-gray-400 mr-2">Availability:</span>
              <span className="text-green-400">In Stock</span>
            </div>
          </div>

          <div>
            <span className="block font-semibold text-gray-400 mb-2">
              Choose Hours:
            </span>
            <div className="flex items-center space-x-4">
              <button
                onClick={handledecrement}
                className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white font-bold"
              >
                –
              </button>
              <input
                type="text"
                value={hours}
                readOnly
                className="w-12 text-center bg-transparent border border-gray-600 rounded-md text-lg font-semibold text-white"
              />
              <button
                onClick={handleincrement}
                className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white font-bold"
              >
                +
              </button>
            </div>
          </div>

          <div>
            <span className="block font-semibold text-gray-400 mb-2">
              Product Description:
            </span>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
              <li>Model with approx. 16 inches height</li>
              <li>Stainless steel full body</li>
              <li>Superb quality shisha in collection</li>
              <li>Purely stainless steel shisha</li>
              <li>Hassle-free experience in outdoor sessions</li>
              <li>Lock system helps with grip and comfort</li>
              <li>Perfect for open party sessions</li>
              <li>User-friendly, easy to assemble and disassemble</li>
            </ul>
          </div>

          <div className="mt-4 bg-gray-900 p-4 rounded-lg text-sm text-yellow-200 font-medium space-y-2">
            <p>NOTE:</p>
            <ul className="list-disc list-inside">
              <li>You must be 18+ to purchase this product.</li>
              <li>Base color or stem design may vary.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

}

export default ProductPage;
