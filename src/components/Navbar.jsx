import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md lg:px-30 flex items-center justify-between px-6 py-4">
      <div>
        <NavLink to="/" className="text-2xl font-bold flex items-center">
          <span className="bg-sky-600 text-white rounded-md px-2 py-0.5">
            Hady's
          </span>
          <span className="text-gray-700 ml-2 font-semibold">Portfolio</span>
        </NavLink>
      </div>

      <ul className="hidden lg:flex space-x-6">
        {[
          { to: "/", label: "Home" },
          { to: "/gallery", label: "Gallery" },
          { to: "/available", label: "Available" },
          { to: "/about", label: "About" },
          { to: "/contact", label: "Contact" },
        ].map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `uppercase font-semibold transition-colors duration-300 ${
                isActive
                  ? "text-sky-600 border-b-3 border-sky-600"
                  : "text-gray-700 hover:text-sky-600"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </ul>

      <div className="lg:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-start space-y-4 px-8 py-4 lg:hidden">
          {[
            { to: "/", label: "Home" },
            { to: "/gallery", label: "Gallery" },
            { to: "/available", label: "Available" },
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                item.label === "Contact"
                  ? "border-2 rounded-md px-3 py-1 bg-sky-600 text-white uppercase font-semibold hover:bg-sky-700 transition"
                  : `uppercase font-semibold transition-colors duration-300 ${
                      isActive
                        ? "text-sky-600 border-b-3 border-sky-600"
                        : "text-gray-700 hover:text-sky-600"
                    }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
