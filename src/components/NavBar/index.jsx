import { Link } from "react-router-dom";
import "./index.css";

function NavBar() {
  return (
    <nav className="nav-bar">
      <Link className="nav-link pixel-round-sm" to="/">Sobre</Link>
      <Link className="nav-link pixel-round-sm" to="/tech">Tecnologias Dominadas</Link>
      <Link className="nav-link pixel-round-sm" to="/projetos">Projetos</Link>
      <Link className="nav-link pixel-round-sm" to="/contato">Contato</Link>
    </nav>
  );
}

export default NavBar;