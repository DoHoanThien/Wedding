import { useState, useEffect } from "react";
import { debounce } from "lodash";

const getSize = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getSize());

  useEffect(() => {
    // Debounce to avoid the function fire multiple times
    const handleResizeDebounced = debounce(() => {
      setWindowSize(getSize());
    }, 250);

    window.addEventListener("resize", handleResizeDebounced);
    return () => window.removeEventListener("resize", handleResizeDebounced);
  }, []);

  return windowSize;
};

export { useWindowSize };
