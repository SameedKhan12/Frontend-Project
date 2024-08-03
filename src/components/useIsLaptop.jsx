import { useEffect,useState } from "react";

const useIsLaptop = () => {
  const [isLaptop, setIsLaptop] = useState(window.innerWidth < 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth < 1280);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array means this effect runs once on mount

  return isLaptop;
};

export default useIsLaptop