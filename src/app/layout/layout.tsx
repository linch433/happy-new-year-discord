import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="flex flex-row min-h-screen">
    <div className="overflow-hidden">{children}</div>
  </div>
);

export default Layout;
