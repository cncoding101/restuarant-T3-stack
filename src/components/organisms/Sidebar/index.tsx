import React from "react";
import Logo from "~/components/atoms/Logo";
import Link from "~/components/atoms/Link";
import Hamburger from "~/components/molecules/Hamburger";
import styles from "~/components/organisms/Sidebar/styles.module.css";

interface IProps {
  title: string;
  items: React.ComponentProps<typeof Link>[];
}

const Sidebar: React.FC<IProps> = ({ title, items }) => {
  return (
    <div
      className={`${styles.navigation} bg-transparent-black sticky top-0 min-h-screen w-1/4 p-4`}
    >
      <Hamburger/>

      <div className="flex flex-col items-center">
        <Logo url="logo.png" alt="boothaus-logo" scale={100} />

        <h1 className="mt-5 text-4xl">{title}</h1>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <Link to={item.to} label={item.label} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
