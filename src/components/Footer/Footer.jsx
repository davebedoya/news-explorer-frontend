import "./Footer.css";
import githubIcon from "../../assets/icon/Github-icon.svg";
import linkedInIcon from "../../assets/icon/LinkedIn-icon.svg";

function Footer() {
  return (
    <div className="footer">
      <p className="footer__copyright">© 2026 Supersite, Powered by News API</p>
      <div className="footer__services_container">
        {/* <Link to="/" className="footer__home">Home</Link> */}
        <div className="footer__links">
          <a className="footer__home">Home</a>
          <a className="footer__tripleten" href="https://tripleten.com">
            TripleTen
          </a>
        </div>

        <div className="footer__socials">
          <a href="https://github.com/davebedoya" target="_blank">
            <img
              className="footer__socials-github"
              src={githubIcon}
              alt="gitHub"
            />
          </a>
          <a href="https://www.linkedin.com/in/davebedoya/" target="_blank">
            <img
              className="footer__socials-linkedin"
              src={linkedInIcon}
              alt="linkedIn"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
