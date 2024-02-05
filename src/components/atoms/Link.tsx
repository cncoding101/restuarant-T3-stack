import { useRouter } from "next/router";
import { useMyContext } from "~/contexts/PopupDialog";

import { PAGES } from "~/utils/constants";
import type { Page } from "~/utils/types";

interface IProps {
  to: string;
  label: string;
  className?: string;
}

const Link: React.FC<IProps> = ({ to, label, className }) => {
  const router = useRouter();
  const { dispatch } = useMyContext();

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (PAGES.includes(to as Page)) dispatch({ type: "OPEN" });
    await router.push(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {label}
    </a>
  );
};

export default Link;
