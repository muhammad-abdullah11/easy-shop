import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Mens from "../assets/MEN.json";
import Womens from "../assets/WOMEN.json";
import Juniors from "../assets/JUNIORS.json";
import { SlBasket } from "react-icons/sl";

const Product = () => {
  const { slug } = useParams();

  const getAllProducts = () => {
    const categories = [Mens, Womens, Juniors];
    const types = ["DenimJeans", "footwear", "tshirts", "shirts", "fragrances"];
    let products = [];

    categories.forEach(cat => {
      types.forEach(type => {
        if (cat[type]) {
          products = [...products, ...cat[type]];
        }
      });
    });
    return products;
  };

  const product = getAllProducts().find((p) => p.slug === slug);
  const [selectedSize, setSelectedSize] = useState(null);
  const [mainImage, setMainImage] = useState(product?.images?.[0]);

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold">Product not found</h2>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
      <section className="flex gap-6">
        <div className="hidden md:flex flex-col gap-4 w-24">
          {product.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={product.name}
              onClick={() => setMainImage(img)}
              className={`cursor-pointer border rounded-lg object-cover ${mainImage === img ? "border-black" : "border-gray-200"
                }`}
            />
          ))}
        </div>

        <div className="flex-1 bg-gray-100 rounded-xl overflow-hidden">
          <img
            src={mainImage}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="flex flex-col justify-start space-y-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold">{product.name}</h1>
          <p className="text-gray-500 text-sm mt-1">{product.category}</p>
        </div>

        <div className="text-2xl font-bold">
          {product.price} <span className="text-sm font-medium">PKR</span>
        </div>

        <div className="inline-block bg-black text-white text-xs tracking-wide px-3 py-1 rounded-full w-fit">
          {product.brand}
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">
            Color: <span className="font-semibold">{product.color}</span>
          </h3>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-3">Select Size</h3>
          <div className="flex flex-wrap gap-3">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-12 h-12 border rounded-md text-sm font-medium transition ${selectedSize === size
                  ? "bg-black text-white border-black"
                  : "border-gray-300 hover:border-black"
                  }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button className="flex items-center justify-center gap-3 bg-black text-white py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition">
          Add to Basket
          <SlBasket />
        </button>

        <div className="pt-6 border-t text-sm text-gray-600 leading-relaxed">
          {product.description}
        </div>
      </section>
    </main>
  );
};

export default Product;
