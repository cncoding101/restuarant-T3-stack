import React, { useState } from "react";
import styles from "~/components/molecules/hamburger-icon/styles.module.css";

const HamburgerIcon: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${styles.hamburger} space-y-2 p-4`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={`${
          isHovered ? "bg-black" : "bg-navigation-golden"
        } block h-0.5 w-8`}
      ></span>
      <span
        className={`${
          isHovered ? "bg-black" : "bg-navigation-golden"
        } block h-0.5 w-8`}
      ></span>
      <span
        className={`${
          isHovered ? "bg-black" : "bg-navigation-golden"
        } block h-0.5 w-8`}
      ></span>
    </div>
  );
};

export default HamburgerIcon;
