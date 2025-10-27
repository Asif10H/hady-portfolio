import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
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
      <div
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-sky-600 text-white p-4 rounded-full cursor-pointer shadow-lg hover:bg-sky-700 transition-colors duration-300 z-50"
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faArrowUp} size="lg" />
      </div>
    </>
  );
};

export default ScrollToTop;
