import { Link } from "react-router-dom";

// Product Information
const products = [
  {
    product_name: "FCUBE Lantern Golden",
    product_info:
      "The FCUBE Lantern Golden Hookah showcases an elegant lantern-shaped design in a striking golden finish, crafted from high-quality materials. Its advanced filtration system ensures a smooth and flavorful smoking experience, perfect for both style and performance.",
    product_original_price: "1427.14",
    product_offer_price: "999.01",
    product_image: "/images/1.jpg",
  },
  {
    product_name: "FCUBE Thunder Golden",
    product_info:
      "The FCUBE Thunder Golden Hookah features a sleek, golden design with premium stainless steel construction for durability and a luxurious aesthetic. It offers smooth smoke flow with advanced filtration, making it ideal for a refined, high-quality hookah experience.",
    product_original_price: "1427.14",
    product_offer_price: "999.01",
    product_image: "/images/2.jpg",
  },
  {
    product_name: "FCUBE Diamond Golden",
    product_info:
      "The FCUBE Diamond Golden Hookah boasts a sophisticated diamond-cut design in a luxurious golden finish, combining style with durability. Designed for optimal airflow, it delivers a smooth and enhanced smoking experience for hookah enthusiasts.",
    product_original_price: "1427.14",
    product_offer_price: "999.01",
    product_image: "/images/3.jpg",
  },
  {
    product_name: "FCUBE Fly Golden",
    product_info:
      "The FCUBE Fly Golden Hookah features a sleek, minimalist design with a shimmering golden finish, crafted for both elegance and portability. Its high-performance setup provides smooth draws and easy handling, perfect for a premium hookah experience on the go.",
    product_original_price: "1427.14",
    product_offer_price: "999.01",
    product_image: "/images/4.jpg",
  },
  {
    product_name: "FCUBE World Cup Silver",
    product_info:
      "The FCUBE World Cup Silver Golden Hookah combines a unique trophy-inspired design with a striking silver and golden finish, symbolizing elegance and celebration. Built with quality materials, it offers exceptional smoke flow and an eye-catching look, ideal for both collectors and enthusiasts.",
    product_original_price: "1427.14",
    product_offer_price: "999.01",
    product_image: "/images/5.jpg",
  },
];

function Products() {
  return (
    <section className="w-full px-5 py-10 bg-[#1e1b28] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-10 bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
          Our Premium Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
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
                  src={product.product_image}
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
