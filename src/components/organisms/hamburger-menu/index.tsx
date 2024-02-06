import React, { useEffect, useRef, useState } from "react";
import Hamburger from "~/components/molecules/hamburger-icon";
import Navbar from "~/components/molecules/navbar";
import styles from "~/components/organisms/hamburger-menu/styles.module.css";

interface IProps {
  items: React.ComponentProps<typeof Navbar>["items"];
}

const Nav: React.FC<IProps> = ({ items }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
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
