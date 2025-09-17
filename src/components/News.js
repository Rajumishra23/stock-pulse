import React from "react";
import { motion } from "framer-motion";
import { FaFileAlt } from "react-icons/fa";

const newsItems = [
  {
    date: "10 September 2015",
    title: "Jindal Stainless supplies stainless...",
    summary:
      "Jindal Stainless, India’s largest stainless steel manufacturer, has supplied premium 30TN austenitic stainless steel for the Bengaluru Metro Phase 2 project, reinforcing its role in the country’s...",
  },
  {
    date: "10 September 2015",
    title: "Hero MotoCorp passes on full GST 2...",
    summary:
      "Hero MotoCorp, the world’s largest two-wheeler manufacturer, has announced that it will pass on the complete benefit of the government’s GST 2.0 reforms to its customers starting September...",
  },
  {
    date: "10 September 2015",
    title: "Kings Infra hails EU approval of 10...",
    summary:
      "Kings Infra Ventures Ltd. has welcomed the European Union’s decision to approve 102 additional seafood processing units from India, calling it a landmark development that will boost e...",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, when: "beforeChildren" },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
};

const StockNews = () => {
  return (
    <section className="bg-white border-t border-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-800 inline-block border-b-4 border-gray-500 pb-1">
            Stock News
          </h2>
        </motion.div>

        {/* Content: news list + sidebar CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="grid grid-cols-1 lg:grid-cols-4 gap-6"
        >
          {/* News cards (span 3 cols on desktop) */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item, idx) => (
              <motion.article
                key={idx}
                variants={fadeUp}
                className="bg-white rounded-md shadow p-4 border border-gray-100 hover:shadow-md transition"
              >
                <p className="text-xs text-gray-500 mb-2">{item.date}</p>
                <h3 className="text-base font-semibold text-gray-800 leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.summary}
                </p>
              </motion.article>
            ))}
          </div>

         
        </motion.div>
      </div>
    </section>
  );
};

export default StockNews;