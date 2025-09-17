import React from "react";

const About = () => {
  return (
    // 🔹 About Us Section
    <div className="bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
          About Us
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Established in 1998, StockPlus Financial Services has grown from an equity sub-broking firm into a complete wealth management company, integrating all financial products under one roof.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Over the years, we have transitioned from pure broking to an advisory-based financial planning entity, focusing on transparency, stringent risk management, and a client-first approach.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Recognized for our insight and advice, we continue to deliver trusted solutions that help our clients achieve their financial goals.
        </p>
        <a
          href="#read-more"
          className="inline-block px-6 py-2 bg-blue-800 text-white font-medium rounded-md shadow hover:bg-blue-900 transition"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default About;