
import './About.css';

function About() {
  return (
    <section id="about" className="about">

      <div className="about-heading">
        <p className="section-label">01 — ABOUT ME</p>
        <h2>A little about me.</h2>
      </div>

      <div className="about-content">

        <div className="about-description">
          <p>
            I'm a final-year Electronics and Communication
            Engineering student with a strong interest in
            full-stack development and building practical
            software solutions.
          </p>

          <p>
            Through my internship and projects, I've gained
            hands-on exposure to frontend development,
            backend APIs, database management and
            application development.
          </p>

          <p>
            I enjoy understanding how applications work
            end-to-end, exploring new technologies and
            continuously improving my problem-solving skills.
          </p>
        </div>

        <div className="about-details">

          <div>
            <span>EDUCATION</span>
            <h3>B.E. – ECE</h3>
          </div>

          <div>
            <span>GRADUATION</span>
            <h3>2027</h3>
          </div>

          <div>
            <span>CAREER INTEREST</span>
            <h3>Full Stack Development</h3>
          </div>

          <div>
            <span>FOCUS</span>
            <h3>Software Engineering</h3>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
