import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import HookahImg from "../assets/hookah2.jpg";

const backend_url = import.meta.env.VITE_BACKEND_URL;

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${backend_url}/api/products`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  return (
    <section className="w-full px-5 py-10 bg-[#1e1b28] text-white">
     <div className="max-w-6xl mx-auto">
       <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-10 bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
         Our Premium Services
       </h2>
      
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
         {products.map((product, index) => (
           <Link
             key={index}
             to={{ pathname: "/product" }}
             state={{ product }}
             className="w-[250px] bg-gradient-to-br from-[#2d1d30] to-[#3f1f38] rounded-xl overflow-hidden shadow-xl hover:scale-105 transform transition-all duration-300"
             data-aos="zoom-in-up"
           >
             <div className="relative w-full h-60 overflow-hidden bg-black">
               <img
                 src={`${backend_url}${product.product_image}` || HookahImg}
                 alt={product.product_name}
                 className="w-full h-full object-cover"
               />
             </div>
             <div className="p-4 flex flex-col justify-between h-[140px]">
               <h3 className="font-bold text-lg line-clamp-2 mb-2">
                 {product.product_name}
               </h3>
               <div className="text-sm">
                 <span className="text-gray-400 line-through mr-2">
                   ₹{product.product_original_price}
                 </span>
                 <span className="text-yellow-400 font-semibold">
                   ₹{product.product_offer_price}
                 </span>
               </div>
             </div>
           </Link>
         ))}
       </div>
     </div>
    </section>
  );
}

export default Products;
