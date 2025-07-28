import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useCart } from "../context/Context.jsx";

const backend_url = import.meta.env.VITE_BACKEND_URL;

function Cart() {
  let navigate = useNavigate();
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const { state, dispatch } = useCart(); // Access cart state and dispatch function

  const handleRemove = (product_name , selectedFlavours , selectedFruit) => {
    Swal.fire({
      title: "Do you want to remove this product from your cart?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      customClass: {
        // Custom class for the popup dialog
        popup: "max-w-[80vw] md:max-w-[50vw]",
        title: "text-lg lg:text-xl", // Adjust the title font size on small and large screens
        content: "text-sm sm:text-base", // Smaller font size on small screens
        confirmButton:
          "bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none",
        cancelButton:
          "bg-gray-500 text-white hover:bg-gray-600 focus:ring-2 focus:ring-gray-400 focus:outline-none",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        handleRemoveFromCart(product_name , selectedFlavours , selectedFruit);
        Swal.fire({
          title: "The product has been removed from your cart!",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
          customClass: {
            popup: "max-w-[80vw] md:max-w-[50vw]",
            title: "text-lg lg:text-xl", // Adjust the title font size on small and large screens
            content: "text-sm sm:text-base", // Smaller font size on small screens
          },
        });
      }
    });
  };

  const handleRemoveFromCart = (product_name , selectedFlavours , selectedFruit) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { product_name , selectedFlavours , selectedFruit },
    });
  };

  const handleDecrement = (product_name,selectedFlavours,selectedFruit, quantity) => {
    if (quantity > 1) {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: {
          product_name: product_name,
          selectedFlavours: selectedFlavours,
          selectedFruit: selectedFruit,
          quantity: quantity - 1,
        },
      });
    }
  };
  const handleIncrement = (product_name,selectedFlavours,selectedFruit, quantity) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: {
        product_name: product_name,  
        selectedFlavours: selectedFlavours,
        selectedFruit: selectedFruit,
        quantity: quantity + 1,
      },
    });
  };

  return (
    <section className="bg-primary py-8 antialiased md:py-16">
      <div className="mx-auto max-w-7xl px-4 2xl:px-0 mt-[2.5rem] min-h-[70svh]">
        <div className="cursor-pointer w-max"  onClick={() => navigate(-1)}>
          <FaChevronLeft className="text-white text-3xl mb-6" />
        </div>
        {state.items && state.items.length > 0 && (
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            Your Cart
          </h2>
        )}

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              {state.items && state.items.length > 0 ? (
                state.items.map((item) => (
                  <div
                    key={`${item.product_name}-${item.selectedFlavours}-${item.selectedFruit}`}
                    className="rounded-lg border p-4 shadow-sm border-gray-700 bg-gray-800 md:p-6"
                  >
                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                      <a href="#" className="shrink-0 md:order-1">
                        <img
                          className="h-20 w-20 object-contain"
                          src={`${backend_url}${item.product_image}`}
                          alt=""
                        />
                      </a>

                      <div className="flex items-center justify-between md:order-3 md:justify-end">
                        <div className="flex items-center">
                          <button
                            onClick={() =>
                              handleDecrement(item.product_name,item.selectedFlavours,item.selectedFruit, item.quantity)
                            }
                            type="button"
                            id={`decrement-button-${item.product_name}`}
                            data-input-counter-decrement={`counter-input-${item.product_name}`}
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border   focus:outline-none focus:ring-2 border-gray-600 bg-gray-700 hover:bg-gray-600 focus:ring-gray-700"
                          >
                            <svg
                              className="h-2.5 w-2.5 text-white"
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
                            id={`counter-input-${item.product_name}`}
                            data-input-counter
                            className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium  focus:outline-none focus:ring-0 text-white"
                            placeholder=""
                            value={item.quantity}
                            readOnly
                          />
                          <button
                            onClick={() =>
                              handleIncrement(item.product_name,item.selectedFlavours,item.selectedFruit, item.quantity)
                            }
                            type="button"
                            id={`increment-button-${item.product_name}`}
                            data-input-counter-increment={`counter-input-${item.product_name}`}
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border  focus:outline-none focus:ring-2 border-gray-600 bg-gray-700 hover:bg-gray-600 focus:ring-gray-700"
                          >
                            <svg
                              className="h-2.5 w-2.5 text-white"
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
                        <div className="text-end md:order-4 md:w-32">
                          <p className="text-base flex flex-col space-y-1">
                            <span className="line-through text-gray-600">
                              {item.product_original_price}
                            </span>
                            <span className="font-bold text-white">
                              {item.product_offer_price}
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className="w-full flex flex-col min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                        <p className="text-base font-medium text-white">
                          {item.product_name}
                        </p>
                        <span className="text-white flex-col font-medium">
                          <p>Fruit:</p>
                          <p className="text-gray-500 font-normal">
                            {item.selectedFruit}
                          </p>
                        </span>
                        <span className="text-white font-medium flex-col">
                          <p>Flavours:</p>
                          <p className="text-gray-500 font-normal">
                            {item.selectedFlavours.map((flavour, index) => (
                              <span key={index}>
                                {flavour}
                                {index < item.selectedFlavours.length - 1 &&
                                  ", "}
                              </span>
                            ))}
                          </p>
                        </span>
                        <div className="flex items-center gap-4">
                          <button
                            type="button"
                            className="inline-flex items-center text-sm font-medium text-red-500"
                            onClick={() =>
                              handleRemove(
                                item.product_name,
                                item.selectedFlavours,
                                item.selectedFruit
                              )
                            }
                          >
                            <svg
                              className="me-1.5 h-5 w-5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18 17.94 6M18 18 6.06 6"
                              />
                            </svg>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex-col mt-[5rem] text-center space-y-4 justify-end">
                  <h2 className="text-xl md:text-2xl text-white">
                    Your cart is empty
                  </h2>
                  <p className="text-md md:text-lg text-gray-300">
                    Add products while you shop, so they'll be ready for
                    checkout later.
                  </p>
                  <Link to="/home">
                    <button className="inline-flex mt-4 text-center items-center gap-2 text-md bg-green-500 p-2 rounded-lg text-black font-bold">
                      Start Ordering
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 12H5m14 0-4 4m4-4-4-4"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
          {state.items && state.items.length > 0 && (
            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full h-full justify-evenly">
              <div className="space-y-4 rounded-lg border  p-4 shadow-sm border-gray-700 bg-gray-800 sm:p-6">
                <p className="text-xl font-semibold text-white">
                  Order summary
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-400">
                        Original price
                      </dt>
                      <dd className="text-base font-medium text-white">
                        Rs. {state.totalPrice.toFixed(2)}
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-400">
                        Savings
                      </dt>
                      <dd className="text-base font-medium text-green-600">
                        -Rs. {state.savings}
                      </dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t pt-2 border-gray-700">
                    <dt className="text-base font-bold text-white">
                      Total
                    </dt>
                    <dd className="text-base font-bold text-white">
                      Rs. {state.finalPrice}
                    </dd>
                  </dl>
                </div>

                <Link to="/cart/checkout">
                  <p
                    href="#"
                    className="mt-[1rem] flex w-full items-center justify-center rounded-lg bg-green-400 px-5 py-2.5 text-sm font-bold text-black outline-none"
                  >
                    Proceed to Checkout
                  </p>
                </Link>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-400">
                    {" "}
                    or{" "}
                  </span>
                  <Link to="/home">
                    <p className="inline-flex items-center gap-2 text-sm font-medium underline hover:no-underline text-yellow-500">
                      Continue Shopping
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 12H5m14 0-4 4m4-4-4-4"
                        />
                      </svg>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Cart;
