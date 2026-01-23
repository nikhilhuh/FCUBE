import React, { useEffect } from "react";
import HeroImg from "../assets/herohookah.png";

const Hero = ({ scrollToProducts }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen overflow-x-hidden bg-gradient-to-r from-[#1e1b28] via-[#332544] to-[#3f1f38] px-4 py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[665px] gap-10">
          {/* Text content */}
          <div className="text-white space-y-6 md:space-y-10 mt-10 md:mt-0 md:pl-8">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-wide text-shadow-lg"
            >
              Elevate Your Event with <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-pink-500 via-red-400 to-yellow-300 bg-clip-text text-transparent">
                Luxurious Hookah Experiences!
              </span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-sm sm:text-base md:text-lg text-gray-200"
            >
              Immerse your guests in a rich sensory journey with our{" "}
              <strong>premium hookah catering</strong>. Featuring{" "}
              <span className="text-pink-300 font-semibold">fresh fruit chillums</span>{" "}
              and an exotic selection of molasses, we create relaxing, flavorful moments
              tailored for every celebration.
            </p>

            <button
              data-aos="fade-up"
              data-aos-delay="500"
              onClick={scrollToProducts}
              className="px-6 py-3 rounded-lg bg-white text-black font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-300 hover:text-white hover:shadow-xl"
            >
              Order Now
            </button>
          </div>

          {/* Image content */}
          <div
            data-aos="zoom-in"
            className="relative flex justify-center items-center mt-10 md:mt-0"
          >
            <div className="absolute w-[280px] md:w-[420px] h-[280px] md:h-[420px] bg-gradient-to-br from-pink-500/30 to-purple-500/30 blur-3xl rounded-full -z-10" />
            <img
              src={HeroImg}
              alt="Luxurious Hookah"
              className="w-[250px] md:w-[400px] drop-shadow-2xl z-10"
            />
            <h1 className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 text-[60px] md:text-[80px] xl:text-[120px] text-white uppercase font-bold opacity-10 tracking-widest pointer-events-none">
              Hookah
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
