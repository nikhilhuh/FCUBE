import React from "react";
import { Link } from "react-router-dom";
import HookahImg from "../assets/hookah2.jpg";
import axios from 'axios';
import { useEffect  , useState} from "react";
import { backend_url } from "../App";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    axios.get(`${backend_url}/api/products`)
      .then(response => {
        setProducts(response.data); // Set the fetched data to state
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  return (
    <div className="w-full py-5 px-5 mb-5 mt-5">
      <h1 className="w-full text-center md:text-4xl text-2xl font-bold text-primary mb-4">
        Our Services
      </h1>
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
      {products.map((product, index) => (
        <Link to={{
          pathname: "/product",
        }}
        state={{ product }}
        key={index}>
          <div
            className="max-w-[240px] max-h-[370px] min-h-[370px] min-w-[240px] flex flex-col rounded-xl bg-black text-white cursor-pointer hover:scale-105"
            data-aos="zoom-in-down"
          >
            <div>
              <img
                src={`${backend_url}${product.product_image}` || HookahImg}
                alt={product.product_name}
                className="object-contain aspect-square rounded-t-xl"
              />
            </div>
            <div className="flex flex-col py-3 px-3 pb-10">
              <h1 className="font-bold text-lg max-h-[58px] min-h-[58px] overflow-hidden text-ellipsis line-clamp-2">
                {product.product_name}
              </h1>
              <p className="mt-[14px]">
                Rs.<span className="line-through ml-2 mr-2">{product.product_original_price}</span> <span id="price">{product.product_offer_price}</span>
              </p>
            </div>
          </div>
        </Link>
      ))}    
      </div>
    </div>
  );
}

export default Products;
