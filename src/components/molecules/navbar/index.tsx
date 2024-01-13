import React from "react";
import router from "next/router";
import { useMyContext } from "~/contexts/PopupDialog";

type Items = {
  to: string;
  label: string;
};

interface IProps {
  items: Items[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<IProps> = ({ items, setIsOpen }) => {
  const { dispatch } = useMyContext();

  const handleClick = async (to: string) => {
    setIsOpen(false);
    dispatch({ type: "OPEN" });
    await router.push({ pathname: to });
  };

  return (
    <div className="absolute left-0 top-0 z-40 flex w-full flex-col justify-center bg-black">
      {items.map((item, index) => (
        <button
          className={`text-4xl uppercase hover:bg-gray-200 ${
            index === 0 ? "mt-12" : ""
          }  flex w-full justify-center py-4`}
          key={index}
          onClick={() => handleClick(item.to)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Navbar;
