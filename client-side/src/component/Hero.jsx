import React from "react";
import HeroImg from "../assets/herohookah.png";
import { useEffect } from "react";

const Hero = ({ scrollToProducts }) => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="px-4 min-h-screen max-w-full bg-gradient-to-r from-primary to-secondary w-screen shadow-md">

      <div className="container md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-items-center min-h-[665px]">
          {/* text-content-section */}
          <div className="text-white mt-[100px] md:mt-[20vh] p-2 space-y-4 lg:space-y-10 md:pl-14">
            <h1
              data-aos="fade-up"
              className="text-2xl md:text-5xl font-bold uppercase text-shadow"
            >
              Elevate Your Event with Luxurious Hookah Experiences!
            </h1>
            <p data-aos="fade-up" data-aos-delay="300" className="text-sm">
              <span className="lg:block hidden">
                Immerse your guests in an unforgettable sensory experience with
                our premium hookah catering service.
              </span>
              We specialize in crafting luxurious hookahs that feature fresh
              fruit chillums and an array of exotic molasses flavors to suit
              every palate.
              <span className="lg:block hidden">
                From the rich sweetness of tropical fruits to the earthy
                undertones of rare, artisanal molasses, each session is a
                journey into flavor and relaxation.
              </span>
              Relax, savor, and let us bring the art of hookah to your
              celebration!
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black hover:font-bold"
              onClick={scrollToProducts}
            >
              Order Now
            </button>
          </div>
          {/* image section */}
          <div
            className="text-center md:mt-[25vh] relative"
            data-aos="zoom-in"
          >
            <img
              className="img-shadow relative z-10 w-[250px] md:w-[400px]"
              src={HeroImg}
              alt=""
            />
            <h1 className="text-[60px] md:text-[80px] xl:text-[120px] text-white uppercase absolute bottom-0 z-0 font-bold mt-4 text-shadow">
              hookah
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
