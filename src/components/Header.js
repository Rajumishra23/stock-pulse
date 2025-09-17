import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaTimes,
  FaSearch,
  FaChartLine,
  FaPiggyBank,
  FaShieldAlt,
  FaFileAlt,
} from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["/stock1.webp", "/stock.webp"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      {/* 🔹 Navbar - Always Visible */}
      <header className="border-b border-gray-200 bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto py-3 px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col leading-tight">
            <h1 className="text-2xl font-extrabold text-blue-800 tracking-wide">
              stock<span className="text-teal-500">plus</span>
            </h1>
            <p className="text-sm text-gray-500 tracking-wide">easy way to invest</p>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-800">
            <NavLink
              to="/"
              className="px-3 py-1 rounded-md border border-gray-300 hover:bg-blue-800 hover:text-white transition"
            >
              HOME
            </NavLink>
            <NavLink
              to="/about"
              className="px-3 py-1 rounded-md border border-gray-300 hover:bg-blue-800 hover:text-white transition"
            >
              ABOUT US
            </NavLink>
            <NavLink
              to="/productservice"
              className="px-3 py-1 rounded-md border border-gray-300 hover:bg-blue-800 hover:text-white transition"
            >
              PRODUCT & SERVICES
            </NavLink>
            <NavLink
              to="/markets"
              className="px-3 py-1 rounded-md border border-gray-300 hover:bg-blue-800 hover:text-white transition"
            >
              MARKETS
            </NavLink>
            <NavLink
              to="/research"
              className="px-3 py-1 rounded-md border border-gray-300 hover:bg-blue-800 hover:text-white transition"
            >
              RESEARCH
            </NavLink>
            <NavLink
              to="/login"
              className="px-3 py-1 rounded-md border border-gray-300 text-green-600 hover:bg-green-500 hover:text-white transition"
            >
              LOGIN
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded border border-gray-300 text-gray-800"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <div
              className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-4 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="self-end mb-4 text-gray-600"
                onClick={() => setMenuOpen(false)}
              >
                <FaTimes size={20} />
              </button>
              <nav className="flex flex-col gap-2 text-sm font-medium text-blue-500">
                <NavLink to="/" onClick={() => setMenuOpen(false)}>
                  HOME
                </NavLink>
                <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                  ABOUT US
                </NavLink>
                <NavLink to="/productservice" onClick={() => setMenuOpen(false)}>
                  PRODUCT & SERVICES
                </NavLink>
                <NavLink to="/markets" onClick={() => setMenuOpen(false)}>
                  MARKETS
                </NavLink>
                <NavLink to="/research" onClick={() => setMenuOpen(false)}>
                  RESEARCH
                </NavLink>
                <NavLink to="/login" onClick={() => setMenuOpen(false)}>
                  LOGIN
                </NavLink>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* 🔹 Hero Section - Only on Home Page */}
      {isHome && (
        <>
          <div className="relative h-[380px] md:h-[600px] overflow-hidden mt-16">
            {slides.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
                style={{ backgroundImage: `url(${src})` }}
              />
            ))}
            <div className="absolute inset-0 bg-black/40"></div>
           <div className="relative z-10 max-w-7xl mx-auto px-4 mt-24 md:mt-40 text-white">
  <h1 className="text-2xl md:text-4xl font-extrabold max-w-2xl leading-snug">
    Investment Today is a Source of Income Tomorrow
  </h1>
  <p className="mt-3 max-w-xl text-base md:text-lg">
    Easy way to invest — grow your wealth with smart, secure, and reliable strategies.
  </p>
  <div className="mt-5 flex flex-wrap gap-3">
    <NavLink
      to="/open-account"
      className="px-4 py-2 bg-amber-500 text-black font-semibold rounded-md shadow hover:bg-amber-600 hover:text-white transition text-sm md:text-base"
    >
      OPEN AN ACCOUNT
    </NavLink>
    <NavLink
      to="/login"
      className="px-4 py-2 border border-white text-white rounded-md hover:bg-white hover:text-black transition text-sm md:text-base"
    >
      LOGIN
    </NavLink>
  </div>
            </div>
          </div>

         {/* Icon Strip */}
<div className="bg-white shadow-sm border-t border-gray-200">
  <div className="max-w-7xl mx-auto px-0 sm:px-4 py-6 md:py-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 text-center">
    <div className="flex flex-col items-center gap-3 p-6 border-r border-gray-300 hover:scale-105 hover:shadow-md hover:bg-gray-50 cursor-pointer">
      <FaSearch className="text-blue-600 text-3xl" />
      <span className="text-sm md:text-base font-medium text-gray-800">RESEARCH</span>
    </div>
    <div className="flex flex-col items-center gap-3 p-6 border-r border-gray-300 hover:scale-105 hover:shadow-md hover:bg-gray-50 cursor-pointer">
      <FaChartLine className="text-green-600 text-3xl" />
      <span className="text-sm md:text-base font-medium text-gray-800">EQUITY</span>
    </div>
    <div className="flex flex-col items-center gap-3 p-6 border-r border-gray-300 hover:scale-105 hover:shadow-md hover:bg-gray-50 cursor-pointer">
      <FaPiggyBank className="text-pink-500 text-3xl" />
      <span className="text-sm md:text-base font-medium text-gray-800">MUTUAL FUNDS</span>
    </div>
    <div className="flex flex-col items-center gap-3 p-6 border-r border-gray-300 hover:scale-105 hover:shadow-md hover:bg-gray-50 cursor-pointer">
      <FaShieldAlt className="text-yellow-500 text-3xl" />
      <span className="text-sm md:text-base font-medium text-gray-800">INSURANCE</span>
    </div>
    <div className="flex flex-col items-center gap-3 p-6 hover:scale-105 hover:shadow-md hover:bg-gray-50 cursor-pointer">
      <FaFileAlt className="text-purple-600 text-3xl" />
      <span className="text-sm md:text-base font-medium text-gray-800">IPO / CORPORATE BOND</span>
    </div>
  </div>
</div>

        </>
      )}
    </>
  );
};

export default Header;
