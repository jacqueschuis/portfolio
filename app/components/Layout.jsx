import Nav from "./Nav";

const Layout = ({ children, dark, active }) => {
  return (
    <main className="h-screen md:p-10 p-4 w-full flex items-center home">
      <div className="w-full h-full bg-white rounded-3xl shadow-2xl flex flex-col items-center relative overflow-y-auto">
        <Nav dark={dark} active={active} />
        {children}
      </div>
    </main>
  );
};

export default Layout;
