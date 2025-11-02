import React from "react";
import profileImage from "../assets/images/personal-image/hadi-pro.jpeg";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <section className="lg:mx-28 p-2">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="m-2 p-4">
                        <h1 className="mb-6 text-3xl font-bold uppercase text-center lg:text-left">
                            about me
                        </h1>
                        <div className="m-2 p-4 lg:hidden">
                            <img
                                className="rounded-md max-w-full max-h-full"
                                src={profileImage}
                                alt="HM Hady"
                            />
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed max-w-prose mx-auto">
                            I am HM Hady, an artist and architecture student at Bangladesh
                            University, Dhaka. My practice is rooted in acrylic, watercolor,
                            and pencil, exploring spirituality, emotion, and the expressive
                            potential of composition to transform inner reflection into visual
                            form. Through deliberate use of color, light, and movement, I aim
                            to convey rhythm, depth, and contemplative presence. Drawing
                            inspiration from sacred symbolism, mystical movement, and
                            emotional experience, my paintings seek to evoke feeling beyond
                            the visible, inviting viewers into a space where introspection,
                            spirituality, and visual harmony converge, creating both resonance
                            and connection.
                        </p>
                        <div className="flex items-center justify-center mt-2">
                            <Link
                                to="/gallery"
                                className="inline-block bg-sky-600 text-white font-bold py-3 px-8 rounded-lg mt-8 text-lg hover:bg-sky-700 transition-colors duration-300"
                            >
                                See Gallery
                            </Link>
                        </div>
                    </div>
                    <div className="m-2 p-4 hidden lg:block">
                        <img
                            className="rounded-3xl max-w-full max-h-full p-4"
                            src={profileImage}
                            alt="HM Hady"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
