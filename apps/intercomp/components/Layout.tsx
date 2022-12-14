import { useNavbar } from "src/app/contexts/NavbarContext";
import styled from "styled-components";
import { Navbar, SideBar } from "./Navigation";

type LayoutWrapperProps = {
  isSidebarOpen: boolean;
};

const LayoutWrapper = styled("main")<LayoutWrapperProps>`
  .layout-main {
    position: relative;
  }

  @media only screen and (min-width: 800px) {
    --sidebar-width: ${(props) => (props.isSidebarOpen ? "210px" : "70px")};

    .layout-main {
      position: absolute;
      top: 0;
      left: var(--sidebar-width);
      width: calc(100% - var(--sidebar-width));
      max-width: calc(100% - var(--sidebar-width));
      transition: all 0.5s ease;
    }
  }

  @media only screen and (min-width: 1200px) {
    --sidebar-width: ${(props) => (props.isSidebarOpen ? "250px" : "70px")};
  }

  @media only screen and (min-width: 1900px) {
    --sidebar-width: ${(props) => (props.isSidebarOpen ? "322px" : "70px")};
  }
`;

export type LayoutProps = React.ComponentPropsWithoutRef<"main"> & {
  title: string;
};

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { children, title } = props;

  const { isOpen } = useNavbar();

  return (
    <LayoutWrapper isSidebarOpen={isOpen}>
      <SideBar />
      <div className="layout-main">
        <Navbar titleNav={title} />
        {children}
      </div>
    </LayoutWrapper>
  );
};

export default Layout;
