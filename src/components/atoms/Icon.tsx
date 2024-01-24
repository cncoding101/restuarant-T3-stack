import dynamic from "next/dynamic";

type Type = keyof typeof REACT_ICONS;
type Variant = IoVariant | FaVariant | SiVariant;
type IoVariant = keyof typeof REACT_ICONS.io;
type FaVariant = keyof typeof REACT_ICONS.fa;
type SiVariant = keyof typeof REACT_ICONS.si;

interface IProps {
  type: Type;
  icon: Variant;
  size?: number;
  color?: string;
  className?: string;
}

const REACT_ICONS = {
  io: {
    close: "IoMdClose",
  },
  fa: {
    yelp: "FaYelp",
    facebook: "FaFacebookSquare",
    instagram: "FaInstagram",
  },
  si: {
    tripadvisor: "SiTripadvisor",
  },
} as const;

const ICON_TYPES = Object.keys(REACT_ICONS) as Type[];

const Icon: React.FC<IProps> = ({ icon, type, color, size, className }) => {
  if (!ICON_TYPES.includes(type)) return <></>;

  let IconComponent = null;
  switch (type) {
    // NOTE next dynamic import can not be string interporlated!
    case "fa":
      IconComponent = dynamic(
        () =>
          import("react-icons/fa").then(
            (icons) => icons[REACT_ICONS.fa[icon as FaVariant]]!,
          ),
      );
      break;

    case "io":
      IconComponent = dynamic(
        () =>
          import("react-icons/io").then(
            (icons) => icons[REACT_ICONS.io[icon as IoVariant]]!,
          ),
      );
      break;

    case "si":
      IconComponent = dynamic(
        () =>
          import("react-icons/si").then(
            (icons) => icons[REACT_ICONS.si[icon as SiVariant]]!,
          ),
      );
      break;
  }

  return <IconComponent color={color} size={size} className={className} />;
};

export default Icon;
