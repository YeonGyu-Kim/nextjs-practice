import NavBar from "./NavBar";

interface IChildren {
  children: React.ReactChild;
}

const Layout = ({ children }: IChildren) => {
  return (
    <>
      <NavBar />
      <section>{children}</section>
    </>
  );
};

export default Layout;
