import React from "react";
import Text from "~/components/atoms/Text";
import Logo from "~/components/atoms/Logo";
import Link from "~/components/atoms/Link";
import Download from "~/components/atoms/Download";
import Footer from "~/components/organisms/Footer";
import HamburgerMenu from "~/components/organisms/hamburger-menu";

interface IDownload {
  type: "download";
  props: React.ComponentProps<typeof Download>;
}

interface ILink {
  type: "link";
  props: React.ComponentProps<typeof Link> & { label: string };
}

interface IProps {
  items: (ILink | IDownload)[];
  hamburgerMenu: React.ComponentProps<typeof HamburgerMenu>;
  footer: React.ComponentProps<typeof Footer>;
}

const Sidebar: React.FC<IProps> = ({ items, hamburgerMenu, footer }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <HamburgerMenu {...hamburgerMenu} />

      <div className="flex flex-grow flex-col items-center">
        <Logo
          url="logo.png"
          alt="boothaus-logo"
          scale={100}
          to="/about-us"
          className="px-2"
        />
        <Text variant="heading" className="mb-3 mt-9">
          dienstag - samstag
        </Text>

        <Text variant="paragraph" className="my-1">
          dinner | 17<sup>30</sup>-21<sup>30</sup>
        </Text>

        <Text variant="paragraph" className="my-1">
          bar | 17<sup>30</sup> - 00<sup>00</sup>
        </Text>

        <ul className="my-4 flex flex-col items-center">
          {items.map((item, index) => {
            const { type, props } = item;
            switch (type) {
              case "download":
                return (
                  <li key={index}>
                    <Download
                      fileName={props.fileName}
                      extension={props.extension}
                      label={props.label}
                    />
                  </li>
                );

              case "link":
                return (
                  <li key={index}>
                    <Link to={props.to}>
                      <Text variant="label">{props.label}</Text>
                    </Link>
                  </li>
                );
            }
          })}
        </ul>
      </div>

      {/* table reservation */}

      {/* footer */}
      <div className="flex flex-col items-center">
        <Footer {...footer}></Footer>
      </div>
    </div>
  );
};

export default Sidebar;
