import Navbar from "../components/Navbar";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <div className="px-4 lg:px-40 lg:pt-10 pt-5">{props.children}</div>
    </>
  );
};

export default Layout;
