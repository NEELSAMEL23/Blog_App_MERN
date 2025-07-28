import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/UserSidebar"; // optional, or reuse Sidebar

const UserLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4 bg-gray-50">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default UserLayout;
