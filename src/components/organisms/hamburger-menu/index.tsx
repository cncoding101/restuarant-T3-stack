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
      to: "/",
      label: "aktuell",
    },
    {
      to: "/",
      label: "anfahrt",
    },
    {
      to: "/",
      label: "bootshaus",
    },
  ];

  return (
    <div className="container mx-auto flex items-center justify-between">
      <button className="z-50" onClick={(e) => handleClick(e)}>
        <Hamburger />
      </button>

      {isOpen && <Navbar items={items} />}
    </div>
  );
};

export default Nav;
