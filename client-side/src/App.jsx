import React, { useState, useRef, useEffect } from "react";
import Hero from "./component/Hero.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./component/Footer.jsx";
import Navbar from "./component/Navbar.jsx";
import Products from "./component/Products.jsx";
import ContactUs from "./component/ContactUs.jsx";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./component/ProductPage.jsx";
import Cart from "./component/Cart.jsx";
import CheckoutForm from "./component/CheckoutForm.jsx";
import PageNotFound from "./component/PageNotFound.jsx";

// This will get the environment variable in React
export const backend_url = "http://localhost:3000";

const App = () => {
  // Create refs for Hero and Products sections
  const heroRef = useRef(null);
  const productsRef = useRef(null);

  const [sidebar, setSidebar] = useState(false);

  // Function to scroll to a specific section
  const scrollToSection = (sectionRef) => {
    if(sectionRef.current){
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: "smooth",
    });
  }
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      once: true, // Set to true to animate only on first scroll
    });
    AOS.refresh();

  }, []);

  return (
    <div>
      <Navbar
        sidebar={sidebar}
        setSidebar={setSidebar}
        scrollToHero={() => scrollToSection(heroRef)}
        scrollToProducts={() => scrollToSection(productsRef)}
      />
      <Routes>
        {/* Home route with Hero and Products sections */}
        <Route
          path="/"
          element={
            <div>
              <div ref={heroRef}>
                <Hero scrollToProducts={() => scrollToSection(productsRef)} />
              </div>
              <div ref={productsRef}>
                <Products />
              </div>
            </div>
          }
        />
        <Route
          path="/home"
          element={
            <div>
              <div ref={heroRef}>
                <Hero scrollToProducts={() => scrollToSection(productsRef)} />
              </div>
              <div ref={productsRef}>
                <Products />
              </div>
            </div>
          }
        />
        
        {/* Contact route with ContactUs component */}
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={ <Cart />} />
        <Route path="/cart/checkout" element={<CheckoutForm />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
