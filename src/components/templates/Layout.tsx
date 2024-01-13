import type { ReactNode } from "react";
import SideBar from "~/components/organisms/sidebar";

interface IProps {
  sidebar: React.ComponentProps<typeof SideBar>;
  children: ReactNode;
}

const Layout: React.FC<IProps> = ({ sidebar, children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SideBar title={sidebar.title} items={sidebar.items} />

      {/* Main content */}
      <div className="w-3/4 p-4">{children}</div>
    </div>
  );
};

export default Layout;
