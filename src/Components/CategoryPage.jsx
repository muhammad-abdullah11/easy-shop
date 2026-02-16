import React, { useState, useRef, useEffect } from "react";
import { SlBasket } from "react-icons/sl";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const CategoryPage = ({ data, categoryName }) => {
    if (!data) return null;

    return (
        <main>
            <DenimSection data={data} categoryName={categoryName} />
            <FootwearSection data={data} categoryName={categoryName} />
            <TShirtsSection data={data} categoryName={categoryName} />
            <ShirtsSection data={data} categoryName={categoryName} />
            <FragrancesSection data={data} categoryName={categoryName} />
            <VideosSection data={data} />
        </main>
    );
};

export default CategoryPage;

const DenimSection = ({ data, categoryName }) => {
    const navigate = useNavigate();
    const [blurImageIndex, setBlurImageIndex] = useState("");
    const DenimData = data.DenimJeans || [];
    const banner = data.banners?.denim;

    // Use first 4 product images as sample images if available, or fallback
    const sampleImages = DenimData.slice(0, 4).map(item => item.images[0]);

    return (
        <main>
            <section className="px-4 md:px-20">
                <h2 className="text-2xl md:text-3xl font-bold">Denim</h2>
                <p className="w-full md:w-1/2 py-4 text-lg font-medium font-serif">
                    EXPLORE OUR EXQUISITE DENIM COLLECTION. CRAFTED FOR COMFORT AND STYLE,
                    PERFECT FOR EVERY OCCASION AND DESIGNED TO LAST.
                </p>
                <button
                    onClick={() => navigate(`/collections/${categoryName.toLowerCase()}-denim`)}
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
                        src={banner}
                        alt={`${categoryName} Denim Collection`}
                        className="w-full min-h-screen object-cover"
                    />
                </div>

                <section className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
                    {sampleImages?.map((img, i) => (
                        <img
                            onMouseEnter={() => setBlurImageIndex(img)}
                            onMouseLeave={() => setBlurImageIndex("")}
                            src={img}
                            alt="Denim preview"
                            key={i}
                            className={`w-full h-full object-cover ${blurImageIndex && blurImageIndex === img ? "transition duration-300 blur-xs" : ""}`}
                        />
                    ))}
                </section>
            </section>
        </main>
    );
};

const FootwearSection = ({ data, categoryName }) => {
    const navigate = useNavigate();
    const Footwears = data.footwear || [];
    const banner = data.banners?.footwear;

    return (
        <main className="py-12">
            <section className="px-4 md:px-20">
                <h2 className="text-2xl md:text-3xl font-bold">FOOTWEAR</h2>
                <p className="w-full md:w-1/2 py-4 text-lg font-medium font-serif">
                    STEP UP YOUR GAME WITH OUR TRENDY FOOTWEAR COLLECTION.
                    COMFORT MEETS STYLE IN EVERY STEP.
                </p>
                <button
                    onClick={() => navigate(`/collections/${categoryName.toLowerCase()}-footwear`)}
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
                        src={banner}
                        alt={`${categoryName} Footwear Collection`}
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
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 cursor-pointer"
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

const TShirtsSection = ({ data, categoryName }) => {
    const navigate = useNavigate();
    const TShirtsData = data.tshirts || [];
    const banner = data.banners?.tshirts;

    return (
        <main className="py-12">
            <section className="px-4 md:px-20">
                <h2 className="text-2xl md:text-3xl font-bold">T-SHIRTS & POLOS</h2>
                <p className="w-full md:w-1/2 py-4 text-lg font-medium font-serif">
                    DISCOVER OUR LATEST COLLECTION OF COMFORTABLE AND STYLISH T-SHIRTS.
                    PERFECT FIT FOR EVERY OCCASION.
                </p>
                <button
                    onClick={() => navigate(`/collections/${categoryName.toLowerCase()}-tshirts-polos`)}
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
                        src={banner}
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
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 cursor-pointer"
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

const ShirtsSection = ({ data, categoryName }) => {
    const navigate = useNavigate();
    const ShirtsData = data.shirts || [];
    const banner = data.banners?.shirts;

    return (
        <main className="py-12">
            <section className="px-4 md:px-20">
                <h2 className="text-2xl md:text-3xl font-bold">SHIRTS</h2>
                <p className="w-full md:w-1/2 py-4 text-lg font-medium font-serif">
                    ELEVATE YOUR STYLE WITH OUR PREMIUM SHIRT COLLECTION.
                    SOPHISTICATED DESIGN FOR EVERYDAY WEAR.
                </p>
                <button
                    onClick={() => navigate(`/collections/${categoryName.toLowerCase()}-shirts`)}
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
                        src={banner}
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
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 cursor-pointer"
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

const FragrancesSection = ({ data, categoryName }) => {
    const navigate = useNavigate();
    const FragrancesData = data.fragrances || [];
    const banner = data.banners?.fragrances;

    return (
        <main className="py-12">
            <section className="px-4 md:px-20">
                <h2 className="text-2xl md:text-3xl font-bold">FRAGRANCES</h2>
                <p className="w-full md:w-1/2 py-4 text-lg font-medium font-serif">
                    SIGNATURE SCENTS FOR YOU. EXPLORE OUR EXCLUSIVE COLLECTION OF FRAGRANCES.
                </p>
                <button
                    onClick={() => navigate(`/collections/${categoryName.toLowerCase()}-fragrances`)}
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
                        src={banner}
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
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 cursor-pointer"
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

const VideosSection = ({ data }) => {
    const [loadedVideos, setLoadedVideos] = useState(new Set());
    const videoRefs = useRef([]);
    const videos = data.videos || [];

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
    }, [videos]);

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
