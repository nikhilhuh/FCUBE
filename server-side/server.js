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
// Middleware for parsing JSON request bodies
app.use(express.json());

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

// Serve product images
app.use("/images", express.static(path.join(__dirname, "images")));

// Endpoint to get list of products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// sending sms when ordered
require("dotenv").config();
const accountSID = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
// Split the comma-separated phone numbers into an array
const toPhoneNumber = process.env.PHONE_NUMBER.split(",").map((number) =>
  number.trim()
);
const client = require("twilio")(accountSID, authToken);
let orderNumber = 0;
// Start the daily reset function when the server starts
resetOrderNumberDaily();

// Function to reset order number at midnight
function resetOrderNumberDaily() {
  const now = new Date();
  const targetMidnight = new Date(now);
  targetMidnight.setUTCHours(18, 30, 0, 0); // Midnight IST (UTC +5:30)

  if (now > targetMidnight) {
    targetMidnight.setUTCDate(targetMidnight.getUTCDate() + 1); // Set to next day's midnight if past
  }

  const millisUntilMidnight = targetMidnight.getTime() - now.getTime();

  setTimeout(() => {
    orderNumber = 0; // Reset order number
    resetOrderNumberDaily(); // Schedule the next reset
  }, millisUntilMidnight);
}


function sendSMS(message) {
  // Return the promise to ensure we can wait for completion
  return Promise.all(
    toPhoneNumber.map((number) => {
      // Return the promise created by client.messages.create
      return client.messages.create({
        body: message,
        from: fromPhoneNumber,
        to: number,
      });
    })
  );
}

// Route to handle order SMS sending
app.post("/api/order", (req, res) => {
  const {
    name,
    phone,
    pinCode,
    orderaddress,
    selectedCity,
    cartItems,
    finalPrice,
    email,
  } = req.body;

  // Get current date and time
  const now = new Date();
  const formattedDate = now.toLocaleDateString('en-IN');
  const formattedTime = now.toLocaleTimeString('en-IN', { hour12: true });

  let message = `New order received at
  \n${formattedTime} ${formattedDate}
  \nfrom
  \nName: ${name}
  \nOrder Number: ${++orderNumber}
  \nPhone: ${phone}
  \nPin Code: ${pinCode}
  \nAddress: ${orderaddress}
  \nCity: ${selectedCity}
  \nEmail: ${email}
  \nTotal Price: ${finalPrice}
  \nProducts: \n`;

  // Iterating through the cartItems array to display product details
  cartItems.forEach((item) => {
    message += `Product Name: ${item.product_name}
    Hours: ${item.quantity}
    Selected Fruit: ${item.selectedFruit}
    Selected Flavours: ${item.selectedFlavours}
    \n`;
  });

  // Call sendSMS and handle promise response
  sendSMS(message)
    .then((response) => {
      console.log("Message sent");
      // Respond to frontend after the message is sent successfully
      res.status(200).json({ message: "Order placed successfully!" });
    })
    .catch((error) => {
      console.error("Error sending message:", error);
      // Handle error and respond to frontend
      res
        .status(500)
        .json({ message: "Failed to place order. Please try again." });
    });
});

// Route to handle contact SMS sending
app.post("/api/contact", (req, res) => {
  const { name, subject, phoneNumber, contact_message } = req.body;

   // Get current date and time
   const now = new Date();
   const formattedDate = now.toLocaleDateString('en-IN');
   const formattedTime = now.toLocaleTimeString('en-IN', { hour12: true });

  let message = `Contact Request at
  \n${formattedTime} ${formattedDate} 
  \nfrom
  \nName: ${name}
  \nPhone: ${phoneNumber}
  \nSubject: ${subject}
  \nMessage: ${contact_message}`;

  // Call sendSMS and handle promise response
  sendSMS(message)
    .then((response) => {
      console.log("Message sent");
      // Respond to frontend after the message is sent successfully
      res.status(200).json({ message: "Contact Request Sent Successfully!" });
    })
    .catch((error) => {
      console.error("Error sending message:", error);
      // Handle error and respond to frontend
      res
        .status(500)
        .json({ message: "Failed to send request. Please try again." });
    });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
