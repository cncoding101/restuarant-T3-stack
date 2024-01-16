import React from "react";
import Logo from "~/components/atoms/Logo";
import Link from "~/components/atoms/Link";
import HamburgerMenu from "~/components/organisms/hamburger-menu";

interface IProps {
  title: string;
  items: React.ComponentProps<typeof Link>[];
}

const Sidebar: React.FC<IProps> = ({ title, items }) => {
  return (
    <>
      <HamburgerMenu />

      <div className="flex flex-col items-center px-4">
        <Logo url="logo.png" alt="boothaus-logo" scale={100} />

        <h1 className="mt-12">{title}</h1>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <Link to={item.to} label={item.label} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
