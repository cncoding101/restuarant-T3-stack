import { useRouter } from "next/router";

interface IProps {
  to: string;
  label: string;
  className?: string;
}

const Link: React.FC<IProps> = ({ to, label, className }) => {
  const router = useRouter();

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    await router.push(to);
  };

  return <a href={to} onClick={handleClick} className={className}>{label}</a>;
};

export default Link;
