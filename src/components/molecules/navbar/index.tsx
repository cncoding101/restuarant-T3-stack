import React from "react";
import router from "next/router";
import Text from "~/components/atoms/text";
import { useMyContext } from "~/contexts/PopupDialog";

type Items = {
  to: string;
  label: string;
};

interface IProps {
  items: Items[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<IProps> = ({ items, isOpen, setIsOpen }) => {
  const { dispatch } = useMyContext();

  const handleClick = async (to: string) => {
    setIsOpen(false);
    dispatch({ type: "OPEN" });
    await router.push({ pathname: to });
  };

  return (
    <>
      {items.map((item, index) => (
        <button
          disabled={!isOpen}
          className={`${
            index === 0 ? "mt-12" : ""
          } flex w-full justify-center py-3`}
          key={index}
          onClick={() => handleClick(item.to)}
        >
          <Text variant="title">{item.label}</Text>
        </button>
      ))}
    </>
  );
};

export default Navbar;
