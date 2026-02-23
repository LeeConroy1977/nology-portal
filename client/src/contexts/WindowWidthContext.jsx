import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

const WindowWidthContext = createContext(undefined);

export function WindowWidthProvider({ children }) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WindowWidthContext.Provider value={width}>
      {children}
    </WindowWidthContext.Provider>
  );
}

export function useWindowWidth() {
  const width = useContext(WindowWidthContext);
  if (width === undefined) {
    throw new Error("useWindowWidth must be used inside WindowWidthProvider");
  }
  return width;
}
