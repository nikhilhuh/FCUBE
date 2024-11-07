import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


function Footer() {
  return (
    <div className="bg-gray-200">
      <div className="md:p-5 md:mx-4 p-4">
        <div className="flex justify-around items-center">
          <h1 className="text-2xl md:text-4xl font-bold uppercase">
            F
            <span className="font-normal-400 text-yellow-500 text-shadow">
              CUBE
            </span>
          </h1>
          <span className="flex space-x-4 text-2xl md:text-4xl">
            <FaInstagram className="cursor-pointer"/>
            <FaFacebook className="cursor-pointer"/>
            <FaWhatsapp className="cursor-pointer"/>
            </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
