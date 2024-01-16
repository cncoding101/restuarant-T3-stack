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
      <div className="laptop:w-1/4 bg-transparent-black sticky top-0 min-h-screen">
        <SideBar title={sidebar.title} items={sidebar.items} />
      </div>

      {/* Main content */}
      {state.isOpen && (
        <div className="laptop:w-3/4 phone:absolute flex items-center justify-center h-screen">
          <PopupDialog>{children}</PopupDialog>
        </div>
      )}
    </div>
  );
};

export default Layout;
