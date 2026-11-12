import "./Education.css";

function Education() {
  const educationDetails = [
    {
      qualification: "Bachelor of Engineering",
      specialization: "Electronics and Communication Engineering",
      institution: "Global Academy of Technology",
      location: "Bengaluru, Karnataka",
      duration: "2023 – 2027",
      result: "CGPA: 8.59 / 10",
      status: "Currently Pursuing",
    },
    {
      qualification: "Pre-University Course (PUC)",
      specialization: "State Board",
      institution: "Base PU College",
      location: "Bengaluru, Karnataka",
      duration: "2023",
      result: "91%",
      status: "Completed",
    },
    {
      qualification: "Secondary School Leaving Certificate (SSLC)",
      specialization: "ICSE",
      institution: "RNS Vidyaniketan",
      location: "Bengaluru, Karnataka",
      duration: "2021",
      result: "90%",
      status: "Completed",
    },
  ];

  return (
    <section className="education" id="education">
      <div className="section-heading">
        <p className="section-label">ACADEMIC BACKGROUND</p>
        <h2>Education</h2>
      </div>

      <div className="education-list">
        {educationDetails.map((education, index) => (
          <div className="education-card" key={index}>
            <div className="education-header">
              <div>
                <h3>{education.qualification}</h3>
                <p className="education-specialization">
                  {education.specialization}
                </p>
                <h4>{education.institution}</h4>
                <p className="education-location">{education.location}</p>
              </div>

              <span className="education-year">{education.duration}</span>
            </div>

            <div className="education-details">
              <span>{education.result}</span>
              <span>{education.status}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;