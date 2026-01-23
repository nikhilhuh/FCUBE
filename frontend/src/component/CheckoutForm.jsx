import React from "react";
import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { useCart } from "../context/Context.jsx";

function CheckoutForm() {
  const selectedCity = "Kanpur";

  let navigate = useNavigate();
  const { state } = useCart(); // Access cart state function
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = () => {
    const name = document.getElementById("your_name").value.trim();
    const phone = document.getElementById("phone-input").value.trim();
    const pinCode = document.getElementById("pin_code").value.trim();
    const orderaddress = document.getElementById("order_address").value.trim();
    let email = document.getElementById("your_email").value.trim();

    // Check if the email is empty, and if so, set it to "Not Available"
    if (!email) {
      email = "Not Available";
    }
    let cartItems = state.items;
    let finalPrice = state.finalPrice;

    // Check if all required fields are filled
    if (!name || !phone || !pinCode || !orderaddress) {
      Swal.fire({
        title: "Please fill in all your required details",
        icon: "warning",
        customClass: {
          popup: "max-w-[80vw] md:max-w-[50vw]",
          title: "text-lg lg:text-xl", // Adjust the title font size on small and large screens
          content: "text-sm sm:text-base", // Smaller font size on small screens
          confirmButton:
            "bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none",
        },
      });
    } else {
       Swal.fire({
            title: "Error placing order",
            text:
              "Could not place your order as backend is temporarily down.",
            icon: "error",
            customClass: {
              popup: "max-w-[80vw] md:max-w-[50vw]",
              title: "text-lg lg:text-xl",
              content: "text-sm sm:text-base",
              confirmButton:
                "bg-red-500 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-400 focus:outline-none",
            },
          });
    }
  };

  return (
    <section className="bg-primary py-8 antialiased md:py-16">
      <form
        onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}
        className="mx-auto max-w-screen-xl px-4 2xl:px-0"
      >
        <div
          className="cursor-pointer mt-[2.5rem] w-max"
          onClick={() => navigate(-1)}
        >
          <FaChevronLeft className="text-white text-3xl mb-6" />
        </div>
        <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
          <div className="min-w-0 flex-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">
                Delivery Details
              </h2>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="your_name"
                    className="mb-2 block text-sm max-w-max font-medium text-white"
                  >
                    {" "}
                    Your name{" "}
                  </label>
                  <input
                    type="text"
                    id="your_name"
                    className="outline-none block w-full rounded-lg border  p-2.5 text-sm  border-gray-600 bg-gray-700 text-white placeholder:text-gray-400 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="for eg: Rishabh Malik"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="your_email"
                    className="mb-2 block text-sm max-w-max font-medium text-white"
                  >
                    {" "}
                    Your email <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    id="your_email"
                    className="outline-none block w-full rounded-lg border p-2.5 text-sm  border-gray-600 bg-gray-700 text-white placeholder:text-gray-400 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="order_address"
                    className="mb-2 block text-sm max-w-max font-medium text-white"
                  >
                    {" "}
                    Address{" "}
                  </label>
                  <input
                    type="text"
                    id="order_address"
                    className="outline-none block w-full rounded-lg border p-2.5 text-sm border-gray-600 bg-gray-700 text-white placeholder:text-gray-400 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="house no , street name , area name"
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <label
                      htmlFor="select-city-input-3"
                      className="block text-sm max-w-max font-medium text-white"
                    >
                      {" "}
                      City{" "}
                    </label>
                  </div>
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedValue(e.target.value)}
                    id="select-city-input-3"
                    className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm bg-gray-700 text-white placeholder:text-gray-400 focus:border-primary-500 focus:ring-primary-500 outline-none"
                  >
                    <option value="Kanpur">Kanpur</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="phone-input"
                    className="mb-2 block max-w-max text-sm font-medium text-white"
                  >
                    {" "}
                    Phone Number{" "}
                  </label>
                  <div className="flex items-center">
                    <button
                      id="dropdown-phone-button-3"
                      data-dropdown-toggle="dropdown-phone-3"
                      className="z-10 gap-2 inline-flex shrink-0 items-center rounded-s-lg border px-4 py-2.5 text-center text-sm font-medium border-gray-600 bg-gray-700 text-white"
                      type="button"
                    >
                      <svg
                        width="25"
                        height="15"
                        viewBox="0 0 300 200"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* <!-- Top saffron band --> */}
                        <rect width="300" height="66.66" fill="#FF9933" />

                        {/* <!-- Middle white band --> */}
                        <rect
                          y="66.66"
                          width="300"
                          height="66.66"
                          fill="#FFFFFF"
                        />

                        {/* <!-- Bottom green band --> */}
                        <rect
                          y="133.32"
                          width="300"
                          height="66.66"
                          fill="#138808"
                        />

                        {/* <!-- Ashoka Chakra (24-spoke navy blue wheel in the center) --> */}
                        <circle
                          cx="150"
                          cy="100"
                          r="22"
                          fill="none"
                          stroke="#000080"
                          strokeWidth="2"
                        />

                        {/* <!-- Ashoka Chakra spokes --> */}
                        <g
                          transform="translate(150, 100)"
                          stroke="#000080"
                          strokeWidth="2"
                        >
                          <line y1="-22" y2="-10" />
                          <line transform="rotate(15)" y1="-22" y2="-10" />
                          <line transform="rotate(30)" y1="-22" y2="-10" />
                          <line transform="rotate(45)" y1="-22" y2="-10" />
                          <line transform="rotate(60)" y1="-22" y2="-10" />
                          <line transform="rotate(75)" y1="-22" y2="-10" />
                          <line transform="rotate(90)" y1="-22" y2="-10" />
                          <line transform="rotate(105)" y1="-22" y2="-10" />
                          <line transform="rotate(120)" y1="-22" y2="-10" />
                          <line transform="rotate(135)" y1="-22" y2="-10" />
                          <line transform="rotate(150)" y1="-22" y2="-10" />
                          <line transform="rotate(165)" y1="-22" y2="-10" />
                          <line transform="rotate(180)" y1="-22" y2="-10" />
                          <line transform="rotate(195)" y1="-22" y2="-10" />
                          <line transform="rotate(210)" y1="-22" y2="-10" />
                          <line transform="rotate(225)" y1="-22" y2="-10" />
                          <line transform="rotate(240)" y1="-22" y2="-10" />
                          <line transform="rotate(255)" y1="-22" y2="-10" />
                          <line transform="rotate(270)" y1="-22" y2="-10" />
                          <line transform="rotate(285)" y1="-22" y2="-10" />
                          <line transform="rotate(300)" y1="-22" y2="-10" />
                          <line transform="rotate(315)" y1="-22" y2="-10" />
                          <line transform="rotate(330)" y1="-22" y2="-10" />
                          <line transform="rotate(345)" y1="-22" y2="-10" />
                        </g>
                      </svg>
                      +91
                    </button>

                    <div className="relative w-full">
                      <input
                        type="text"
                        id="phone-input"
                        className="z-20 block w-full rounded-e-lg border border-s-0 p-2.5 text-sm border-gray-600 bg-gray-700 text-white placeholder:text-gray-400 outline-none"
                        pattern="[6-9][0-9]{9}"
                        placeholder="your phone number."
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="pin_code"
                    className="mb-2 block text-sm font-medium max-w-max text-white"
                  >
                    {" "}
                    PIN Code{" "}
                  </label>
                  <input
                    type="text"
                    id="pin_code"
                    className="outline-none block w-full rounded-lg border  p-2.5 text-sm border-gray-600 bg-gray-700 text-white placeholder:text-gray-400 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="your pin code.."
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">
                Payment
              </h3>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-lg border p-4 ps-4 border-gray-700 bg-gray-800">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        defaultChecked={true}
                        id="pay-on-delivery"
                        aria-describedby="pay-on-delivery-text"
                        type="radio"
                        name="payment-method"
                        value=""
                        className="h-4 w-4 text-primary-600 focus:ring-2  border-gray-600 bg-gray-700 ring-offset-gray-800 focus:ring-primary-600"
                      />
                    </div>

                    <div className="ms-4 text-sm">
                      <label
                        htmlFor="pay-on-delivery"
                        className="font-medium leading-none max-w-max text-white"
                      >
                        {" "}
                        Payment on delivery{" "}
                      </label>
                      <p
                        id="pay-on-delivery-text"
                        className="mt-1 text-xs font-normal text-gray-400"
                      >
                        Your delivery charge is on us (Free)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-bold text-shadow text-black outline-none bg-green-400 hover:bg-green-800"
            >
              Place your Order
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default CheckoutForm;
