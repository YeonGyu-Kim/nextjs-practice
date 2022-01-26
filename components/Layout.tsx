import NavBar from "./NavBar";

interface IChildren {
  children: React.ReactChild;
}

const Layout = ({ children }: IChildren) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
