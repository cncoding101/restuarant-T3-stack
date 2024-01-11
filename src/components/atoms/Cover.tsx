import type { ReactNode } from "react";

interface IProps {
  url: string;
  children: ReactNode;
}

const Cover: React.FC<IProps> = ({ url, children }) => {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url('${url}')` }}
    >
      {children}
    </div>
  );
};

export default Cover;
