import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <button className={`scroll-to-top-button`} onClick={scrollToTop}>
        Top <FaArrowUp />
      </button>
    )
  );
};

export default ScrollToTopButton;
