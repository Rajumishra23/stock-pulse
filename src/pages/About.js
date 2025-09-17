// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion"; // ✅ Import Framer Motion

const About = () => {
  return (
    <div>
      {/* Background Banner Image with Overlay */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full h-[250px] md:h-[200px] bg-cover bg-center"
        style={{
          backgroundImage: `url('/aboutbanner.webp')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Centered Text */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
          >
            About <span className="font-extrabold">Us</span>
          </motion.h1>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto px-6 py-12 space-y-8 text-center"
      >
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Incorporated in the year <span className="font-semibold">1998</span>,{" "}
          <span className="font-semibold">StockPlus Financial Services</span>{" "}
          renders financial services. Our products and services across various
          asset classes like equity, IPOs, debt instruments, mutual funds,
          insurance planning, retirement planning, financial planning & Equity
          Broking make us a one-stop investment avenue for our clients. Over
          these two decades in the financial industry, we have transformed from
          an equity sub-broking firm to a complete financial services firm.
        </p>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Serving over <span className="font-bold">1500+ clients</span>, our
          primary focus is to cultivate long-term investment habits in our
          clients to maximize their wealth. Keeping in mind the{" "}
          <span className="italic font-semibold">‘client first approach’</span>,
          the interest of our clients is our topmost priority.
        </p>
      </motion.div>

      {/* Philosophy & Management Section */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Our Philosophy (Blue Background) */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-blue-900 text-white p-10 flex flex-col justify-center space-y-6"
        >
          <h2 className="text-3xl font-bold mb-2">Our Philosophy</h2>
          <div className="w-16 h-1 bg-white mb-4"></div>
          <p>We truly believe and try to assimilate our clients that:</p>
          <ul className="space-y-3 list-disc list-inside text-gray-200">
            <li>All that matters is how and what you invest in life.</li>
            <li>
              Investing is not about RETURNS, it is about knowing the Risk you
              take to make potential returns.
            </li>
            <li>
              For Wealth Creation, it is more important to put emphasis on “WHAT
              NOT TO DO”, rather than what to do.
            </li>
            <li>
              Financial planning helps people to open their mind and heart to
              what they want in life.
            </li>
            <li>
              Wealth creation has no real meaning without creation of a happy
              mind.
            </li>
          </ul>
          <p>
            We nurture our clients to develop a strong belief that Long Term
            Equity – whether direct investments or Indirect, through Mutual
            Funds – outperforms all the Asset Classes.
          </p>
        </motion.div>

        {/* The Management (Background Image + Black Overlay) */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative bg-cover bg-center pt-1 pb-10 px-10 text-white flex flex-col justify-center"
          style={{
            backgroundImage: `url('/management-bg.webp')`,
          }}
        >
          <div className="absolute inset-0 bg-black/90"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl font-bold">The Management</h2>
            <div className="w-16 h-1 bg-blue-400 mb-4"></div>
            <p>
              We have established a core team of employees, who drive the
              day-to-day aspects of broking, compliance and back-end operations
              with utmost care and to the highest level of client satisfaction.
            </p>
            <p>
              The core team is led by{" "}
              <span className="font-bold">Mr. Bipin M. Savla</span>, the owner
              of StockPlus Financial himself. Being a CFA & CFP, he has all the
              knowledge and the required skill set to be an all-round investment
              advisor and a financial planner. Being in the financial sector for
              over 30 years gives him a substantial leverage over the other
              players in the industry.
            </p>
            <p>
              <span className="font-bold">Mr. Bipin</span>, with his team,
              conducts in-depth study of clients’ financial circumstances, risk
              profile and future goals, assists clients in making informed
              decisions and review investments on a regular basis, which helps
              clients to pursue their long-term goals.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Mission / Core-values Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-16 bg-white"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-2">
            Mission / Core-values
          </h2>
          <div className="w-20 h-1 bg-gray-500 mx-auto mb-12"></div>

          {/* Mission */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row md:items-center md:text-left gap-10 mb-12"
          >
            <div className="flex-1 flex justify-center md:justify-start">
              <img
                src="/icon2.webp"
                alt="Mission Icon"
                className="w-28 h-28"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To emerge as the most preferred financial service provider in
                the country, assisting our retail and institutional clients to
                achieve their financial goals.
              </p>
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold">Core Values</h3>
            <p className="text-gray-600">
              Our core values are at heart of everything we do.
            </p>

            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
              <ul className="text-left space-y-4 text-gray-700 flex-1">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">▪</span> We strongly
                  believe in ‘client first approach’, our clients’ interest is
                  our topmost priority.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">▪</span> We act with
                  integrity at all times.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">▪</span> We act
                  professionally in everything we do.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">▪</span> We treat
                  everyone fairly with respect.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">▪</span> We are
                  enthusiastic and are always willing to help others.
                </li>
              </ul>

              <div className="flex flex-col items-center flex-1 text-center space-y-4">
                <img
                  src="/icon1.webp"
                  alt="Values Icon"
                  className="w-24 h-24"
                />
                <blockquote className="italic text-gray-700 text-lg">
                  “If you compromise on your core values, you go nowhere.”
                </blockquote>
                <span className="font-semibold text-gray-600">
                  – Roy T. Bennett
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
