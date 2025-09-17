import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Bhushan Sahane",
    image: "/client1.png", // apna image path
    text: `I have worked with my advisor for almost 5 years. His style has been refreshing in that he creates a simple and straightforward approach that is reassuring. Whether it is direct equity or Mutual Funds investments, he has made sensible and pragmatic decisions on investments that have yielded good results.

I enjoy regular and informed dialogue with the advisor at StockPlus Broking and Advisory, who always keeps me up to date with market dynamics for Direct equity and ensures that I have looked at all the available information before we agree to purchase/sell. Like the care and attention I receive, the services are really nice.`,
  },
  {
    name: "Anjali Mehta",
    image: "/girl.png",
    text: `The team at StockPlus has been instrumental in guiding my investment journey. Their research-backed advice and transparent approach have helped me achieve consistent returns.`,
  
},
  {
    name: "Rohit Sharma",
    image: "/client3.png",
    text: `Professional, knowledgeable, and always approachable. They take the time to explain market trends and ensure I make informed decisions.`,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <section className="bg-yellow-50 border-t border-gray-200 py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-800 inline-block border-b-4 border-amber-500 pb-1">
            Testimonials
          </h2>
        </motion.div>

        {/* Slider */}
        <Slider {...settings}>
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="px-4"
            >
              <div className="bg-gray-50 rounded-lg shadow p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-4 text-left">
                {/* Left: Image */}
                <div className="flex-shrink-0">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>
                {/* Right: Text */}
                <div>
                  <p className="text-gray-700 bg-white text-sm md:text-base leading-relaxed whitespace-pre-line">
                    “{t.text}”
                  </p>
                  <p className="mt-4 font-semibold text-blue-800">- {t.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;