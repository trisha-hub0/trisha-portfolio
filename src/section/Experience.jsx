
import "./Experience.css";

function Experience() {
  const responsibilities = [
    "Develop and maintain frontend modules using Angular and integrate them with backend services.",
    "Work on backend API development and integration using ASP.NET Core Web API.",
    "Write and execute SQL queries for database operations, data validation and troubleshooting.",
    "Perform API testing and response validation using Postman and Swagger.",
    "Execute end-to-end product workflows and full transactions to validate application functionality.",
    "Participate in product testing to identify issues, verify functionality and support quality assurance.",
    "Prepare technical documentation, functional documents and testing-related records.",
    "Work with SQL Server and Entity Framework Core for data access and database operations.",
    "Use Git, GitHub and GitHub Actions as part of development and version control workflows.",
  ];

  return (
    <section className="experience" id="experience">
      <div className="section-heading">
        <p className="section-label">MY JOURNEY</p>
        <h2>Professional Experience</h2>
      </div>

      <div className="experience-card">
        <div className="experience-header">
          <div>
            <h3>Software Developer Intern</h3>
            <h4>CormSquare</h4>
          </div>

          <div className="experience-meta">
            <span className="experience-duration">
              Jan 2026 – Present
            </span>
            <span className="experience-type">Internship</span>
          </div>
        </div>

        <div className="experience-divider"></div>

        <div className="experience-responsibilities">
          <h4>Roles & Responsibilities</h4>

          <ul>
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="experience-tags">
          <span>C#</span>
          <span>ASP.NET Core</span>
          <span>Angular</span>
          <span>TypeScript</span>
          <span>SQL Server</span>
          <span>SQL Queries</span>
          <span>Postman</span>
          <span>Swagger</span>
          <span>HTML,CSS,JS</span>
          <span>GitHub</span>
        </div>
      </div>
    </section>
  );
}

export default Experience;
