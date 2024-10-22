import React from "react";
import { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";
import "../App.css";
import {motion} from 'framer-motion';

const UseScrollToTop = () => {
  const [showscroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollToTop);
    return function cleanup() {
      window.removeEventListener("scroll", scrollToTop);
    };
  });

  const scrollToTop = () => {
    if (!showscroll && window.pageYOffset > 400) setShowScroll(true);
    else if (showscroll && window.pageYOffset <= 400) setShowScroll(false);
  };
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <FiChevronUp
        className="scrollToTop"
        onClick={backToTop}
        style={{
          height: 45,
          width: 45,
          borderRadius: 50,
          right: 50,
          bottom: 50,
          display: showscroll ? "flex" : "none",
          padding: 5,
        }}
        
      />
    </>
  );
};
export default UseScrollToTop;
