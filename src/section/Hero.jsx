
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">

      <p className="hero-label">
        ECE ENGINEERING · CLASS OF 2027
      </p>

      <h1>
        Hi, I'm Trisha N.
      </h1>

      <h2>
        Full Stack Developer.
      </h2>

      <p className="hero-description">
        A developer passionate about building scalable, efficient, and user-focused applications.
        I have hands-on experience working with modern frontend technologies, backend development, REST APIs,
        and relational databases. My experience spans application development, API integration,
        database management, and translating requirements into functional software solutions. 
        I enjoy exploring new technologies and continuously improving my engineering and problem-solving skills.
      </p>

      <div className="hero-buttons">

        <a href="#projects" className="primary-btn">
          Explore My Work ↗
        </a>

<a
  href="/Trisha-N-Resume.pdf"
  download="Trisha-N-Resume.pdf"
  className="secondary-button"
>
  Download Resume ↓
</a>
      </div>

      

    </section>
  );
}

export default Hero;
