import React, { useState, useEffect } from "react";
import MenData from "../../assets/MEN.json";
import WomenData from "../../assets/WOMEN.json";
import JuniorsData from "../../assets/JUNIORS.json";
import CategoryPage from "../CategoryPage";

const categoryData = {
  MEN: MenData,
  WOMEN: WomenData,
  JUNIORS: JuniorsData,
};

const HomePage = ({ initialCategory }) => {
  const [category, setCategory] = useState(initialCategory || "MEN");
  const categories = Object.keys(categoryData);
  const currentData = categoryData[category];

  useEffect(() => {
    if (initialCategory) {
      setCategory(initialCategory);
    }
  }, [initialCategory]);

  return (
    <main className="min-h-screen">
      <section className="flex gap-8 px-8 py-6 text-lg font-semibold border-b justify-center">
        {categories.map((cate) => (
          <button
            key={cate}
            onClick={() => setCategory(cate)}
            className={`relative pb-2 transition tracking-widest ${category === cate
              ? "text-black after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-black"
              : "text-gray-500 hover:text-black"
              }`}
          >
            {cate}
          </button>
        ))}
      </section>

      <section>
        <CategoryPage data={currentData} categoryName={category} />
      </section>
    </main>
  );
};

export default HomePage;