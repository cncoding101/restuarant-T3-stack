import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { useMyContext } from "~/contexts/PopupDialog";

import { PAGES } from "~/utils/constants";
import type { Page } from "~/utils/types";

interface IProps {
  to: string;
  children: ReactNode;
  className?: string;
}

const Link: React.FC<IProps> = ({ to, children, className }) => {
  const router = useRouter();
  const { dispatch } = useMyContext();

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (PAGES.includes(to as Page)) dispatch({ type: "OPEN" });
    await router.push(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default Link;
