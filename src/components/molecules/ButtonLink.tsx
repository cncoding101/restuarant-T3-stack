import type { ReactNode } from "react";
import Link from "~/components/atoms/Link";

interface IProps {
  to: string;
  children: ReactNode;
  className?: string;
}

const ButtonIcon: React.FC<IProps> = ({ to, children, className = "" }) => {
  return (
    <button className={className}>
      <Link to={to}>{children}</Link>
    </button>
  );
};

export default ButtonIcon;
