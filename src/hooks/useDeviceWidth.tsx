import { useEffect, useState } from "react";

export default function useDeviceWidth() {
  const [width, setWidth] = useState<number>(0);

  function handleResize() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  return width;
}
