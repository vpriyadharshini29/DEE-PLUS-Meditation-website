import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";

const Navbar = () => {
  const linkClasses =
    "text-white no-underline hover:text-green-200 transition-colors";

  return (
    <nav className="bg-[#B285C0] text-white rounded-full px-6 py-3 flex items-center justify-between shadow-md font-roboto">
      {/* Logo Section */}
      <div className="flex flex-col font-extrabold leading-tight">
        <Link to="/" className="tracking-widest text-lg text-white no-underline">
          DEE
        </Link>
        <Link to="/" className="tracking-widest text-lg text-white no-underline">
          PLUS
        </Link>
      </div>

      {/* Menu Links */}
      <ul className="flex gap-8 text-lg font-medium">
        <li><Link to="/" className={linkClasses}>Home</Link></li>
        <li><Link to="/therapy" className={linkClasses}>Therapy</Link></li>
        <li><Link to="/about" className={linkClasses}>About Us</Link></li>
        
        <li><Link to="/meditate" className={linkClasses}>Meditation</Link></li>
        
        <li><Link to="/contact" className={linkClasses}>Contact Us</Link></li>
      </ul>

      {/* Icons Section */}
      <div className="flex gap-4 text-xl">
        <FaSearch className="cursor-pointer hover:text-green-200 transition-colors" />
        <Link to="/login" className="text-white no-underline">
          <FaUser className="cursor-pointer hover:text-green-200 transition-colors" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
