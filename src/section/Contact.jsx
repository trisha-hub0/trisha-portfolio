import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-heading">
        <p className="section-label">GET IN TOUCH</p>
        <h2>Let's Connect</h2>
      </div>

      <p className="contact-description">
        From building applications to solving real-world problems, 
        I'm always excited to learn, collaborate, and take on new challenges.
      </p>

      <div className="contact-links">
        <a href="mailto:trishananjappa@gmail.com">
          Email Me ↗
        </a>

        <a
          href="https://github.com/trisha-hub0"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>

        <a
          href="https://www.linkedin.com/in/trisha-nanjappa"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
      </div>
    </section>
  );
}

export default Contact;