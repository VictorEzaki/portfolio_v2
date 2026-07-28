import "./tecnologias.css";

import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaNodeJs,
    FaPhp,
    FaLaravel,
    FaVuejs,
    FaDatabase,
    FaLinux,
    FaFigma
} from "react-icons/fa";

import {
    SiTypescript,
    SiMysql,
    SiPostman,
    SiJest,
    SiExpress,
    SiJsonwebtokens,
    SiSequelize,
    SiSharp
} from "react-icons/si";

export default function Tecnologias() {
    return (
        <section className="tech-section">

            <header className="tech-header">
                <h1>Tecnologias</h1>
                <p>Ferramentas que fazem parte do meu inventário.</p>
            </header>

            <div className="tech-icons">

                <FaHtml5 />
                <FaCss3Alt />
                <FaJsSquare />
                <FaReact />
                <FaVuejs />
                <FaNodeJs />
                <FaPhp />
                <FaLaravel />
                <SiTypescript />
                <SiMysql />
                <SiJest />
                <SiExpress />
                <SiPostman />
                <SiSequelize />
                <SiJsonwebtokens />
                <SiSharp />
                <FaLinux />

            </div>

            <div className="tech-grid">

                <article className="tech-card">
                    <h2><FaReact /> Front-end</h2>

                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>React + Vite</li>
                        <li>Vue 3</li>
                        <li>Figma</li>
                    </ul>
                </article>

                <article className="tech-card">
                    <h2><FaNodeJs /> Back-end</h2>

                    <ul>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>PHP</li>
                        <li>Laravel</li>
                        <li>Sequelize</li>
                        <li>bcrypt</li>
                        <li>JWT</li>
                    </ul>
                </article>

                <article className="tech-card">
                    <h2><FaDatabase /> Banco de Dados</h2>

                    <ul>
                        <li>MySQL</li>
                        <li>PostgreSQL</li>
                    </ul>
                </article>

                <article className="tech-card">
                    <h2><SiJest /> Testes</h2>

                    <ul>
                        <li>Jest</li>
                        <li>pestPHP</li>
                    </ul>
                </article>

                <article className="tech-card">
                    <h2><FaLinux /> Sistema Operacional</h2>

                    <ul>
                        <li>Ubuntu Linux</li>
                    </ul>
                </article>

            </div>

        </section>
    );
}