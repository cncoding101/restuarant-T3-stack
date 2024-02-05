import dynamic from "next/dynamic";

type Type = keyof typeof REACT_ICONS;
type Variant = IoVariant | FaVariant | Fa6Variant | SiVariant | MdVariant;
type IoVariant = keyof typeof REACT_ICONS.io;
type FaVariant = keyof typeof REACT_ICONS.fa;
type Fa6Variant = keyof typeof REACT_ICONS.fa6;
type SiVariant = keyof typeof REACT_ICONS.si;
type MdVariant = keyof typeof REACT_ICONS.md;

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
    phone: "FaPhoneAlt",
  },
  fa6: {
    location: "FaLocationDot",
  },
  si: {
    tripadvisor: "SiTripadvisor",
  },
  md: {
    parking: "MdLocalParking",
    email: "MdEmail",
  },
} as const;

const ICON_TYPES = Object.keys(REACT_ICONS) as Type[];

const Icon: React.FC<IProps> = ({ icon, type, color, size, className }) => {
  if (!ICON_TYPES.includes(type)) return;

  let IconComponent = null;
  switch (type) {
    // NOTE next dynamic import can not be string interporlated!
    case "fa":
      if (!REACT_ICONS.fa[icon as FaVariant]) return;

      IconComponent = dynamic(() =>
        import("react-icons/fa").then(
          (icons) => icons[REACT_ICONS.fa[icon as FaVariant]],
        ),
      );
      break;

    case "fa6":
      if (!REACT_ICONS.fa6[icon as Fa6Variant]) return;
      IconComponent = dynamic(() =>
        import("react-icons/fa6").then(
          (icons) => icons[REACT_ICONS.fa6[icon as Fa6Variant]],
        ),
      );
      break;

    case "io":
      if (!REACT_ICONS.io[icon as IoVariant]) return;
      IconComponent = dynamic(() =>
        import("react-icons/io").then(
          (icons) => icons[REACT_ICONS.io[icon as IoVariant]],
        ),
      );
      break;

    case "si":
      if (!REACT_ICONS.si[icon as SiVariant]) return;
      IconComponent = dynamic(() =>
        import("react-icons/si").then(
          (icons) => icons[REACT_ICONS.si[icon as SiVariant]],
        ),
      );
      break;

    case "md":
      if (!REACT_ICONS.md[icon as MdVariant]) return;
      IconComponent = dynamic(() =>
        import("react-icons/md").then(
          (icons) => icons[REACT_ICONS.md[icon as MdVariant]],
        ),
      );
      break;
  }

  return <IconComponent color={color} size={size} className={className} />;
};

export default Icon;
