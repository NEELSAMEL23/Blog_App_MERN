import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { user } = useAuth(); // ✅ Check if user is logged in

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar fixed */}
      <Navbar onToggle={() => setIsSidebarOpen((prev) => !prev)} />

      <div className="flex flex-1 pt-14"> {/* pt-14 = navbar height */}
        {/* Sidebar only when logged in */}
        {user && <Sidebar isOpen={isSidebarOpen} />}

        {/* Main content area */}
        <div
          className={`flex-1 flex flex-col transition-all duration-300 
            ${user
              ? isSidebarOpen
                ? "ml-64"
                : "ml-16"
              : "ml-0"
            }`}
        >
          <main className="flex-1 p-6 bg-gray-50">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
