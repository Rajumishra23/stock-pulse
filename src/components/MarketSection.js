import React from "react";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const MarketSection = () => {
  return (
    <motion.div
      className="bg-yellow-50 border-t border-gray-200 py-12 md:py-16"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* 🔹 Heading */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-2xl md:text-4xl font-extrabold text-blue-800 inline-block border-b-4 border-gray-500 pb-1">
            Market Tracker
          </h2>
          <p className="mt-3 text-gray-600 font-medium md:text-lg">
            StockPlus Financial Services
          </p>
        </motion.div>

        {/* 🔹 Top Row: Search */}
        <motion.div
          className="flex justify-center mb-8 md:mb-12"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center bg-white rounded-lg shadow-md border border-gray-300 px-4 py-3 w-full sm:w-2/3 md:w-1/3">
            <input
              type="text"
              placeholder="Search Company Name"
              className="flex-1 outline-none text-sm md:text-base text-center"
            />
            <FaSearch className="text-gray-500 ml-3 text-lg md:text-xl" />
          </div>
        </motion.div>

        {/* 🔹 Market Data Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
        >
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <h3 className="text-sm md:text-base font-bold text-blue-800 mb-3">
              BSE INDICES
            </h3>
            <p className="text-xl md:text-2xl text-gray-800">SENSEX</p>
            <p className="text-lg md:text-xl font-semibold text-green-600">81,101.32</p>
            <p className="text-xs md:text-sm text-green-600">+314.2 (+0.39%)</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <h3 className="text-sm md:text-base font-bold text-blue-800 mb-3">
              NSE INDICES
            </h3>
            <p className="text-xl md:text-2xl text-gray-800">NSE INDEX</p>
            <p className="text-lg md:text-xl font-semibold text-green-600">24,868.6</p>
            <p className="text-xs md:text-sm text-green-600">+95.6 (+0.39%)</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <h3 className="text-sm md:text-base font-bold text-blue-800 mb-3">
              CURRENCY
            </h3>
            <p className="text-xl md:text-2xl text-gray-800">GBPINR</p>
            <p className="text-lg md:text-xl font-semibold text-green-600">118.4344</p>
            <p className="text-xs md:text-sm text-green-600">+1.85 (+1.59%)</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <h3 className="text-sm md:text-base font-bold text-blue-800 mb-3">
              WORLD INDICES
            </h3>
            <p className="text-xl md:text-2xl text-gray-800">BSE</p>
            <p className="text-lg md:text-xl font-semibold text-green-600">81,101.32</p>
            <p className="text-xs md:text-sm text-green-600">+314.2 (+0.39%)</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MarketSection;
