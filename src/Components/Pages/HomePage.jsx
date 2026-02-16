import React, { useState } from "react";
import Men from "./Men";
import Women from "./Women";
import Juniors from "./Juniors";

const categoryComponents = {
  MEN: Men,
  WOMEN: Women,
  JUNIORS: Juniors,
};

const HomePage = () => {
  const [category, setCategory] = useState("MEN");
  const categories = Object.keys(categoryComponents);
  const SelectedComponent = categoryComponents[category];

  return (
    <main className="min-h-screen">
      <section className="flex gap-8 px-8 py-6 text-lg font-semibold border-b">
        {categories.map((cate) => (
          <button
            key={cate}
            onClick={() => setCategory(cate)}
            className={`relative pb-2 transition ${
              category === cate
                ? "text-black after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {cate}
          </button>
        ))}
      </section>

      <section className="py-10">
        {SelectedComponent && <SelectedComponent />}
      </section>
    </main>
  );
};

export default HomePage;