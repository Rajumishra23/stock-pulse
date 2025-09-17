import React from "react";

const Research = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/research-bg.jpg')", // apna bg image path
      }}
    >
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-blue-900/100"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-12">
        
        {/* 🔹 Top Center Text */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 border-b-4 border-gray-400 inline-block pb-1">
            Research Analysis
          </h2>
          <p className="mb-4 leading-relaxed">
            We at StockPlus Financial Services believe in providing independent research for clients to make investment decisions, with strict emphasis on self-regulation, avoiding possible conflict of interest in objectivity. StockPlus Broking research team is backed by a strong pool of research analysts.
          </p>
          <p className="leading-relaxed">
            For StockPlus Financial Services, every client, big or small, is precious for us and we make sure that you don’t miss out on any profitable opportunity in the market as long as it remains open.
          </p>
        </div>

        {/* 🔹 Images Row */}
        <div className="flex flex-col md:flex-row md:justify-end gap-4">
          <img
            src="/rupees.webp"
            alt="Rupee Symbol"
            className="rounded-lg shadow-lg object-cover w-full md:w-64 h-48"
          />
          <img
            src="/rupees1.webp"
            alt="Businessman"
            className="rounded-lg shadow-lg object-cover w-full md:w-64 h-48"
          />
        </div>

      </div>
    </section>
  );
};

export default Research;