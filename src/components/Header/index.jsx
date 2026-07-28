import "./index.css";
import NavBar from "./../NavBar";

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <span className="header-logo">VICTOR EZAKI</span>
        <NavBar />
      </div>
    </header>
  );
}

export default Header;