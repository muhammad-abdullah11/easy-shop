import React from "react";
import Mens from "../assets/MEN.json";
import { SlBasket } from "react-icons/sl";
import { useNavigate } from "react-router-dom";




const Collections = () => {

    const navigate  = useNavigate();

    return (
    <main className="px-6 md:px-12 py-10 max-w-7xl mx-auto">
      <h2 className="text-sm md:text-base text-gray-500 tracking-wide mb-8">
        HOME / MEN /{" "}
        <span className="font-semibold text-black">
          MEN DENIM COLLECTION
        </span>
      </h2>

      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Mens.DenimJeans.map((jean, i) => (
          <div
            key={i}
            className="group relative overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="aspect-3/4 bg-gray-100 overflow-hidden">
              <img
                onClick={()=>navigate(`/product/${jean.slug}`)}
                src="https://outfitters.com.pk/cdn/shop/files/F0743109903LOWER.jpg?v=1766044311&width=1066"
                alt={jean.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-4 space-y-1">
              <h3 className="text-sm font-medium text-gray-800 line-clamp-1">
                {jean.name}
              </h3>
              <p className="text-sm font-semibold text-black">
                {jean.price} <span className="text-xs font-normal">PKR</span>
              </p>
            </div>

            <button className="absolute left-1/2 -translate-x-1/2 -bottom-14 group-hover:bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 bg-black text-white text-sm px-5 py-2 rounded-full shadow-md">
              Add to Basket
              <SlBasket className="text-base" />
            </button>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Collections;