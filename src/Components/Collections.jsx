import React, { useState, useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";
import Mens from "../assets/MEN.json";
import Womens from "../assets/WOMEN.json";
import Juniors from "../assets/JUNIORS.json";
import { SlBasket } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const Collections = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedFilter("ALL");
  }, [category]);

  const categoryMap = {
    "men-denim": { data: Mens.DenimJeans, title: "MEN DENIM COLLECTION", filters: ["ALL", "BAGGY", "SLIM", "STRAIGHT", "RELAXED", "TAPERED", "VINTAGE"] },
    "men-footwear": { data: Mens.footwear, title: "MEN FOOTWEAR COLLECTION", filters: ["ALL", "SNEAKERS", "TRAINERS", "CLOGS", "SLIDES", "SANDALS", "CASUAL"] },
    "men-tshirts-polos": { data: Mens.tshirts, title: "MEN T-SHIRTS & POLOS COLLECTION", filters: ["ALL", "BASIC", "GRAPHIC", "SLOGAN", "POLO", "STRIPED", "V-NECK", "HENLEY"] },
    "men-shirts": { data: Mens.shirts, title: "MEN SHIRTS COLLECTION", filters: ["ALL", "CASUAL", "FORMAL", "CHECKERED", "STRIPED", "DENIM", "LINEN", "OXFORD", "FLANNEL"] },
    "men-fragrances": { data: Mens.fragrances, title: "MEN FRAGRANCES COLLECTION", filters: ["ALL", "FRESH", "WOODY", "AQUATIC", "SPICY", "FLORAL"] },

    "women-denim": { data: Womens.DenimJeans, title: "WOMEN DENIM COLLECTION", filters: ["ALL", "MOM JEANS", "SKINNY", "FLARED", "BOYFRIEND", "STRAIGHT", "WIDE LEG"] },
    "women-footwear": { data: Womens.footwear, title: "WOMEN FOOTWEAR COLLECTION", filters: ["ALL", "SNEAKERS", "BOOTS", "HEELS", "LOAFERS", "SANDALS", "RUNNING"] },
    "women-tshirts-polos": { data: Womens.tshirts, title: "WOMEN T-SHIRTS COLLECTION", filters: ["ALL", "GRAPHIC", "CROP TOP", "V-NECK", "STRIPED", "RIBBED", "TANK"] },
    "women-shirts": { data: Womens.shirts, title: "WOMEN SHIRTS COLLECTION", filters: ["ALL", "SILK", "LINEN", "FLORAL", "DENIM", "CROPPED", "SATIN"] },
    "women-fragrances": { data: Womens.fragrances, title: "WOMEN FRAGRANCES COLLECTION", filters: ["ALL", "FLORAL", "ROSE", "VANILLA", "OCEAN", "CITRUS", "JASMINE"] },

    "juniors-denim": { data: Juniors.DenimJeans, title: "JUNIORS DENIM COLLECTION", filters: ["ALL", "COMFORT", "ADJUSTABLE", "JOGGER", "EMBROIDERED", "DUNGAREES"] },
    "juniors-footwear": { data: Juniors.footwear, title: "JUNIORS FOOTWEAR COLLECTION", filters: ["ALL", "VELCRO", "LIGHT-UP", "SLIP-ONS", "SANDALS", "BOOTS"] },
    "juniors-tshirts-polos": { data: Juniors.tshirts, title: "JUNIORS T-SHIRTS COLLECTION", filters: ["ALL", "DINOSAUR", "POLO", "SUPERHERO", "CREW NECK", "SEQUIN"] },
    "juniors-shirts": { data: Juniors.shirts, title: "JUNIORS SHIRTS COLLECTION", filters: ["ALL", "FLANNEL", "DENIM", "OXFORD", "TROPICAL"] },
    "juniors-fragrances": { data: Juniors.fragrances, title: "JUNIORS FRAGRANCES COLLECTION", filters: ["ALL", "FRESH", "BERRY"] },
  };

  const currentCategory = categoryMap[category] || categoryMap["men-denim"];
  const products = currentCategory.data;
  const collectionTitle = currentCategory.title;
  const availableFilters = currentCategory.filters;

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedFilter !== "ALL") {
      filtered = filtered.filter((product) => {
        const productName = product.name.toUpperCase();
        const productColor = product.color?.toUpperCase() || "";
        const productDescription = product.description?.toUpperCase() || "";
        const filterUpper = selectedFilter.toUpperCase();

        return (
          productName.includes(filterUpper) ||
          productColor.includes(filterUpper) ||
          productDescription.includes(filterUpper)
        );
      });
    }

    if (sortBy === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [products, selectedFilter, sortBy]);

  return (
    <main className="px-6 md:px-12 py-10 max-w-7xl mx-auto">
      <h2 className="text-sm md:text-base text-gray-500 tracking-wide mb-8">
        HOME / MEN / <span className="font-semibold text-black">{collectionTitle}</span>
      </h2>

      <div className="mb-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Filter:</span>
            <div className="flex flex-wrap gap-2">
              {availableFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 text-xs md:text-sm font-medium rounded-full transition ${selectedFilter === filter
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-black"
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>

        <div className="text-sm text-gray-600">
          Showing <span className="font-semibold">{filteredProducts.length}</span> of{" "}
          <span className="font-semibold">{products.length}</span> products
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-20">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
          <p className="text-gray-500">Try adjusting your filters</p>
        </div>
      ) : (
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, i) => (
            <div
              key={i}
              className="group relative overflow-hidden hover:shadow-lg transition-all duration-300 bg-white rounded-lg"
            >
              <div className="aspect-3/4 bg-gray-100 overflow-hidden">
                <img
                  onClick={() => navigate(`/product/${product.slug}`)}
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 cursor-pointer"
                />
              </div>

              <div className="p-4 space-y-1">
                <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500">{product.color}</p>
                <p className="text-sm font-semibold text-black">
                  {product.price} <span className="text-xs font-normal">PKR</span>
                </p>
              </div>

              <button className="absolute left-1/2 -translate-x-1/2 -bottom-14 group-hover:bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 bg-black text-white text-sm px-5 py-2 rounded-full shadow-md hover:bg-gray-800">
                Add to Basket
                <SlBasket className="text-base" />
              </button>
            </div>
          ))}
        </section>
      )}
    </main>
  );
};

export default Collections;