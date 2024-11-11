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
    product_name: "FCUBE Hookah Collection 1",
    product_info: "FCUBE Hookah Collection 1 etc. etc..",
    product_original_price: "1427.14",
    product_offer_price: "999.01",
    product_image: "/images/1.jpg",
  },
  {
    product_name: "FCUBE Hookah Collection 2",
    product_info: "FCUBE Hookah Collection 2 etc. etc..",
    product_original_price: "1427.14",
    product_offer_price: "999.01",
    product_image: "/images/2.jpg",
  },
  {
    product_name: "FCUBE Hookah Collection 3",
    product_info: "FCUBE Hookah Collection 3 etc. etc..",
    product_original_price: "1427.14",
    product_offer_price: "999.01",
    product_image: "/images/3.jpg",
  },
  {
    product_name: "FCUBE Hookah Collection 4",
    product_info: "FCUBE Hookah Collection 4 etc. etc..",
    product_original_price: "1427.14",
    product_offer_price: "999.01",
    product_image: "/images/4.jpg",
  },
  {
    product_name: "FCUBE Hookah Collection 5",
    product_info: "FCUBE Hookah Collection 5 etc. etc..",
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
require('dotenv').config();
const accountSID = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
// Split the comma-separated phone numbers into an array
const toPhoneNumber = process.env.PHONE_NUMBER.split(',').map(number => number.trim());
const client = require('twilio')(accountSID, authToken);
let orderNumber = 0
// Start the daily reset function when the server starts
resetOrderNumberDaily();

// Function to reset order number at midnight
function resetOrderNumberDaily() {
  const now = new Date();
  const millisUntilMidnight = 
    new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime() - now.getTime();

  setTimeout(() => {
    orderNumber = 0; // Reset order number
    resetOrderNumberDaily(); // Schedule the next reset
  }, millisUntilMidnight);
}

function sendSMS(message) {
  // Return the promise to ensure we can wait for completion
  return Promise.all(
    toPhoneNumber.map(number => {
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
app.post('/api/order', (req, res) => {
  const { name, phone, pinCode, orderaddress,selectedCity, cartItems, finalPrice,email } = req.body;

  // Get current date and time
  const now = new Date();
  const formattedDate = now.toLocaleDateString();
  const formattedTime = now.toLocaleTimeString();

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
  cartItems.forEach(item => {
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
      res.status(200).json({ message: 'Order placed successfully!' });
    })
    .catch((error) => {
      console.error("Error sending message:", error);
      // Handle error and respond to frontend
      res.status(500).json({ message: 'Failed to place order. Please try again.' });
    });
});

// Route to handle contact SMS sending
app.post('/api/contact', (req, res) => {
  const { name,
    subject,
    phoneNumber,
    contact_message,} = req.body;

  let message = `Contact Request from
  \nName: ${name}
  \nPhone: ${phoneNumber}
  \nSubject: ${subject}
  \nMessage: ${contact_message}`

  // Call sendSMS and handle promise response
  sendSMS(message)
    .then((response) => {
      console.log("Message sent");
      // Respond to frontend after the message is sent successfully
      res.status(200).json({ message: 'Contact Request Sent Successfully!' });
    })
    .catch((error) => {
      console.error("Error sending message:", error);
      // Handle error and respond to frontend
      res.status(500).json({ message: 'Failed to send request. Please try again.' });
    });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
