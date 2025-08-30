import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for search results
  const searchData = [
    { title: "Home", path: "/" },
    { title: "Therapy", path: "/therapy" },
    { title: "About Us", path: "/about" },
    { title: "Meditation", path: "/meditate" },
    { title: "Contact Us", path: "/contact" },
  ];

  // Filter search results based on query
  const searchResults = searchQuery.trim()
    ? searchData.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const linkClasses =
    "block px-4 py-2 text-white no-underline hover:text-green-200 transition-colors duration-200";

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Search query:", searchQuery); // Replace with actual search logic
    }
  };

  return (
    <nav className="bg-[#B285C0] text-white px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between shadow-md font-roboto w-full box-border" aria-label="Main navigation">
      {/* Logo Section */}
      <div className="flex flex-col font-extrabold leading-tight">
        <Link to="/" className="tracking-widest text-lg sm:text-xl text-white no-underline" aria-label="DEE PLUS Home">
          DEE
        </Link>
        <Link to="/" className="tracking-widest text-lg sm:text-xl text-white no-underline">
          PLUS
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 relative">
        <ul className="flex gap-4 lg:gap-6 xl:gap-8 text-base lg:text-lg font-medium">
          <li><Link to="/" className={linkClasses} aria-label="Home page">Home</Link></li>
          <li><Link to="/therapy" className={linkClasses} aria-label="Therapy page">Therapy</Link></li>
          <li><Link to="/about" className={linkClasses} aria-label="About Us page">About Us</Link></li>
          <li><Link to="/meditate" className={linkClasses} aria-label="Meditation page">Meditation</Link></li>
          <li><Link to="/contact" className={linkClasses} aria-label="Contact Us page">Contact Us</Link></li>
        </ul>
        {isSearchOpen && (
          <div className="relative ml-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
              onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit(e)}
              placeholder="Search..."
              className="px-3 py-1 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-200 w-48"
              autoFocus
              aria-label="Search input"
            />
            {searchQuery.trim() && (
              <div className="absolute top-10 left-0 w-full bg-[#B285C0] shadow-lg rounded-md z-50">
                {searchResults.length > 0 ? (
                  <ul className="py-2">
                    {searchResults.map((result, index) => (
                      <li key={index}>
                        <Link
                          to={result.path}
                          className="block px-4 py-2 text-white hover:bg-green-200 hover:text-black transition-colors duration-200"
                          onClick={() => {
                            setIsSearchOpen(false);
                            setSearchQuery("");
                          }}
                          aria-label={`Search result: ${result.title}`}
                        >
                          {result.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-4 py-2 text-white">No results found</div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Icons Section */}
      <div className="hidden md:flex gap-4 lg:gap-6 text-lg lg:text-xl">
        <button
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          aria-label={isSearchOpen ? "Close search" : "Open search"}
          className="focus:outline-none focus:ring-2 focus:ring-green-200"
        >
          <FaSearch className="cursor-pointer hover:text-green-200 transition-colors duration-200" />
        </button>
        <Link to="/login" className="text-white no-underline" aria-label="Login page">
          <FaUser className="cursor-pointer hover:text-green-200 transition-colors duration-200" />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-xl sm:text-2xl text-white focus:outline-none focus:ring-2 focus:ring-green-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#B285C0] shadow-lg flex flex-col md:hidden z-50 transition-all duration-300 ease-in-out">
          <ul className="flex flex-col w-full text-base sm:text-lg font-medium">
            <li><Link to="/" onClick={() => setIsOpen(false)} className={linkClasses} aria-label="Home page">Home</Link></li>
            <li><Link to="/therapy" onClick={() => setIsOpen(false)} className={linkClasses} aria-label="Therapy page">Therapy</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)} className={linkClasses} aria-label="About Us page">About Us</Link></li>
            <li><Link to="/meditate" onClick={() => setIsOpen(false)} className={linkClasses} aria-label="Meditation page">Meditation</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)} className={linkClasses} aria-label="Contact Us page">Contact Us</Link></li>
          </ul>
          <div className="flex flex-col gap-4 px-4 py-3 text-lg sm:text-xl">
            {isSearchOpen && (
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit(e)}
                  placeholder="Search..."
                  className="px-3 py-1 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-200 w-full"
                  autoFocus
                  aria-label="Search input"
                />
                {searchQuery.trim() && (
                  <div className="mt-2 bg-[#B285C0] shadow-lg rounded-md">
                    {searchResults.length > 0 ? (
                      <ul className="py-2">
                        {searchResults.map((result, index) => (
                          <li key={index}>
                            <Link
                              to={result.path}
                              className="block px-4 py-2 text-white hover:bg-green-200 hover:text-black transition-colors duration-200"
                              onClick={() => {
                                setIsOpen(false);
                                setIsSearchOpen(false);
                                setSearchQuery("");
                              }}
                              aria-label={`Search result: ${result.title}`}
                            >
                              {result.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="px-4 py-2 text-white">No results found</div>
                    )}
                  </div>
                )}
              </div>
            )}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label={isSearchOpen ? "Close search" : "Open search"}
              className="focus:outline-none focus:ring-2 focus:ring-green-200"
            >
              <FaSearch className="cursor-pointer hover:text-green-200 transition-colors duration-200" />
            </button>
            <Link to="/login" onClick={() => setIsOpen(false)} className="text-white no-underline" aria-label="Login page">
              <FaUser className="cursor-pointer hover:text-green-200 transition-colors duration-200" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;