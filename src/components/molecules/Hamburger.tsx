import React, { useState } from "react";


const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className="space-y-2" onClick={(e) => handleClick(e)}>
      <span className="block h-0.5 w-8 bg-navigation-golden"></span>
      <span className="block h-0.5 w-8 bg-navigation-golden"></span>
      <span className="block h-0.5 w-8 bg-navigation-golden"></span>
    </div>
  );
};

export default Nav;
