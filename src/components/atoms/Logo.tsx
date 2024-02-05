import Image from "next/image";
import { useRouter } from "next/router";
import { useMyContext } from "~/contexts/PopupDialog";

import { PAGES } from "~/utils/constants";
import type { Page } from "~/utils/types";

interface IProps {
  url: string;
  alt?: string;
  to?: string;
  scale?: number;
  className?: string;
}

const Logo: React.FC<IProps> = ({
  url,
  alt = "",
  to,
  scale = 100,
  className,
}) => {
  const router = useRouter();
  const { dispatch } = useMyContext();

  const handleClick = async (e: React.MouseEvent) => {
    if (!to) return;

    e.preventDefault();

    if (PAGES.includes(to as Page)) dispatch({ type: "OPEN" });
    await router.push({ pathname: to });
  };

  return (
    <Image
      src={`/${url}`}
      alt={alt}
      width={500}
      height={500}
      onClick={(e) => handleClick(e)}
      className={`scale-${scale} ${className}`}
    />
  );
};

export default Logo;
