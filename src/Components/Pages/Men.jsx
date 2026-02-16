import React, { useState, useRef, useEffect } from "react";
import Mens from "../../assets/MEN.json";
import { SlBasket } from "react-icons/sl";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Men = () => {
  return (
    <main>
      <Denim />
      <Footwear />
      <TShirts />
      <Shirts />
      <Fragrances />
      <MenVideos />
    </main>
  );
};

export default Men;

const Denim = () => {
  const navigate = useNavigate();
  const [blurImageIndex, setBlurImageIndex] = useState("");
  const DenimData = Mens.DenimJeans;

  const MenDenimSampleImage = [
    "https://images.unsplash.com/photo-1542272604-787c3835535d?w=1066&q=80",
    "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=1066&q=80",
    "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=1066&q=80",
    "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=1066&q=80",
  ];

  return (
    <main>
      <section className="px-4 md:px-20">
        <h2 className="text-2xl md:text-3xl font-bold">Denim</h2>
        <p className="w-full md:w-1/2 py-4 text-lg font-medium font-serif">
          WHEN WE THINK ABOUT DENIM, WE THINK ABOUT CRAFT — THE FABRIC, THE
          SILHOUETTE, THE WASH. IT'S A FASHION STAPLE, A CLASSIC PIECE THAT
          GROWS BETTER WITH WEAR, BECOMING MORE PERSONAL OVER TIME. WE KNOW WHAT
          MAKES DENIM, DENIM — SO WE CRAFT IT WITH CARE RIGHT HERE IN PAKISTAN.
          EACH WASH AND EVERY CUT CARRIES A STORY OF TEXTURE, MOVEMENT, AND EASE
          — BUILT FOR COMFORT, CONFIDENCE, AND EFFORTLESS STYLE.
        </p>
        <button
          onClick={() => navigate("/collections/men-denim")}
          className="flex items-center gap-2 text-2xl font-semibold"
        >
          VIEW ALL
          <span>
            <FaArrowRightLong />
          </span>
        </button>
      </section>

      <section>
        <div className="py-4">
          <img
            src={Mens.banners.denim}
            alt="Men Denim Collection"
            className="w-full min-h-screen object-cover"
          />
        </div>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          {MenDenimSampleImage?.map((img, i) => (
            <img
              onMouseEnter={() => setBlurImageIndex(img)}
              onMouseLeave={() => setBlurImageIndex("")}
              src={img}
              alt={img}
              key={i}
              className={`w-full h-full object-cover ${blurImageIndex && blurImageIndex == !img ? "transition duration-300 blur-xs" : ""}`}
            />
          ))}
        </section>
      </section>
    </main>
  );
};

const Footwear = () => {
  const navigate = useNavigate();
  const Footwears = Mens.footwear;

  return (
    <main className="py-12">
      <section className="px-4 md:px-20">
        <h2 className="text-2xl md:text-3xl font-bold">FOOTWEAR</h2>
        <p className="w-full md:w-1/2 py-4 text-lg font-medium font-serif">
          GRAB OUR FOOTWEAR COLLECTIONS AND ELEVATE YOUR TRENDY, STYLISH LOOK
          EFFORTLESSLY .
        </p>
        <button
          onClick={() => navigate("/collections/men-footwear")}
          className="flex items-center gap-2 text-2xl font-semibold">
          VIEW ALL
          <span>
            <FaArrowRightLong />
          </span>
        </button>
      </section>
      <section>
        <div className="py-4">
          <img
            src={Mens.banners.footwear}
            alt="Men Footwear Collection"
            className="w-full min-h-screen object-cover"
          />
        </div>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          {Footwears?.map((wear, i) => (
            <div
              key={i}
              className="group relative overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-3/4 bg-gray-100 overflow-hidden">
                <img
                  onClick={() => navigate(`/product/${wear.slug}`)}
                  src={wear.images[0]}
                  alt={wear.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-4 space-y-1">
                <h3 className="text-sm font-medium text-gray-800 line-clamp-1">
                  {wear.name}
                </h3>
                <p className="text-sm font-semibold text-black">
                  {wear.price} <span className="text-xs font-normal">PKR</span>
                </p>
              </div>

              <button className="absolute left-1/2 -translate-x-1/2 -bottom-14 group-hover:bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 bg-black text-white text-sm px-5 py-2 rounded-full shadow-md">
                Add to Basket
                <SlBasket className="text-base" />
              </button>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
};

const TShirts = () => {
  const navigate = useNavigate();
  const TShirtsData = Mens.tshirts;

  return (
    <main className="py-12">
      <section className="px-4 md:px-20">
        <h2 className="text-2xl md:text-3xl font-bold">T-SHIRTS & POLOS</h2>
        <p className="w-full md:w-1/2 py-4 text-lg font-medium font-serif">
          DISCOVER OUR LATEST COLLECTION OF COMFORTABLE AND STYLISH T-SHIRTS. FROM CLASSIC BASICS TO BOLD GRAPHICS, FIND YOUR PERFECT FIT FOR EVERY OCCASION.
        </p>
        <button
          onClick={() => navigate("/collections/men-tshirts-polos")}
          className="flex items-center gap-2 text-2xl font-semibold"
        >
          VIEW ALL
          <span>
            <FaArrowRightLong />
          </span>
        </button>
      </section>

      <section>
        <div className="py-4">
          <img
            src={Mens.banners.tshirts}
            alt="T-Shirts Collection"
            className="w-full min-h-screen object-cover"
          />
        </div>

        <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4">
          {TShirtsData?.map((product, i) => (
            <div
              key={i}
              className="group relative overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-3/4 bg-gray-100 overflow-hidden">
                <img
                  onClick={() => navigate(`/product/${product.slug}`)}
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-4 space-y-1">
                <h3 className="text-sm font-medium text-gray-800 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-sm font-semibold text-black">
                  {product.price} <span className="text-xs font-normal">PKR</span>
                </p>
              </div>

              <button className="absolute left-1/2 -translate-x-1/2 -bottom-14 group-hover:bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 bg-black text-white text-sm px-5 py-2 rounded-full shadow-md">
                Add to Basket
                <SlBasket className="text-base" />
              </button>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
};

const Shirts = () => {
  const navigate = useNavigate();
  const ShirtsData = Mens.shirts;

  return (
    <main className="py-12">
      <section className="px-4 md:px-20">
        <h2 className="text-2xl md:text-3xl font-bold">SHIRTS</h2>
        <p className="w-full md:w-1/2 py-4 text-lg font-medium font-serif">
          ELEVATE YOUR STYLE WITH OUR PREMIUM SHIRT COLLECTION. FROM CASUAL TO FORMAL, DISCOVER SHIRTS THAT COMBINE COMFORT WITH SOPHISTICATED DESIGN.
        </p>
        <button
          onClick={() => navigate("/collections/men-shirts")}
          className="flex items-center gap-2 text-2xl font-semibold"
        >
          VIEW ALL
          <span>
            <FaArrowRightLong />
          </span>
        </button>
      </section>

      <section>
        <div className="py-4">
          <img
            src={Mens.banners.shirts}
            alt="Shirts Collection"
            className="w-full min-h-screen object-cover"
          />
        </div>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          {ShirtsData?.map((product, i) => (
            <div
              key={i}
              className="group relative overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-3/4 bg-gray-100 overflow-hidden">
                <img
                  onClick={() => navigate(`/product/${product.slug}`)}
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-4 space-y-1">
                <h3 className="text-sm font-medium text-gray-800 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-sm font-semibold text-black">
                  {product.price} <span className="text-xs font-normal">PKR</span>
                </p>
              </div>

              <button className="absolute left-1/2 -translate-x-1/2 -bottom-14 group-hover:bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 bg-black text-white text-sm px-5 py-2 rounded-full shadow-md">
                Add to Basket
                <SlBasket className="text-base" />
              </button>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
};

const Fragrances = () => {
  const navigate = useNavigate();
  const FragrancesData = Mens.fragrances;

  return (
    <main className="py-12">
      <section className="px-4 md:px-20">
        <h2 className="text-2xl md:text-3xl font-bold">FRAGRANCES</h2>
        <p className="w-full md:w-1/2 py-4 text-lg font-medium font-serif">
          SIGNATURE SCENTS FOR THE MODERN MAN. EXPLORE OUR EXCLUSIVE COLLECTION OF FRAGRANCES THAT LEAVE A LASTING IMPRESSION.
        </p>
        <button
          onClick={() => navigate("/collections/men-fragrances")}
          className="flex items-center gap-2 text-2xl font-semibold"
        >
          VIEW ALL
          <span>
            <FaArrowRightLong />
          </span>
        </button>
      </section>

      <section>
        <div className="py-4">
          <img
            src={Mens.banners.fragrances}
            alt="Fragrances Collection"
            className="w-full min-h-screen object-cover"
          />
        </div>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          {FragrancesData?.map((product, i) => (
            <div
              key={i}
              className="group relative overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-3/4 bg-gray-100 overflow-hidden">
                <img
                  onClick={() => navigate(`/product/${product.slug}`)}
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-4 space-y-1">
                <h3 className="text-sm font-medium text-gray-800 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-sm font-semibold text-black">
                  {product.price} <span className="text-xs font-normal">PKR</span>
                </p>
              </div>

              <button className="absolute left-1/2 -translate-x-1/2 -bottom-14 group-hover:bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 bg-black text-white text-sm px-5 py-2 rounded-full shadow-md">
                Add to Basket
                <SlBasket className="text-base" />
              </button>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
};

const MenVideos = () => {
  const [loadedVideos, setLoadedVideos] = useState(new Set());
  const videoRefs = useRef([]);

  const videos = Mens.videos;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            if (video.paused) {
              video.play().catch(() => { });
            }
          } else {
            if (!video.paused) {
              video.pause();
            }
          }
        });
      },
      { rootMargin: '50px', threshold: 0.3 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="py-12 px-4">
      <section className="px-4 md:px-20 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">STYLE IN MOTION</h2>
        <p className="text-base md:text-lg font-medium text-gray-700">
          Discover our latest collection through dynamic visuals that bring fashion to life.
        </p>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
        {videos.map((video, i) => (
          <div
            key={i}
            className="relative aspect-9/16 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-100"
          >
            {!loadedVideos.has(i) && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}

            <video
              ref={(el) => (videoRefs.current[i] = el)}
              src={video}
              className={`w-full h-full object-cover ${loadedVideos.has(i) ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
              muted
              loop
              playsInline
              preload="metadata"
              onLoadedData={() => setLoadedVideos((prev) => new Set([...prev, i]))}
            />
          </div>
        ))}
      </section>
    </main>
  );
};
