import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { TailSpin } from "react-loader-spinner";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import homeData from "../assets/data/homeData.json";


const images = import.meta.glob("../assets/images/home-image/*.{jpg,jpeg,png,svg}", { eager: true });
const unsortedImageList = Object.values(images).map((img) => img.default);

const imageList = unsortedImageList.sort((a, b) => {
    const matchA = a.match(/hom-(\d+)/);
    const matchB = b.match(/hom-(\d+)/);
    if (!matchA) return 1;
    if (!matchB) return -1;
    return parseInt(matchA[1]) - parseInt(matchB[1]);
});

const galleryArts = imageList.map((image, index) => {
    const imageType = homeData[index]?.imageType?.toLowerCase() || "other";
    let type = "other";
    if (imageType.includes("acrylic")) type = "acrylic";
    else if (imageType.includes("pencil")) type = "pencil";
    else if (imageType.includes("watercolour")) type = "watercolor";

    return {
        id: index + 1,
        image,
        imageName: homeData[index]?.imageName || `demo-name ${index + 1}`,
        imageDescription: homeData[index]?.imageDescription || "this is demo description.",
        imageSize: homeData[index]?.imageSize || "N/A",
        type,
    };
});

const LazyImageWithLoader = ({ src, alt, onClick, height = "h-[500px]" }) => {
    const [loading, setLoading] = useState(true);
    return (
        <div
            className={`w-full ${height} relative flex justify-center items-center bg-gray-50 rounded-lg overflow-hidden cursor-pointer`}
            onClick={onClick}
        >
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                    <TailSpin height={50} width={50} color="#0ea5e9" />
                </div>
            )}
            <LazyLoadImage
                src={src}
                alt={alt}
                effect="blur"
                afterLoad={() => setLoading(false)}
                className={`max-h-full max-w-full object-contain rounded-lg ${loading ? "blur-sm" : "blur-0"}`}
            />
        </div>
    );
};

const ArtDetails = () => {
    const { id } = useParams();
    const mainImageRef = useRef(null);

    const [art, setArt] = useState(null);
    const [loading, setLoading] = useState(true);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);

    useEffect(() => {
        setLoading(true);
        const index = galleryArts.findIndex((item) => item.id === parseInt(id));
        if (index !== -1) {
            setArt(galleryArts[index]);
            setCurrentIndex(index);
            setTimeout(() => {
                mainImageRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 50);
        } else {
            setArt(null);
        }
        setLoading(false);
    }, [id]);

    if (loading) return (
        <div className="flex justify-center items-center min-h-[70vh]">
            <div className="w-16 h-16 border-4 border-t-sky-500 border-gray-300 rounded-full animate-spin"></div>
        </div>
    );

    if (!art) return (
        <div className="text-center my-40">
            <h2 className="text-3xl font-semibold text-gray-700">Art Not Found 😢</h2>
            <p className="text-gray-500 mt-2">The piece you're looking for might not exist.</p>
            <Link to="/" className="inline-block mt-8 bg-sky-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-sky-700 transition-colors">
                ← Back to Gallery
            </Link>
        </div>
    );

    const relatedArts = galleryArts.filter(item => item.type === art.type && item.id !== art.id).slice(0, 4);
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Link to="/" className="hover:text-gray-900 font-semibold">Gallery</Link>
                    <span>/</span>
                    <span className="font-medium text-gray-800">{art.imageName}</span>
                </div>

                <div ref={mainImageRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    <LazyImageWithLoader src={art.image} alt={art.imageName} onClick={() => setLightboxOpen(true)} height="h-[600px]" />
                    <div className="flex flex-col gap-6">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 capitalize">{art.imageName}</h1>
                        <div className="flex flex-wrap gap-3">
                            <span className="inline-block bg-gray-100 text-gray-800 text-sm font-semibold px-4 py-2 rounded-full"><strong>Size:</strong> {art.imageSize}</span>
                            <span className="inline-block bg-sky-100 text-sky-800 text-sm font-semibold px-4 py-2 rounded-full capitalize"><strong>Type:</strong> {art.type}</span>
                        </div>
                        <div className="border-t border-gray-200 pt-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">About this Piece</h2>
                            <p className="font-serif text-lg text-gray-700 leading-relaxed">{art.imageDescription}</p>
                        </div>
                        <div className="flex gap-4 mt-4">
                            <a href={`https://www.facebook.com/h.m.hady.2024`} target="_blank" rel="noopener noreferrer" className="text-white bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition"><FaFacebookF /></a>
                            <a href={`https://www.instagram.com/artoonist_hplus`} target="_blank" rel="noopener noreferrer" className="text-white bg-sky-400 p-3 rounded-full hover:bg-sky-500 transition"><FaInstagram /></a>
                            <a href={`https://wa.me/8801891521080`} target="_blank" rel="noopener noreferrer" className="text-white bg-green-500 p-3 rounded-full hover:bg-green-600 transition"><FaWhatsapp /></a>
                        </div>
                        <div className="mt-4">
                            <Link to="/contact" className="inline-block bg-sky-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-sky-700 transition-colors duration-300 shadow-md">
                                Inquire About This Piece
                            </Link>
                        </div>
                    </div>
                </div>

                {relatedArts.length > 0 && (
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Artworks</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {relatedArts.map(relArt => (
                                <div
                                    key={relArt.id}
                                    onClick={() => {
                                        const index = galleryArts.findIndex(item => item.id === relArt.id);
                                        setArt(galleryArts[index]);
                                        setCurrentIndex(index);
                                        setTimeout(() => mainImageRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
                                    }}
                                    className="cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 flex flex-col items-center"
                                >
                                    <div className="w-full h-48 flex items-center justify-center bg-gray-50">
                                        <LazyLoadImage src={relArt.image} alt={relArt.imageName} effect="blur" className="max-h-full max-w-full object-contain rounded-t-xl" />
                                    </div>
                                    <div className="p-3 text-center w-full">
                                        <h3 className="text-lg font-medium text-gray-800 truncate capitalize">{relArt.imageName}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {lightboxOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                    <button onClick={() => setLightboxOpen(false)} className="absolute top-6 right-6 text-white text-3xl font-bold">&times;</button>
                    <button
                        onClick={() => {
                            const newIndex = (currentIndex - 1 + galleryArts.length) % galleryArts.length;
                            setArt(galleryArts[newIndex]);
                            setCurrentIndex(newIndex);
                        }}
                        className="absolute left-4 text-white text-3xl font-bold"
                    >
                        <FaChevronLeft />
                    </button>
                    <img src={art.image} alt={art.imageName} className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-lg" />
                    <button
                        onClick={() => {
                            const newIndex = (currentIndex + 1) % galleryArts.length;
                            setArt(galleryArts[newIndex]);
                            setCurrentIndex(newIndex);
                        }}
                        className="absolute right-4 text-white text-3xl font-bold"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ArtDetails;
