import type { ReactNode } from "react";
import SideBar from "~/components/organisms/sidebar";
import PopupDialog from "~/components/organisms/popup-dialog";
import { useMyContext } from "~/contexts/PopupDialog";
import Head from "next/head";

interface IProps {
  sidebar: React.ComponentProps<typeof SideBar>;
  children: ReactNode;
}

const Layout: React.FC<IProps> = ({ sidebar, children }) => {
  const { state } = useMyContext();

  return (
    <>
      <Head>
        <title>Boothaus</title>
        <link rel="icon" href="/logo_head.png" />
      </Head>

      <main className="flex h-screen">
        {/* Sidebar */}
        <section className="bg-transparent-black phone:z-10 phone:w-full laptop:min-w-[539px]">
          <SideBar {...sidebar} />
        </section>

        {/* Main content */}
        <section
          className={`${
            state.isOpen ? "phone:z-10" : "pointer-events-none"
          } flex items-center justify-center p-4 phone:absolute laptop:flex-grow`}
        >
          <PopupDialog>{children}</PopupDialog>
        </section>
      </main>
    </>
  );
};

export default Layout;
