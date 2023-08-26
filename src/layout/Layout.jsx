import Navbar from "../components/Navbar";

const Layout = (props) => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="px-4 mb-2 lg:px-40 lg:pt-10 pt-5">{props.children}</div>
      <footer className="px-4 lg:px-40 bottom-0 sticky flex items-center left-0 w-full h-16 bg-slate-800">
        <p className="w-full text-slate-100 right-0 text-2xl text-center">
          2023 &copy; powered by Ronalis, S.Kom
        </p>
      </footer>
    </div>
  );
};

export default Layout;
