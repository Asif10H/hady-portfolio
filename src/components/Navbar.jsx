import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="lg:px-30 flex items-center justify-between px-6 py-4 shadow-md bg-white">
            <div>
                <Link href="/" className="text-2xl font-bold flex items-center" to="/">
                    <span className="bg-sky-600 text-white rounded-md px-2 py-0.5">Hady's</span>
                    <span className="text-gray-700 ml-2 font-semibold">Portfolio</span>
                </Link>
            </div>
            <ul className="hidden lg:flex space-x-6">
                <Link className="uppercase font-semibold hover:text-blue-600" to="/">
                    Home
                </Link>
                <Link className="uppercase font-semibold hover:text-blue-600" to="/gallery">
                    gallery
                </Link>
                <Link className="uppercase font-semibold hover:text-blue-600" to="/available">
                    available
                </Link>
                <Link className="uppercase font-semibold hover:text-blue-600" to="/about">
                    about me
                </Link>
                <Link className="uppercase font-semibold hover:text-blue-600" to="/contact">
                    contact
                </Link>
            </ul>

            <div className="lg:hidden">
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>

            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-start space-y-4 px-8 py-4 p-4 lg:hidden">
                    <Link className="uppercase font-semibold hover:text-blue-600" to="/" onClick={() => setOpen(false)}>
                        Home
                    </Link>
                    <Link className="uppercase font-semibold hover:text-blue-600" to="/gallery" onClick={() => setOpen(false)}>
                        gallery
                    </Link>
                    <Link className="uppercase font-semibold hover:text-blue-600" to="/available" onClick={() => setOpen(false)}>
                        available
                    </Link>
                    <Link className="uppercase font-semibold hover:text-blue-600" to="/about" onClick={() => setOpen(false)}>
                        About
                    </Link>
                    <Link className="border-2 rounded-2xl p-1 bg-sky-600 text-white uppercase font-semibold hover:bg-sky-700" to="/contact" onClick={() => setOpen(false)}>
                        Contact
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;
