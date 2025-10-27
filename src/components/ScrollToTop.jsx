import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    const scrollThreshold = window.innerHeight / 2;
    if (window.scrollY > scrollThreshold) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {visible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-4 md:bottom-8 right-4 md:right-8 bg-sky-600 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-sky-700 transition-colors duration-300 z-50"
        >
          <FontAwesomeIcon icon={faArrowUp} size="lg" />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
