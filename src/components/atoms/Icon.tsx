import React, { useEffect, useState } from "react";

type Variant = keyof typeof REACT_ICONS;

interface IProps {
  name: Variant;
}

const REACT_ICONS = {
  close: "IoMdClose",
  facebook: "FaFacebookSquare",
  instagram: "FaInstagram",
  tripadvisor: "SiTripadvisor",
  yelp: "FaYelp",
} as const;

const Icon: React.FC<IProps> = ({ name }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [IconComponent, setIconComponent] = useState<Module | null>(null);

  useEffect(() => {
    const importIcon = async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { default: DynamicIcon } = await import(`react-icons/${icon}`);
        setIconComponent(DynamicIcon);
      } catch (err) {
        console.error("An error occured when importing the icon", err);
      }
    };

    void importIcon();
  }, [name]);

  return <IconComponent></IconComponent>;
};

export default Icon;
