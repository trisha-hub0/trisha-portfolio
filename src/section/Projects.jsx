
import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "SQL Server Performance Monitoring & Analytics Dashboard",
    category: "Full Stack Development",
    type: "Internship Project",
    description:
      "Built a full-stack monitoring dashboard to analyse SQL Server performance, identify slow-running queries and monitor database activity using Dynamic Management Views (DMVs).",
    highlights: [
      "Implemented backend APIs using ASP.NET Core Web API.",
      "Queried SQL Server DMVs to retrieve slow queries and blocking sessions.",
      "Integrated Angular dashboard with REST APIs.",
      "Implemented historical performance tracking, pagination and date-range filtering.",
    ],
    technologies: [
      "C#",
      "ASP.NET Core Web API",
      "Angular",
      "SQL Server",
      "Entity Framework Core",
      "REST APIs",
    ],
  },
  {
    number: "02",
    title: "Full-Stack E-Commerce Platform with Admin & Order Management",
    category: "Full Stack Development",
    type: "Internship Project",
    description:
      "Developed an e-commerce application with product browsing, shopping cart, checkout, user authentication and administrative management features.",
    highlights: [
      "Designed a database structure involving products, categories, carts, orders, users and administrators.",
      "Implemented shopping cart and checkout workflows.",
      "Integrated user authentication and order management.",
      "Developed admin functionality for products, categories and orders.",
      "Applied the Repository Pattern for structured data access.",
    ],
    technologies: [
      "ASP.NET Core Razor Pages",
      "C#",
      "Entity Framework Core",
      "SQL Server",
      "Repository Pattern",
    ],
  },
  
{
  number: "03",
  title:
    "Advanced Health Monitoring and Remaining Life Estimation of Second-Life Lithium-Ion Batteries for Sustainable Energy Systems",
  category: "IoT & Embedded Systems",
  type: "Academic Project",
  description:
    "Developed an IoT-based battery monitoring system with a web dashboard to monitor battery parameters, assess State of Health (SOH), estimate Remaining Useful Life (RUL) and evaluate second-life battery suitability.",

  highlights: [
    "Integrated ESP32 with INA219 voltage and current sensor.",
    "Implemented temperature monitoring using DS18B20.",
    "Developed a web-based monitoring dashboard using HTML, CSS and JavaScript.",
    "Integrated Firebase for storing and retrieving battery monitoring data.",
    "Implemented battery classification based on SOH: Healthy, Second-Life and End-of-Life."
  ],

  technologies: [
    "ESP32",
    "INA219",
    "DS18B20",
    "HTML",
    "CSS",
    "JavaScript",
    "Firebase"
  ],
},

  {
    number: "04",
    title: "UNI RIDE – Web-Based Carpooling & Ride-Sharing Platform",
    category: "Web Development",
    type: "Team Project",
    description:
      "Collaborated with a student team to develop a web-based carpooling platform connecting users looking for shared transportation.",
    highlights: [
      "Developed frontend pages using HTML, CSS and JavaScript.",
      "Created interfaces for posting and searching available rides.",
      "Focused on a responsive and user-friendly interface.",
      "Collaborated with team members during development.",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-heading">
        <p className="section-label">MY WORK</p>
        <h2>Featured Projects</h2>
        <p className="projects-subtitle">
          A collection of projects showcasing my experience
          in full-stack development, databases and IoT systems.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-top">
              <span className="project-category">
                {project.category}
              </span>
              <span className="project-number">
                {project.number}
              </span>
            </div>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-highlights">
              <h4>Key Contributions</h4>
              <ul>
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="project-technologies">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-footer">
              <span>{project.type}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
