import React, { useEffect, useRef, useState } from "react";
import Hamburger from "~/components/molecules/hamburger-icon";
import Navbar from "~/components/molecules/navbar";
import styles from "~/components/organisms/hamburger-menu/styles.module.css";
import { PAGES } from "~/utils/constants";

const Nav: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    console.log("inside here");
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClick = (e: Event) => {
      if (isOpen && ref.current && !ref.current.contains(e.target as Node))
        setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, setIsOpen, isOpen]);

  const items: React.ComponentProps<typeof Navbar>["items"] = [
    {
      to: PAGES.news,
      label: "aktuell",
    },
    {
      to: PAGES.contactUs,
      label: "anfahrt",
    },
    {
      to: PAGES.aboutUs,
      label: "bootshaus",
    },
  ];

  return (
    <div
      ref={ref}
      className={`${
        isOpen ? "z-40" : ""
      } sticky top-0 flex items-center justify-between`}
    >
      <button className="z-50" onClick={handleClick}>
        <Hamburger />
      </button>

      <div
        className={`${
          isOpen ? styles["transition-open"] : styles["transition-close"]
        } absolute left-0 top-0 flex w-full flex-col justify-center bg-black`}
      >
        <Navbar items={items} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default Nav;
