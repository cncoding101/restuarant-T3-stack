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
  const items: React.ComponentProps<typeof Layout>["sidebar"]["items"] = [
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
  ];

  const footer: React.ComponentProps<typeof Layout>["sidebar"]["footer"] = {
    icons: [
      {
        icon: "tripadvisor",
        type: "si",
        size: 50,
      },
      {
        icon: "instagram",
        type: "fa",
        size: 50,
      },
      {
        icon: "facebook",
        type: "fa",
        size: 50,
      },
      {
        icon: "yelp",
        type: "fa",
        size: 50,
      },
    ],
  };

  return (
    <SessionProvider session={session}>
      <Cover url="background.jpeg">
        <MyProvider>
          <Layout
            sidebar={{
              items,
              footer,
            }}
          >
            <Component {...pageProps} />
          </Layout>
        </MyProvider>
      </Cover>
    </SessionProvider>
  );
};

export default api.withTRPC(appWithTranslation(MyApp, i18nConfig));
