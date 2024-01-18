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
    <div className="flex">
      {/* Sidebar */}
      <div className="bg-transparent-black min-h-screen min-w-[539px]">
        <SideBar items={sidebar.items} footer={sidebar.footer} />
      </div>

      {/* Main content */}
      {state.isOpen && (
        <div className="phone:absolute flex h-screen items-center justify-center p-4">
          <PopupDialog>{children}</PopupDialog>
        </div>
      )}
    </div>
  );
};

export default Layout;
