import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";

function ContactUs() {
  let navigate = useNavigate();
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const handleCopy = () => {
    const phoneNumber = document.querySelector("#phoneNumber").textContent;
    navigator.clipboard.writeText(phoneNumber).then(()=>{
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
    })
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <div className="cursor-pointer mt-[2.5rem] w-max" onClick={() => navigate(-1)}>
          <FaChevronLeft className="text-white text-3xl mb-6" />
        </div>
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white mt-[30px] lg:mt-[20px]">
          Contact Us
        </h2>
        <div className="flex flex-wrap w-full text-slate-400 mt-[35px] md:mt-[50px] mb-[50px] px-5 justify-evenly items-center gap-5 md:gap-0">
            <div className="flex-col text-center gap-1">
              <p className="text-xl text-white">
                Call us at
              </p>
                <p onClick={handleCopy} className="flex gap-2 items-center text-lg">
                  <FaPhoneAlt />
                  <span id="phoneNumber">+91 7007613357</span>
                </p>
            </div>
            <div className="flex-col text-center gap-1">
              <p className="text-xl text-white">
                WhatsApp us at
              </p>
                <p onClick={handleCopy} className="flex gap-2 items-center text-lg">
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
        <form action="#" className="space-y-8 w-full">
          <div>
            <label
              htmlFor="order-name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
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
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
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
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
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
