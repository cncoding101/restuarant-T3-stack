import { useEffect, useState } from "react";

const threshold = {
  phone: 600,
} as const;

const usePhoneView = () => {
  const [isPhoneView, setIsPhoneView] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsPhoneView(window.innerWidth < threshold.phone);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setIsPhoneView]);

  return isPhoneView;
};

export { usePhoneView };
