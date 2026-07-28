import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="app-shell">
      <div className="main-row">
        <NavBar />
        <div className="content-area">
          <main className="page-card pixel-round-lg">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
