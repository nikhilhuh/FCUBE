const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 3000;

// Configure CORS
const corsOptions = {
  origin: "*", // Replace with your frontend URL for security in production
};
app.use(cors(corsOptions));

// Product Information
const products = [
  {
    product_name: "FCUBE Hookah Collection 1",
    product_info: "FCUBE Hookah Collection 1 etc. etc..",
    product_original_price: "1299.00",
    product_offer_price: "999.00",
    product_image: "/images/1.jpg",
  },
  {
    product_name: "FCUBE Hookah Collection 2",
    product_info: "FCUBE Hookah Collection 2 etc. etc..",
    product_original_price: "1299.00",
    product_offer_price: "999.00",
    product_image: "/images/2.jpg",
  },
  {
    product_name: "FCUBE Hookah Collection 3",
    product_info: "FCUBE Hookah Collection 3 etc. etc..",
    product_original_price: "1299.00",
    product_offer_price: "999.00",
    product_image: "/images/3.jpg",
  },
  {
    product_name: "FCUBE Hookah Collection 4",
    product_info: "FCUBE Hookah Collection 4 etc. etc..",
    product_original_price: "1299.00",
    product_offer_price: "999.00",
    product_image: "/images/4.jpg",
  },
  {
    product_name: "FCUBE Hookah Collection 5",
    product_info: "FCUBE Hookah Collection 5 etc. etc..",
    product_original_price: "1299.00",
    product_offer_price: "999.00",
    product_image: "/images/5.jpg",
  },
  {
    product_name: "FCUBE Hookah Collection 6",
    product_info: "FCUBE Hookah Collection 6 etc. etc..",
    product_original_price: "1299.00",
    product_offer_price: "999.00",
    product_image: "/images/1.jpg",
  },
  {
    product_name: "FCUBE Hookah Collection 7",
    product_info: "FCUBE Hookah Collection 7 etc. etc..",
    product_original_price: "1299.00",
    product_offer_price: "999.00",
    product_image: "/images/4.jpg",
  },
  {
    product_name: "FCUBE Hookah Collection 8",
    product_info: "FCUBE Hookah Collection 8 etc. etc..",
    product_original_price: "1299.00",
    product_offer_price: "999.00",
    product_image: "/images/2.jpg",
  },
  {
    product_name: "FCUBE Hookah Collection 9",
    product_info: "FCUBE Hookah Collection 9 etc. etc..",
    product_original_price: "1299.00",
    product_offer_price: "999.00",
    product_image: "/images/5.jpg",
  },
];

// Serve product images
app.use("/images", express.static(path.join(__dirname, "images")));

// Endpoint to get list of products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
