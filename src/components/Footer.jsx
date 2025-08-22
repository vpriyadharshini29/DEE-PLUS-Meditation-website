import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#B285C0] text-white rounded-3xl px-10 py-8 mt-auto font-roboto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        {/* Logo */}
        <div className="flex flex-col font-extrabold leading-tight">
          <span className="tracking-widest text-2xl">DEE</span>
          <span className="tracking-widest text-2xl">PLUS</span>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Menu</h3>
          <ul className="space-y-1">
            <li>Home</li>
            <li>Happiness Week</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Course</li>
            <li>Meditation</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-1">
            <li>FAQ</li>
            <li>Terms & Conditions</li>
            <li>Help Center</li>
            <li>Partnership</li>
          </ul>
          <h3 className="text-lg font-semibold mt-6">Opening Time</h3>
          <p className="mt-2">Monday - Sunday</p>
          <p>9.00 AM To 9.00 PM</p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="flex items-start gap-2">
            <FaMapMarkerAlt className="mt-1" />
            6, Hethendran Street,<br />
            Kongu Nagar,<br />
            Karur - 26
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaPhoneAlt /> +9532 32556
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaEnvelope /> deepluswell@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
