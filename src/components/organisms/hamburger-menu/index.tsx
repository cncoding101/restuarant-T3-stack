import React, { useState } from "react";
import Hamburger from "~/components/molecules/hamburger-icon";
import Navbar from "~/components/molecules/navbar";

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const items: React.ComponentProps<typeof Navbar>["items"] = [
    {
      to: "/news",
      label: "aktuell",
    },
    {
      to: "/about-us",
      label: "anfahrt",
    },
    {
      to: "/contact-us",
      label: "bootshaus",
    },
  ];

  return (
    <div className="z-10 flex items-center justify-between sticky top-0">
      <button className="z-50" onClick={(e) => handleClick(e)}>
        <Hamburger />
      </button>

      {isOpen && <Navbar items={items} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Nav;
