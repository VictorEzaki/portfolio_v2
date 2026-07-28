import "./sobre.css";

function Sobre() {
  return (
    <section className="sobre">

      <header className="sobre-header">
        <h1 className="page-title">Sobre</h1>

        <div className="profile-card">

          <h2>
            Victor Takeyoshi Kieper Ezaki
          </h2>

          <h3>
            Estudante de Análise e Desenvolvimento de Sistemas
          </h3>

        </div>
      </header>


      <article className="sobre-content">

        <p>
          <strong>Olá, mundo!</strong> Sou o Victor, tenho 23 anos e sou
          natural de Joinville. Atualmente, curso o 4º período de Análise e
          Desenvolvimento de Sistemas no Senac Joinville e também atuo como
          desenvolvedor, aplicando na prática os conhecimentos adquiridos ao
          longo da minha formação.
        </p>

        <p>
          Tenho grande interesse em criar soluções Full Stack, mas foi no
          <span> Back-End </span>
          que encontrei minha principal afinidade. Gosto de transformar
          problemas em soluções bem estruturadas, escrever código limpo e
          desenvolver aplicações que sejam seguras, eficientes e escaláveis.
        </p>

        <p>
          Acredito que programação vai muito além de fazer o sistema funcionar:
          é sobre construir experiências confiáveis, aprender continuamente e
          evoluir a cada novo desafio. Afinal, assim como todo programa começa
          com um <strong>"Olá, mundo!"</strong>, toda grande jornada na
          tecnologia começa com a curiosidade de entender como as coisas
          funcionam.
        </p>

      </article>

    </section>
  );
}

export default Sobre;