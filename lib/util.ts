import { useEffect, useState } from "react";

export const useScrolled = () => {
  const [scrolled, setScrolled] = useState(false);

  const setScrollPositionCallback = () => {
    setScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", setScrollPositionCallback);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", setScrollPositionCallback);
      }
    };
  }, []);

  return scrolled;
};
