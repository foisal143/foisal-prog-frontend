import Aos from 'aos';
import { createContext, useEffect } from 'react';

export const AosContext = createContext(null);
const AosAnimation = ({ children }) => {
  useEffect(() => {
    Aos.init({
      offset: 200,
    });
  }, []);
  const value = {
    value: 0,
  };
  return <AosContext.Provider value={value}>{children}</AosContext.Provider>;
};

export default AosAnimation;
