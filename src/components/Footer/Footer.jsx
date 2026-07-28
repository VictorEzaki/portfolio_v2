import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <span className="footer-text">&copy; 2025 Feito por Victor Ezaki</span>
      <div id="img">
        <a
          className="icon-btn pixel-round-sm"
          href="https://www.linkedin.com/in/victor-ezaki/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="1x" />
        </a>
        <a
          className="icon-btn pixel-round-sm"
          href="https://github.com/VictorEzaki"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="1x" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
