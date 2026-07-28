import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import "./projeto.css";

export default function Projeto() {
  const { id } = useParams();

console.log("ID recebido:", id);
console.log("Projetos:", projects);

const projeto = projects.find((p) => p.id === id);

  if (!projeto) {
    return (
      <section className="project-page">
        <h1 className="page-title">Projeto não encontrado</h1>
      </section>
    );
  }

  return (
    <section className="project-page">
      <header className="project-header">
        <h1 className="page-title">{projeto.title}</h1>

        <p className="project-description">
          {projeto.description}
        </p>
      </header>

      {projeto.technologies && (
        <section className="project-section">
          <h2>Tecnologias</h2>

          <div className="tech-list">
            {projeto.technologies.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </section>
      )}

      <section className="project-section">
        <h2>Links</h2>

        <div className="project-links">
          {projeto.github && (
            <a
              href={projeto.github}
              target="_blank"
              rel="noreferrer"
              className="project-button"
            >
              GitHub
            </a>
          )}

          {projeto.demo && (
            <a
              href={projeto.demo}
              target="_blank"
              rel="noreferrer"
              className="project-button"
            >
              Demonstração
            </a>
          )}
        </div>
      </section>
    </section>
  );
}