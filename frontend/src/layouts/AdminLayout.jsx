import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AdminLayout = ({ children }) => {
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

export default AdminLayout;
