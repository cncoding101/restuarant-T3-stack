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
        <aside className="bg-transparent-black phone:z-10 laptop:min-w-[539px]">
          <SideBar items={sidebar.items} footer={sidebar.footer} />
        </aside>

        {/* Main content */}
        <div
          className={`${
            state.isOpen ? "phone:z-10" : ""
          } flex items-center justify-center p-4 phone:absolute laptop:flex-grow`}
        >
          <PopupDialog>{children}</PopupDialog>
        </div>
      </main>
    </>
  );
};

export default Layout;
