import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { backend_url } from "../App";

function ContactUs() {
  let navigate = useNavigate();
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const handleCopy = () => {
    const phoneNumber = document.querySelector("#phoneNumber").textContent;
    navigator.clipboard.writeText(phoneNumber).then(() => {
      Swal.fire({
        title: "Phone Number copied to your clipboard",
        icon: "success",
        customClass: {
          popup: "max-w-[80vw] md:max-w-[50vw]",
          title: "text-lg lg:text-xl", // Adjust the title font size on small and large screens
          content: "text-sm sm:text-base", // Smaller font size on small screens
          confirmButton:
            "bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none",
        },
      });
    });
  };

  const handleSendMessage = (e) => {    
    let name = document.getElementById("order-name").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let phoneNumber = document.getElementById("contact_number").value.trim();
    let contact_message = document.getElementById("message").value.trim();

    if(!contact_message){
      contact_message = "Not Available";
    }
    if (!name || !subject || !phoneNumber) {
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
      axios
        .post(`${backend_url}/api/contact`, {
          name,
          subject,
          phoneNumber,
          contact_message,
        })
        .then((response) => {          
          Swal.fire({
            title: response?.data?.message || "Contact Request Sent",
            icon: "success",
            customClass: {
              popup: "max-w-[80vw] md:max-w-[50vw]",
              title: "text-lg lg:text-xl",
              content: "text-sm sm:text-base",
              confirmButton:
                "bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none",
            },
          }).then(() => {
            navigate(-1); // Navigate back on confirmation
          });
        })
        .catch((error) => {
          console.log("error came");
          
          Swal.fire({
            title: "Error sending contact request",
            text:
              error.response?.data?.message ||
              "An error occurred. Please try again.",
            icon: "error",
            customClass: {
              popup: "max-w-[80vw] md:max-w-[50vw]",
              title: "text-lg lg:text-xl",
              content: "text-sm sm:text-base",
              confirmButton:
                "bg-red-500 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-400 focus:outline-none",
            },
          });
        });
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <div
          className="cursor-pointer mt-[2.5rem] w-max"
          onClick={() => navigate(-1)}
        >
          <FaChevronLeft className="text-white text-3xl mb-6" />
        </div>
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white mt-[30px] lg:mt-[20px]">
          Contact Us
        </h2>
        <div className="flex flex-wrap w-full text-slate-400 mt-[35px] md:mt-[50px] mb-[50px] px-5 justify-evenly items-center gap-5 md:gap-0">
          <div className="flex-col text-center gap-1">
            <p className="text-xl text-white">Call us at</p>
            <p onClick={handleCopy} className="flex gap-2 items-center text-lg cursor-pointer">
              <FaPhoneAlt />
              <span id="phoneNumber">+91 7007613357</span>
            </p>
          </div>
          <div className="flex-col text-center gap-1">
            <p className="text-xl text-white">WhatsApp us at</p>
            <p onClick={handleCopy} className="flex gap-2 items-center text-lg cursor-pointer">
              <FaWhatsapp />
              <span id="phoneNumber">+91 7007613357</span>
            </p>
          </div>
        </div>
        {/* line */}
        <div className="h-[2px] w-full bg-slate-500 mb-[50px]"></div>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          If any difficulties in contacting us through phone or whatsapp ,
          message us we will get back to you asap.
        </p>
        <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="space-y-8 w-full">
          <div>
            <label
              htmlFor="order-name"
              className="block mb-2 text-sm font-medium max-w-max text-gray-900 dark:text-gray-300"
            >
              Your Name
            </label>
            <input
              type="text"
              id="order-name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="for eg: Rishabh Malik"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm max-w-max font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div>
            <label
              htmlFor="contact_number"
              className="mb-2 block text-sm max-w-max font-medium text-gray-900 dark:text-white"
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
                  <rect y="66.66" width="300" height="66.66" fill="#FFFFFF" />

                  {/* <!-- Bottom green band --> */}
                  <rect y="133.32" width="300" height="66.66" fill="#138808" />

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
                  id="contact_number"
                  className="z-20 block w-full rounded-e-lg border border-s-0 p-2.5 text-sm border-gray-600 bg-gray-700 text-white placeholder:text-gray-400 outline-none"
                  pattern="[6-9][0-9]{9}"
                  placeholder="we will call you.."
                  required
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm max-w-max font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Briefly explain us your problem.."
            ></textarea>
          </div>
          <div className="w-full flex justify-center items-center">
            <button
              type="submit"
              className="py-3 px-5 text-lg font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
