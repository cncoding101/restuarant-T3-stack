import Image from "next/image";
import { useRouter } from "next/router";

interface IProps {
  url: string;
  alt?: string;
  to?: string;
  scale?: number;
}

const Logo: React.FC<IProps> = ({ url, alt = "", to, scale = 100 }) => {
  const router = useRouter();

  const handleClick = async (e: React.MouseEvent) => {
    if(!to) return;

    e.preventDefault();
    await router.push(to);
  };

  return (
    <Image
      src={`/${url}`}
      alt={alt}
      width={500}
      height={500}
      onClick={(e) => handleClick(e)}
      className={`scale-${scale}`}
    />
  );
};

export default Logo;
