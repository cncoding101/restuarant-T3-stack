import React from "react";

type Items = {
  to: string;
  label: string;
};

interface IProps {
  items: Items[];
}

const Navbar: React.FC<IProps> = ({ items }) => {
  return (
    <div className="absolute left-0 top-0 flex h-3/5 w-full flex-col items-center justify-center bg-black">
      {items.map((item, index) => (
        <a href={item.to} key={index} className="text-4xl uppercase p-3">
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default Navbar;
