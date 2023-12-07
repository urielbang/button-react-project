import { useState, createContext, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvidor({ children }) {
  const [currenPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);
    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);
  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };
  return (
    <NavigationContext.Provider value={{ currenPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}
export { NavigationProvidor };
export default NavigationContext;
