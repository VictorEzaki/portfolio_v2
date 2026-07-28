import './contato.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Contato() {
  return (
    <>
      <h1 className="page-title">Contato</h1>

      <div className='container pixel-round-sm'>
        <div>
          <a
            href="/cv-victor.pdf"
            download="Curriculo_Victor_Ezaki.pdf"
            className="download-btn pixel-round-sm"
          >
            <FontAwesomeIcon icon={faDownload} />
            <span>Baixar Currículo (PDF)</span>
          </a>
        </div>

        <div className="contato-links">
          <a href="mailto:victorezaki19@gmail.com" className="pixel-round-sm" target='_blank'>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>

          <a href="https://wa.me/5547992056377" className="pixel-round-sm" target='_blank'>
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div >
    </>
  );
}

export default Contato;