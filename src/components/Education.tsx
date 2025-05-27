import { useState } from "react";

type EducationEntry = {
  institution: string;
  degree: string;
  period: string;
  details?: string;
};

type Certification = {
  name: string;
  issuer: string;
};

const educationData: EducationEntry[] = [
  {
    institution: "Meru University of Science and Technology",
    degree: "Bachelors of Science in Data Science",
    period: "2025 - Present",
    details:
      "Relevant coursework: Web Development, Natural Language Processing, Deep learning, Data ethics and Privacy,Software Engineering",
  },
];

const certificationsData: Certification[] = [
  { name: "Responsive Web Design", issuer: "freeCodeCamp" },
  { name: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp" },
];

function Education() {
  const [education] = useState<EducationEntry[]>(educationData);
  const [certifications] = useState<Certification[]>(certificationsData);

  return (
    <section className="education-section">
      <h2 className="education-title">Education</h2>
      <div className="education-list">
        {education.map((edu) => (
          <div className="education-entry" key={edu.institution}>
            <h3 className="education-institution">{edu.institution}</h3>
            <p className="education-degree">{edu.degree}</p>
            <p className="education-period">{edu.period}</p>
            {edu.details && <p className="education-details">{edu.details}</p>}
          </div>
        ))}
      </div>
      <div className="certifications">
        <h4 className="certifications-title">Certifications</h4>
        <ul className="certifications-list">
          {certifications.map((cert) => (
            <li className="certification-item" key={cert.name}>
              {cert.name}{" "}
              <span className="certification-issuer">({cert.issuer})</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Education;
