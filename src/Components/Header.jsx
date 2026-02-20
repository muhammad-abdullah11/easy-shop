import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoReorderThree } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { IoMdHome } from "react-icons/io";
import { IoMdContact } from "react-icons/io";


const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("MEN");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/products?search=${search}`);
    setSearch("");
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const menuItems = {
    MEN: {
      links: [
        {
          title: "NEW IN",
          items: [
            { label: "DENIM SS26", path: "/collections/men-denim" }
          ]
        },
        {
          title: "SHOP BY CATEGORIES",
          items: [
            { label: "VIEW ALL", path: "/men" },
            { label: "T-SHIRTS", path: "/collections/men-tshirts-polos" },
            { label: "POLOS", path: "/collections/men-tshirts-polos" },
            { label: "SHIRTS | SHACKETS", path: "/collections/men-shirts" },
            { label: "ACTIVEWEAR", path: "/collections/men-activewear" },
            { label: "DENIM", path: "/collections/men-denim" },
            { label: "TROUSERS", path: "/collections/men-trousers" },
            { label: "SHORTS", path: "/collections/men-shorts" },
            { label: "JEANS", path: "/collections/men-denim" },
            { label: "SWEATSHIRTS | HOODIES", path: "/collections/men-sweatshirts" },
            { label: "SWEATERS", path: "/collections/men-sweaters" },
            { label: "OUTERWEAR", path: "/collections/men-outerwear" },
            { label: "UNDERWEAR", path: "/collections/men-underwear" },
            { label: "FOOTWEAR", path: "/collections/men-footwear" },
            { label: "FRAGRANCES", path: "/collections/men-fragrances" },
            { label: "ACCESSORIES", path: "/collections/men-accessories" },
          ]
        },
        {
          title: "SHOP BY COLLECTION",
          items: [
            { label: "ESSENTIALS", path: "/collections/men-essentials" },
            { label: "ARTISANAL", path: "/collections/men-artisanal" },
            { label: "OTR LAB", path: "/collections/men-otr-lab" }
          ]
        }
      ],
      promotions: [
        { image: "https://outfitters.com.pk/cdn/shop/files/men_ae9c3fd4-41f3-4d75-89f3-1f2fbd50f0d6.jpg?v=1770639648&width=533", title: "Denim SS26" },
        { image: "https://outfitters.com.pk/cdn/shop/files/encore_men.jpg?v=1768989584&width=533", title: "Encore" },
      ]
    },
    WOMEN: {
      links: [
        {
          title: "NEW IN",
          items: [
            { label: "LATEST DROPS", path: "/collections/women-latest" }
          ]
        },
        {
          title: "SHOP BY CATEGORIES",
          items: [
            { label: "VIEW ALL", path: "/women" },
            { label: "TOPS", path: "/collections/women-tshirts-polos" },
            { label: "DRESSES", path: "/collections/women-dresses" },
            { label: "DENIM", path: "/collections/women-denim" },
            { label: "FOOTWEAR", path: "/collections/women-footwear" },
            { label: "FRAGRANCES", path: "/collections/women-fragrances" },
            { label: "ACCESSORIES", path: "/collections/women-accessories" },
          ]
        }
      ],
      promotions: [
        { image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80", title: "New Season" },
        { image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80", title: "Dresses" }
      ]
    },
    JUNIORS: {
      links: [
        {
          title: "NEW IN",
          items: [
            { label: "NEW ARRIVALS", path: "/collections/juniors-new" }
          ]
        },
        {
          title: "SHOP BY CATEGORIES",
          items: [
            { label: "VIEW ALL", path: "/juniors" },
            { label: "BOYS", path: "/collections/juniors-boys" },
            { label: "GIRLS", path: "/collections/juniors-girls" },
            { label: "FOOTWEAR", path: "/collections/juniors-footwear" },
            { label: "FRAGRANCES", path: "/collections/juniors-fragrances" },
          ]
        }
      ],
      promotions: [
        { image: "https://outfitters.com.pk/cdn/shop/files/menu_tile_jpg.jpg?v=1770118365&width=533", title: "Kids Collection" }
      ]
    }
  };

  return (
    <header className="w-full relative">
      <div className="h-16 flex items-center justify-between px-6 md:px-12 border-b bg-white z-50 relative">
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
          <button
            onClick={toggleMenu}
            className="text-3xl text-gray-700 hover:text-[#0d3b66] transition"
          >
            {menuOpen ? <RxCross2 /> : <IoReorderThree />}
          </button>
          <button
            onClick={() => navigate("/")}
            className="text-2xl text-gray-700 hover:text-[#0d3b66] transition hidden md:block"
          >
            <IoMdHome />
          </button>
          <button className="relative text-2xl text-gray-700 hover:text-[#0d3b66] transition">
            <FaCartShopping />
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              0
            </span>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={closeMenu}
        />

        <div
          className={`absolute top-0 left-0 w-full md:w-[90%] lg:w-[80%] xl:w-[70%] h-full bg-white shadow-2xl flex flex-col transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${menuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="flex items-center px-6 md:px-12 py-5 border-b gap-8 md:gap-16">
            <button onClick={closeMenu} className="text-2xl text-gray-400 hover:text-black transition">
              <RxCross2 />
            </button>

            <img
              src="https://plus.unsplash.com/premium_vector-1718370392212-cc9815e7e2c2?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="easy-shop"
              className="h-8 cursor-pointer object-contain hidden md:block"
              onClick={() => { closeMenu(); navigate("/"); }}
            />

            <div className="flex items-center gap-6 md:gap-10">
              {Object.keys(menuItems).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm md:text-base font-bold tracking-widest transition-colors py-2 relative group ${activeTab === tab ? "text-black" : "text-gray-400 hover:text-gray-600"
                    }`}
                >
                  {tab}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left transition-transform duration-300 ${activeTab === tab ? "scale-x-100" : "scale-x-0"}`}></span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 flex overflow-hidden">
            <div className="w-full md:w-1/3 overflow-y-auto p-6 md:p-12 space-y-10 border-r">
              {menuItems[activeTab].links.map((section, idx) => (
                <div key={idx}>
                  <h3 className="text-xs font-bold text-gray-400 tracking-wider mb-4 uppercase">{section.title}</h3>
                  <div className="flex flex-col gap-2.5">
                    {section.items.map((item, itemIdx) => (
                      <Link
                        key={itemIdx}
                        to={item.path}
                        onClick={closeMenu}
                        className={`text-sm font-medium hover:text-[#0d3b66] transition flex items-center gap-2 ${item.label === "VIEW ALL" ? "font-bold text-black" : "text-gray-600"
                          } ${item.label.includes("SALE") ? "text-red-500 font-bold" : ""}`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {activeTab === 'MEN' && (
                <div className="mt-6 pt-6 border-t">
                  <Link to="/collections/sale" onClick={closeMenu} className="text-sm font-bold text-red-500 tracking-wider">
                    + WINTER SALE FLAT 50% OFF
                  </Link>
                </div>
              )}
            </div>

            <div className="hidden md:flex w-2/3 bg-gray-50 p-12 gap-6 overflow-y-auto">
              {menuItems[activeTab].promotions.map((promo, idx) => (
                <div key={idx} className="flex-1 relative group cursor-pointer overflow-hidden rounded-sm h-[500px]">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-bold tracking-wide uppercase">{promo.title}</h3>
                    <span className="text-sm border-b border-white pb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Shop Now</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:hidden p-6 border-t bg-gray-50">
            <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black mb-4">
              <IoMdContact className="text-lg" /> Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;