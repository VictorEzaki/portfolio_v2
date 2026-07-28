import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { projects } from "../../data/projects.js";
import "./NavBar.css";

const mainMenu = [
  { to: "/", label: "Sobre", end: true },
  { to: "/tech", label: "Tecnologias Dominadas" },
  { to: "/projetos", label: "Projetos", isProjectsTrigger: true },
  { to: "/contato", label: "Contato" },
];

function NavBar() {
  const [showProjects, setShowProjects] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Se o usuário recarregar a página ou usar o botão "voltar" do navegador
  // numa rota de /projetos, o submenu já abre certo.
  useEffect(() => {
    setShowProjects(location.pathname.startsWith("/projetos"));
  }, [location.pathname]);
  
  function handleProjectsClick(e) {
    e.preventDefault();
    setShowProjects(true);
    navigate("/projetos");
  }
  
  function handleBackClick() {
    setShowProjects(false);
    navigate("/");
  }
  
  return (
    <nav className="side-nav">
    <div className="side-nav-title">MENU</div>
    
    {!showProjects && (
      <ul className="side-nav-list">
      {mainMenu.map((item, index) => (
        <li key={item.to} style={{ animationDelay: `${index * 80}ms` }}>
        {item.isProjectsTrigger ? (
          <a
          href={item.to}
          className="nav-link pixel-round-sm"
          onClick={handleProjectsClick}
          >
          {item.label}
          </a>
        ) : (
          <NavLink
          to={item.to}
          end={item.end}
          className={({ isActive }) =>
            "nav-link pixel-round-sm" + (isActive ? " active" : "")
        }
        >
        {item.label}
        </NavLink>
      )}
      </li>
    ))}
    </ul>
  )}
  
  {showProjects && (
    <ul className="side-nav-list">
    <li style={{ animationDelay: "0ms" }}>
    <button
    type="button"
    className="nav-link nav-back pixel-round-sm"
    onClick={handleBackClick}
    >
    &laquo; Voltar
    </button>
    </li>
    {projects.map((project, index) => (
      <li
      key={project.id}
      style={{ animationDelay: `${(index + 1) * 80}ms` }}
      >
      <NavLink
      to={`/projetos/${project.id}`}
      className={({ isActive }) =>
        "nav-link pixel-round-sm" + (isActive ? " active" : "")
    }
    >
    {project.title}
    </NavLink>
    </li>
  ))}
  </ul>
)}
</nav>
);
}

export default NavBar;