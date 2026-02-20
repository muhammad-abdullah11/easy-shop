import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMapMarkerAlt, FaUtensils, FaCamera, FaBed, FaShoppingBag, FaTree, FaGlassCheers, FaPalette } from 'react-icons/fa';


const TravelGuide = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [country, setCountry] = useState(null);
    const [guideData, setGuideData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [countryRes, guideRes] = await Promise.all([
                    fetch(`https://restcountries.com/v3.1/alpha/${id}`),
                    fetch('/travel-guide-data.json')
                ]);

                const countryData = await countryRes.json();
                const guideJson = await guideRes.json();

                setCountry(countryData[0]);
                setGuideData(guideJson[id] || null);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch data", error);
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    if (loading) return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="w-12 h-12 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
        </div>
    );

    if (!country) return <div className="p-8 text-center text-xl">Country not found</div>;

    const data = guideData || {
        hero: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80",
        title: country.name.common.toUpperCase(),
        tagline: "Discover the Unknown",
        sections: [
            {
                type: "EXPLORE",
                title: `Welcome to ${country.name.common}`,
                description: `Experience the unique culture and landscapes of ${country.region}. From its bustling cities to its quiet countryside, ${country.name.common} offers a wealth of experiences for the intrepid traveler.`,
                image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80"
            },
            {
                type: "CULTURE",
                title: "Local Traditions",
                description: "Immerse yourself in the local customs and traditions that make this destination unique. Every region has its own story to tell.",
                image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen font-sans text-gray-900">
            <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 bg-white/90 backdrop-blur-sm shadow-sm">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-sm font-bold uppercase hover:text-gray-600 transition-colors"
                >
                    <FaArrowLeft /> Back
                </button>
                <div className="text-xl font-bold">{country.cca3}</div>
            </nav>

            <header className="relative h-[80vh]">
                <div className="absolute inset-0">
                    <img
                        src={data.hero}
                        alt={country.name.common}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                    <p className="text-base md:text-lg mb-4 uppercase tracking-wider font-light">{data.tagline}</p>
                    <h1 className="text-5xl md:text-7xl font-bold uppercase mb-8 shadow-sm">
                        {data.title}
                    </h1>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium bg-black/40 px-6 py-3 rounded-full backdrop-blur-md">
                        <span>CAPITAL: {country.capital?.[0].toUpperCase()}</span>
                        <span>POPULATION: {(country.population / 1000000).toFixed(1)}M</span>
                        <span>CURRENCY: {Object.keys(country.currencies || {})[0]}</span>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 md:px-12 py-20">
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        A JOURNEY TO REMEMBER
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Immerse yourself in the rich tapestry of {country.name.common}.
                        From the bustling streets of {country.capital?.[0]} to the serene landscapes that stretch beyond the horizon.
                        Every corner tells a story, every flavor ignites a memory. This is your curated guide to the best experiences.
                    </p>
                </div>

                {data.sections.map((section, index) => (
                    <section key={index} className={`flex flex-col md:flex-row gap-12 mb-24 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-full md:w-1/2">
                            <div className="overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 flex flex-col justify-center">
                            <h3 className="text-sm font-bold text-gray-500 tracking-wider uppercase mb-3 flex items-center gap-2">
                                {section.type === 'EAT & DRINK' && <FaUtensils />}
                                {section.type === 'VISIT' && <FaCamera />}
                                {section.type === 'STAY' && <FaBed />}
                                {section.type === 'SHOP' && <FaShoppingBag />}
                                {section.type === 'NATURE' && <FaTree />}
                                {section.type === 'PARTY' && <FaGlassCheers />}
                                {section.type === 'ART' && <FaPalette />}
                                {section.type === 'CULTURE' && <FaMapMarkerAlt />}
                                {section.type === 'HIDDEN GEM' && <FaMapMarkerAlt />}
                                {section.type === 'COASTAL' && <FaMapMarkerAlt />}
                                {section.type === 'EXPLORE' && <FaMapMarkerAlt />}
                                {section.type}
                            </h3>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">{section.title}</h2>
                            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                                {section.description}
                            </p>
                            <button className="self-start text-sm font-bold border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
                                DISCOVER MORE
                            </button>
                        </div>
                    </section>
                ))}

                <section className="bg-gray-100 p-12 rounded-xl text-center mb-20">
                    <FaMapMarkerAlt className="text-3xl mx-auto mb-4 text-gray-400" />
                    <h2 className="text-2xl font-bold uppercase mb-4">{country.region}</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Located in {country.subregion}, {country.name.common} covers an area of {country.area.toLocaleString()} km².
                        It is a land of diverse landscapes and rich cultural heritage waiting to be explored.
                    </p>
                </section>

            </main>

            <footer className="bg-gray-900 text-white py-16 px-6 text-center">
                <p className="text-gray-400 mb-4 uppercase text-sm tracking-wider">Continue the Adventure</p>
                <h2 className="text-3xl md:text-5xl font-bold cursor-pointer hover:text-gray-300 transition-colors" onClick={() => navigate('/travel-mode')}>
                    EXPLORE MORE DESTINATIONS
                </h2>
            </footer>
        </div>
    );
};

export default TravelGuide;
