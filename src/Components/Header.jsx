import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoReorderThree } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { IoMdHome } from "react-icons/io";
import { AiOutlineProduct } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { SiAboutdotme } from "react-icons/si";

const pages = [
  { name: "Home", path: "/", icon: <IoMdHome /> },
];

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/products?search=${search}`);
    setSearch("");
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);


  return (
    <header className="w-full">
      <div className="h-16 flex items-center justify-between px-6 md:px-12 border-b">
        
        <img
          src="https://plus.unsplash.com/premium_vector-1718370392212-cc9815e7e2c2?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="easy-shop"
          className="h-12 cursor-pointer object-contain"
          onClick={() => navigate("/")}
        />

        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center w-1/2 max-w-xl bg-gray-100 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-[#0d3b66]"
        >
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search for products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none w-full text-sm"
          />
          <button
            type="submit"
            className="ml-3 bg-[#0d3b66] hover:bg-[#0b2f52] text-white text-sm font-medium px-5 py-2 rounded-full transition"
          >
            Search
          </button>
        </form>

        <div className="flex items-center gap-5">
          <button className="relative text-2xl text-gray-700 hover:text-[#0d3b66] transition">
            <FaCartShopping />
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              0
            </span>
          </button>

        </div>
      </div>

      <nav className="flex items-center gap-8 py-3 bg-gray-50">
          <button
            onClick={toggleMenu}
            className="px-8 text-start text-3xl text-gray-700"
          >
            {menuOpen ? <RxCross2 /> : <IoReorderThree />}
          </button>

      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 z-40">
          <div className="absolute top-0 left-0 w-3/4 max-w-xs h-full bg-white shadow-lg p-6 flex flex-col gap-6">
            
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button onClick={closeMenu} className="text-2xl">
                <RxCross2 />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {pages.map((page) => (
                <Link
                  key={page.name}
                  to={page.path}
                  onClick={closeMenu}
                  className="flex items-center gap-3 text-gray-700 font-medium hover:text-[#0d3b66] transition"
                >
                  <span className="text-xl">{page.icon}</span>
                  {page.name}
                </Link>
              ))}
            </div>

            <button className="mt-auto bg-[#0d3b66] hover:bg-[#0b2f52] text-white py-2 rounded-full transition">
              Login
            </button>
          </div>
        </div>
      )}

       </nav>
    </header>
  );
};

export default Header;