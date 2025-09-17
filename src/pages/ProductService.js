// src/pages/ProductService.jsx
import React from "react";
import { motion } from "framer-motion"; // ✅ Import Framer Motion

const ProductService = () => {
  return (
    <div>
      {/* Background Banner Image with Overlay */}
      <div
        className="relative w-full h-[250px] md:h-[200px] bg-cover bg-center"
        style={{
          backgroundImage: `url('product.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Centered Text */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
          >
            Product <span className="font-extrabold">& Services</span>
          </motion.h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 text-gray-800">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-4xl font-extrabold text-center text-blue-500 mb-6"
        >
          Our Offerings
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm md:text-base text-gray-800 text-center max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We provide a wide range of products and services tailored to your needs.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cards */}
          {[
            {
              title: "Advice Based Equity Broking",
              desc: "Our Equity Advisory has qualified stock brokers trained to give the right advice. After evaluating your portfolio and risk appetite, they recommend a portfolio that meets your investment goals.",
              bg: "bg-gray-100",
            },
            {
              title: "E-broking",
              desc: "Execute your own trading and delivery calls on our online trading platform. Place your orders anytime, on the go, via mobile or laptop.",
              bg: "bg-gray-200",
            },
            {
              title: "Advice Based Mutual Fund",
              desc: "Investing in a Mutual Fund is an excellent way of diversifying risk as well as building your portfolio.",
              bg: "bg-cyan-100",
            },
            {
              title: "Stock SIP",
              desc: "Stock SIP helps you invest systematically in a set of chosen stocks to accumulate wealth, just like mutual fund SIPs but directly in stocks.",
              bg: "bg-cyan-100",
            },
            {
              title: "Insurance",
              desc: "Secure your family’s well-being with insurance products like Term Plans, Mediclaim, and ULIP Plans through our associates.",
              bg: "bg-gray-100",
            },
            {
              title: "Offer for Sale (OFS)",
              desc: "We provide services to participate in bidding of shares on an exchange-based mechanism seamlessly.",
              bg: "bg-gray-200",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`${item.bg} p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer`}
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductService;
