import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="app-shell">
      <NavBar />
      <div className="content-wrapper">
        <main className="content-area">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
