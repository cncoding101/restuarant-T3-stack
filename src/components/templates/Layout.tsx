import type { ReactNode } from "react";
import SideBar from "~/components/organisms/sidebar";
import PopupDialog from "~/components/organisms/popup-dialog";
import { useMyContext } from "~/contexts/PopupDialog";

interface IProps {
  sidebar: React.ComponentProps<typeof SideBar>;
  children: ReactNode;
}

const Layout: React.FC<IProps> = ({ sidebar, children }) => {
  const { state } = useMyContext();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-transparent-black phone:z-10 laptop:min-w-[539px]">
        <SideBar items={sidebar.items} footer={sidebar.footer} />
      </div>

      {/* Main content */}
      <div
        className={`${
          state.isOpen ? "phone:z-10" : ""
        } flex items-center justify-center p-4 phone:absolute laptop:flex-grow`}
      >
        <PopupDialog>{children}</PopupDialog>
      </div>
    </div>
  );
};

export default Layout;
