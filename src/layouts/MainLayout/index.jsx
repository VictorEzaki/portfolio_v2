import "./index.css";
import { Outlet } from "react-router-dom";

import Header from "./../../components/Header"
import Footer from "./../../components/Footer"

function MainLayout({ isOpen }) {
  return (
    <div className="main-layout">
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  );
}

export default MainLayout;