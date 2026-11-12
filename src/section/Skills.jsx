
import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["Angular", "JavaScript", "TypeScript", "HTML", "CSS"],
    },
    {
      title: "Backend Development",
      skills: ["C#", "ASP.NET Core", "REST APIs", "Entity Framework Core"],
    },
    {
      title: "Database",
      skills: ["SQL Server", "SQL Queries", "Database Management"],
    },
    {
      title: "Tools & Testing",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Visual Studio",
        "GitHub Actions",
        "Postman",
        "Swagger",
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <p className="section-label">
        02 — TECHNICAL EXPERTISE
      </p>

      <h2>Technologies I work with.</h2>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div className="skill-card" key={index}>
            <h3>{category.title}</h3>

            <div className="skill-list">
              {category.skills.map((skill) => (
                <span className="skill-item" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
