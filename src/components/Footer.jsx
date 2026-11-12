
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="#home" className="footer-logo">
          Trisha N.
        </a>

        <p>
          Building meaningful digital experiences through
          technology and continuous learning.
        </p>

        <div className="footer-links">
          <a
            href="mailto:trishananjappa@gmail.com"
          >
            Email
          </a>

          <a
            href="https://github.com/trisha-hub0"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/trisha-nanjappa"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Trisha N. All rights reserved.</p>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
