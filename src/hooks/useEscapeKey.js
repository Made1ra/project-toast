import { useEffect } from "react";

export function useEscapeKey(callback) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        callback();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback]);
}
