import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="flex flex-row min-h-screen">
    <div>{children}</div>
  </div>
);

export default Layout;
