import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { appWithTranslation } from "next-i18next";

// start: components
import Cover from "~/components/atoms/Cover";
import Layout from "~/components/templates/Layout";
// end: components

// start: contexts
import { MyProvider } from "~/contexts/PopupDialog";
// end: contexts

import { api } from "~/utils/api";
import i18nConfig from "../../next-i18next.config.mjs";

import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const sidebar: React.ComponentProps<typeof Layout>["sidebar"] = {
    items: [
      {
        type: "download",
        props: {
          fileName: "menu_de",
          extension: "pdf",
          label: "Speisekarte (PDF)",
        },
      },
      {
        type: "download",
        props: {
          fileName: "menu_eng",
          extension: "pdf",
          label: "Menu (PDF)",
        },
      },
    ],
    hamburgerMenu: {
      items: [
        {
          to: "/news",
          label: "aktuell",
        },
        {
          to: "/contact-us",
          label: "anfahrt",
        },
        {
          to: "/about-us",
          label: "bootshaus",
        },
      ],
    },
    footer: {
      links: [
        {
          to: "https://www.tripadvisor.de/Restaurant_Review-g187331-d13201843-Reviews-Bootshaus_Grill_und_Bar-Hamburg.html",
          icon: { icon: "tripadvisor", type: "si", size: 40 },
        },
        {
          to: "https://www.instagram.com/explore/locations/389354571419999/germany/hamburg-germany/bootshaus-grill-bar/?hl=de",
          icon: {
            icon: "instagram",
            type: "fa",
            size: 40,
          },
        },
        {
          to: "https://www.facebook.com/GrillBarBootHafencity/",
          icon: {
            icon: "facebook",
            type: "fa",
            size: 40,
          },
        },
        {
          to: "https://www.yelp.com/biz/bootshaus-grill-und-bar-hamburg",
          icon: {
            icon: "yelp",
            type: "fa",
            size: 40,
          },
        },
      ],
      contact: {
        phone: {
          number: "040 - 33473744",
          size: 25,
        },
        email: {
          address: "RESERVIERUNG@BOOTSHAUS-HAFENCITY.DE",
          size: 25,
        },
        location: {
          to: "/contact-us",
          label: "KAISERKAI 19",
          size: 25,
        },
      },
    },
  };

  return (
    <SessionProvider session={session}>
      <Cover url="background.jpeg">
        <MyProvider>
          <Layout sidebar={sidebar}>
            <Component {...pageProps} />
          </Layout>
        </MyProvider>
      </Cover>
    </SessionProvider>
  );
};

export default api.withTRPC(appWithTranslation(MyApp, i18nConfig));
