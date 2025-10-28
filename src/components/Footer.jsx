import {
    faFacebook,
    faInstagram,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 shadow-inner">
            <div className="container mx-auto px-28 py-8 flex flex-col md:flex-row items-center justify-between">
                <div className="flex gap-6 mb-4 md:mb-0">
                    <Link
                        href="https://www.facebook.com/h.m.hady.2024"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-110"
                    >
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </Link>
                    <Link
                        href="https://www.instagram.com/artoonist_hplus"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 hover:text-pink-700 transition-transform transform hover:scale-110"
                    >
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </Link>
                    <Link
                        href="https://www.youtube.com/@artoonist_hplus"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-red-800 transition-transform transform hover:scale-110"
                    >
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </Link>
                </div>
                <div>
                    <p className="text-gray-600 text-center text-sm md:text-base leading-relaxed">
                        © {new Date().getFullYear()} Hady | Artoonist Hplus Ltd.
                        <br />
                        <span className="font-semibold text-gray-800">
                            Designed with Passion
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
