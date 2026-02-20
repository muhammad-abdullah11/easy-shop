import React, { useState, useRef, useEffect } from "react";
import { SlBasket } from "react-icons/sl";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const CategoryPage = ({ data, categoryName }) => {
    if (!data) return null;

    return (
        <div className="w-full">
            <DenimSection data={data} categoryName={categoryName} />
            <FootwearSection data={data} categoryName={categoryName} />
            <TShirtsSection data={data} categoryName={categoryName} />
            <ShirtsSection data={data} categoryName={categoryName} />
            <FragrancesSection data={data} categoryName={categoryName} />
            <VideosSection data={data} />
        </div>
    );
};

export default CategoryPage;

const DenimSection = ({ data, categoryName }) => {
    const navigate = useNavigate();
    const [blurImageIndex, setBlurImageIndex] = useState("");
    const DenimData = data.DenimJeans || [];
    const banner = data.banners?.denim;
    const sampleImages = DenimData.slice(0, 4).map(item => item.images[0]);

    return (
        <section className="py-10">
            <div className="px-6 md:px-12 mb-10">
                <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4">Denim</h2>
                <p className="w-full md:w-2/3 text-lg font-medium text-gray-700 uppercase leading-relaxed font-serif">
                    EXPLORE OUR EXQUISITE DENIM COLLECTION. CRAFTED FOR COMFORT AND STYLE,
                    PERFECT FOR EVERY OCCASION AND DESIGNED TO LAST.
                </p>
                <button
                    onClick={() => navigate(`/collections/${categoryName.toLowerCase()}-denim`)}
                    className="flex items-center gap-3 text-xl font-bold mt-6 hover:gap-5 transition-all"
                >
                    VIEW ALL <FaArrowRightLong />
                </button>
            </div>

            <div className="px-6 md:px-12 mb-10">
                <img
                    src={banner}
                    alt={`${categoryName} Denim Collection`}
                    className="w-full h-[60vh] object-cover"
                />
            </div>

            <div className="px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                {sampleImages?.map((img, i) => (
                    <div key={i} className="aspect-[3/4] overflow-hidden">
                        <img
                            onMouseEnter={() => setBlurImageIndex(img)}
                            onMouseLeave={() => setBlurImageIndex("")}
                            src={img}
                            alt="Denim preview"
                            className={`w-full h-full object-cover transition duration-300 ${blurImageIndex && blurImageIndex !== img ? "blur-sm" : ""}`}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

const FootwearSection = ({ data, categoryName }) => {
    const navigate = useNavigate();
    const Footwears = data.footwear || [];
    const banner = data.banners?.footwear;

    return (
        <section className="py-10">
            <div className="px-6 md:px-12 mb-10">
                <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4">FOOTWEAR</h2>
                <p className="w-full md:w-2/3 text-lg font-medium text-gray-700 uppercase leading-relaxed font-serif">
                    STEP UP YOUR GAME WITH OUR TRENDY FOOTWEAR COLLECTION.
                    COMFORT MEETS STYLE IN EVERY STEP.
                </p>
                <button
                    onClick={() => navigate(`/collections/${categoryName.toLowerCase()}-footwear`)}
                    className="flex items-center gap-3 text-xl font-bold mt-6 hover:gap-5 transition-all"
                >
                    VIEW ALL <FaArrowRightLong />
                </button>
            </div>

            <div className="px-6 md:px-12 mb-10">
                <img
                    src={banner}
                    alt={`${categoryName} Footwear Collection`}
                    className="w-full h-[60vh] object-cover"
                />
            </div>

            <div className="px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                {Footwears?.map((wear, i) => (
                    <div key={i} className="group relative overflow-hidden">
                        <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
                            <img
                                onClick={() => navigate(`/product/${wear.slug}`)}
                                src={wear.images[0]}
                                alt={wear.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-500 cursor-pointer"
                            />
                        </div>

                        <div className="mt-3 space-y-1">
                            <h3 className="text-sm font-medium text-gray-800 line-clamp-1">
                                {wear.name}
                            </h3>
                            <p className="text-sm font-bold text-black">
                                {wear.price} <span className="text-xs font-normal">PKR</span>
                            </p>
                        </div>

                        <button className="absolute left-1/2 -translate-x-1/2 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 bg-black text-white text-sm px-6 py-2 rounded-full shadow-lg">
                            Add to Basket <SlBasket />
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

const TShirtsSection = ({ data, categoryName }) => {
    const navigate = useNavigate();
    const TShirtsData = data.tshirts || [];
    const banner = data.banners?.tshirts;

    return (
        <section className="py-10">
            <div className="px-6 md:px-12 mb-10">
                <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4">T-SHIRTS & POLOS</h2>
                <p className="w-full md:w-2/3 text-lg font-medium text-gray-700 uppercase leading-relaxed font-serif">
                    DISCOVER OUR LATEST COLLECTION OF COMFORTABLE AND STYLISH T-SHIRTS.
                    PERFECT FIT FOR EVERY OCCASION.
                </p>
                <button
                    onClick={() => navigate(`/collections/${categoryName.toLowerCase()}-tshirts-polos`)}
                    className="flex items-center gap-3 text-xl font-bold mt-6 hover:gap-5 transition-all"
                >
                    VIEW ALL <FaArrowRightLong />
                </button>
            </div>

            <div className="px-6 md:px-12 mb-10">
                <img
                    src={banner}
                    alt="T-Shirts Collection"
                    className="w-full h-[60vh] object-cover"
                />
            </div>

            <div className="px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {TShirtsData?.map((product, i) => (
                    <div key={i} className="group relative overflow-hidden">
                        <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
                            <img
                                onClick={() => navigate(`/product/${product.slug}`)}
                                src={product.images[0]}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-500 cursor-pointer"
                            />
                        </div>

                        <div className="mt-3 space-y-1">
                            <h3 className="text-sm font-medium text-gray-800 line-clamp-1">
                                {product.name}
                            </h3>
                            <p className="text-sm font-bold text-black">
                                {product.price} <span className="text-xs font-normal">PKR</span>
                            </p>
                        </div>

                        <button className="absolute left-1/2 -translate-x-1/2 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 bg-black text-white text-sm px-6 py-2 rounded-full shadow-lg">
                            Add to Basket <SlBasket />
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

const ShirtsSection = ({ data, categoryName }) => {
    const navigate = useNavigate();
    const ShirtsData = data.shirts || [];
    const banner = data.banners?.shirts;

    return (
        <section className="py-10">
            <div className="px-6 md:px-12 mb-10">
                <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4">SHIRTS</h2>
                <p className="w-full md:w-2/3 text-lg font-medium text-gray-700 uppercase leading-relaxed font-serif">
                    ELEVATE YOUR STYLE WITH OUR PREMIUM SHIRT COLLECTION.
                    SOPHISTICATED DESIGN FOR EVERYDAY WEAR.
                </p>
                <button
                    onClick={() => navigate(`/collections/${categoryName.toLowerCase()}-shirts`)}
                    className="flex items-center gap-3 text-xl font-bold mt-6 hover:gap-5 transition-all"
                >
                    VIEW ALL <FaArrowRightLong />
                </button>
            </div>

            <div className="px-6 md:px-12 mb-10">
                <img
                    src={banner}
                    alt="Shirts Collection"
                    className="w-full h-[60vh] object-cover"
                />
            </div>

            <div className="px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                {ShirtsData?.map((product, i) => (
                    <div key={i} className="group relative overflow-hidden">
                        <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
                            <img
                                onClick={() => navigate(`/product/${product.slug}`)}
                                src={product.images[0]}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-500 cursor-pointer"
                            />
                        </div>

                        <div className="mt-3 space-y-1">
                            <h3 className="text-sm font-medium text-gray-800 line-clamp-1">
                                {product.name}
                            </h3>
                            <p className="text-sm font-bold text-black">
                                {product.price} <span className="text-xs font-normal">PKR</span>
                            </p>
                        </div>

                        <button className="absolute left-1/2 -translate-x-1/2 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 bg-black text-white text-sm px-6 py-2 rounded-full shadow-lg">
                            Add to Basket <SlBasket />
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

const FragrancesSection = ({ data, categoryName }) => {
    const navigate = useNavigate();
    const FragrancesData = data.fragrances || [];
    const banner = data.banners?.fragrances;

    return (
        <section className="py-10">
            <div className="px-6 md:px-12 mb-10">
                <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4">FRAGRANCES</h2>
                <p className="w-full md:w-2/3 text-lg font-medium text-gray-700 uppercase leading-relaxed font-serif">
                    SIGNATURE SCENTS FOR YOU. EXPLORE OUR EXCLUSIVE COLLECTION OF FRAGRANCES.
                </p>
                <button
                    onClick={() => navigate(`/collections/${categoryName.toLowerCase()}-fragrances`)}
                    className="flex items-center gap-3 text-xl font-bold mt-6 hover:gap-5 transition-all"
                >
                    VIEW ALL <FaArrowRightLong />
                </button>
            </div>

            <div className="px-6 md:px-12 mb-10">
                <img
                    src={banner}
                    alt="Fragrances Collection"
                    className="w-full h-[60vh] object-cover"
                />
            </div>

            <div className="px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                {FragrancesData?.map((product, i) => (
                    <div key={i} className="group relative overflow-hidden">
                        <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
                            <img
                                onClick={() => navigate(`/product/${product.slug}`)}
                                src={product.images[0]}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-500 cursor-pointer"
                            />
                        </div>

                        <div className="mt-3 space-y-1">
                            <h3 className="text-sm font-medium text-gray-800 line-clamp-1">
                                {product.name}
                            </h3>
                            <p className="text-sm font-bold text-black">
                                {product.price} <span className="text-xs font-normal">PKR</span>
                            </p>
                        </div>

                        <button className="absolute left-1/2 -translate-x-1/2 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 bg-black text-white text-sm px-6 py-2 rounded-full shadow-lg">
                            Add to Basket <SlBasket />
                        </button>
                    </div>
                ))}
            </div>
        </section>
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
        <section className="py-10">
            <div className="px-6 md:px-12 mb-10">
                <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4">STYLE IN MOTION</h2>
                <p className="w-full md:w-2/3 text-lg font-medium text-gray-700 uppercase leading-relaxed">
                    Discover our latest collection through dynamic visuals that bring fashion to life.
                </p>
            </div>

            <div className="px-6 md:px-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {videos.map((video, i) => (
                    <div key={i} className="relative aspect-9/16 overflow-hidden rounded-lg shadow-md bg-gray-100">
                        {!loadedVideos.has(i) && (
                            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                        )}
                        <video
                            ref={(el) => (videoRefs.current[i] = el)}
                            src={video}
                            className={`w-full h-full object-cover transition-opacity duration-500 ${loadedVideos.has(i) ? 'opacity-100' : 'opacity-0'}`}
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            onLoadedData={() => setLoadedVideos((prev) => new Set([...prev, i]))}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};
