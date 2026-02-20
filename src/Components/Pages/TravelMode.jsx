import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const TravelMode = () => {
    const navigate = useNavigate();
    const [destinations, setDestinations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getScenicImage = (countryCode) => {
        const images = {
            FRA: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
            JPN: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80",
            ITA: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80",
            ESP: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&q=80",
            MEX: "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?w=800&q=80",
            BRA: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80",
            AUT: "https://images.unsplash.com/photo-1516550893023-fa5c331d615f?w=800&q=80",
        };
        return images[countryCode] || "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80";
    };

    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const codes = "fra,jpn,ita,esp,mex,bra,aut";
                const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${codes}`);

                if (!response.ok) {
                    throw new Error('Failed to fetch travel data');
                }

                const data = await response.json();

                const formattedData = data.map(country => ({
                    id: country.cca3,
                    name: country.name.common,
                    region: country.region,
                    description: `Experience the beauty and culture of ${country.name.common}.`,
                    image: getScenicImage(country.cca3)
                }));

                setDestinations(formattedData);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchDestinations();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-50">
                <div className="w-16 h-16 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen text-red-500">
                <p>Error loading destinations: {error}</p>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen font-sans">
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1920&q=80"
                        alt="Travel Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">EXPERIENCE</h1>
                    <p className="text-xl md:text-2xl font-light uppercase tracking-wider">The World Awaits</p>
                </div>
            </section>

            <section className="py-12 px-6 md:px-12 max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4">CURATED GUIDES</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                    Discover our hand-picked selection of the world's most captivating destinations.
                </p>
            </section>

            <section className="px-4 md:px-8 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {destinations.map((dest) => (
                        <div
                            key={dest.id}
                            className="group relative h-[400px] overflow-hidden cursor-pointer rounded-lg shadow-md hover:shadow-xl transition-shadow"
                            onClick={() => navigate(`/travel-guide/${dest.id}`)}
                        >
                            <img
                                src={dest.image}
                                alt={dest.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex flex-col justify-end p-6 text-white">
                                <span className="text-xs font-medium uppercase mb-1 opacity-90">{dest.region}</span>
                                <h3 className="text-2xl font-bold uppercase mb-2">{dest.name}</h3>
                                <div className="flex items-center gap-2 text-sm font-semibold hover:underline mt-2">
                                    View Guide <FaArrowRight />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default TravelMode;
