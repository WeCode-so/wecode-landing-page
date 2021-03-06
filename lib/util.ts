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

export const useScrollY = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrollTop;
};

export const useViewportHeight = () => {
  const [canvasHeight, setCanvasHeight] = useState(0);

  useEffect(() => {
    const resizeCanvas = () => {
      setCanvasHeight(window.innerHeight);
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return canvasHeight;
};

export const getCoords = (elem: HTMLElement) => {
  // crossbrowser version
  let box = elem.getBoundingClientRect();

  let body = document.body;
  let docEl = document.documentElement;

  let scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  let scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  let clientTop = docEl.clientTop || body.clientTop || 0;
  let clientLeft = docEl.clientLeft || body.clientLeft || 0;

  let top = box.top + scrollTop - clientTop;
  let left = box.left + scrollLeft - clientLeft;

  return { top: Math.round(top), left: Math.round(left) };
};
