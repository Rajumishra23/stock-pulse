import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Column 1 - Top Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-amber-500">Contact Us</a></li>
            <li><a href="#" className="hover:text-amber-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-amber-500">Careers</a></li>
            <li><a href="#" className="hover:text-amber-500">Investor Charter</a></li>
            <li><a href="#" className="hover:text-amber-500">Client Bank Accounts</a></li>
            <li><a href="#" className="hover:text-amber-500">Mandatory Disclosure</a></li>
            <li><a href="#" className="hover:text-amber-500">SMART ODR Portal</a></li>
          </ul>
        </div>

        {/* Column 2 - Market Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Markets</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-amber-500">Markets</a></li>
            <li><a href="#" className="hover:text-amber-500">IPO</a></li>
            <li><a href="#" className="hover:text-amber-500">Mutual Fund</a></li>
            <li><a href="#" className="hover:text-amber-500">Insurance</a></li>
            <li><a href="#" className="hover:text-amber-500">Investor Complaints</a></li>
            <li><a href="#" className="hover:text-amber-500">Sitemap</a></li>
            <li><a href="#" className="hover:text-amber-500">Links to Exchanges</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p>Email: <a href="mailto:services@stockplus.co.in" className="hover:text-amber-500">services@stockplus.co.in</a></p>
          <p>Email: <a href="mailto:grievance@stockplus.co.in" className="hover:text-amber-500">grievance@stockplus.co.in</a></p>
          <p>Phone: <a href="tel:02536609999" className="hover:text-amber-500">0253 660 9999</a></p>
          <p className="mt-3">
            STOCKPLUS FINANCIAL SERVICES PVT. LTD.<br />
            1st Floor, Plot No. 6, Suyojit City Centre,<br />
            Opp. Rajiv Gandhi Bhavan, Sharanpur Road,<br />
            Nashik – 422002, Maharashtra
          </p>
        </div>

        {/* Column 4 - Regulatory Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Regulatory Info</h4>
          <p>
            CIN: U67190MH2007PTC170662<br />
            SEBI Regn No: INZ000171437<br />
            NSE CM: 90280 | NSE F&O: 90280<br />
            BSE CM: 6597 | BSE F&O: 6597<br />
            CDSL: IN-DP-268-2016<br />
            ARN: 106264 | IRDAI: CA0666<br />
            Research Analyst: INH000008341<br />
            Investment Adviser: INA000015763
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} StockPlus Financial Services Pvt. Ltd. All Rights Reserved.</p>
          <p>Designed, Developed and Content Provided by <span className="text-amber-500">Raju Mishra</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;