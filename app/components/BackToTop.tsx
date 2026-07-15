"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      // Show earlier on mobile (200px) vs desktop (400px)
      const threshold = window.innerWidth < 768 ? 200 : 400;
      setVisible(scrollY > threshold);
    };

    // Multiple event listeners for better mobile support
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    window.addEventListener("touchmove", toggleVisibility, { passive: true });
    window.addEventListener("resize", toggleVisibility, { passive: true });

    // Initial check
    toggleVisibility();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("touchmove", toggleVisibility);
      window.removeEventListener("resize", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      onTouchEnd={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white rounded-full shadow-lg shadow-blue-200/50 transition-all hover:scale-110 active:scale-95 flex items-center justify-center text-2xl font-bold"
      aria-label="Back to top"
      style={{
        touchAction: "manipulation",
        WebkitTapHighlightColor: "transparent",
        WebkitTouchCallout: "none",
      }}
    >
      ↑
    </button>
  );
}