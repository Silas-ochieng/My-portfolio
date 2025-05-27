function About() {
  return (
    <section className="about-section">
      <div className="about-card">
        <div className="about-icon">
          <span role="img" aria-label="wave">
            👋
          </span>
        </div>
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-intro">
            Hi! I'm <span className="about-highlight">Silas Ochieng</span>, an
            enthusiastic <span className="about-highlight">Data science student</span> and{" "}
            <span className="about-highlight">Machine learning engineer</span>{" "}
            specializing in <span className="about-highlight">Data Analysis</span>{" "}
            and <span className="about-highlight">React</span>.
          </p>
          <p className="about-background">
            <strong>Academic Background:</strong> Currently pursuing a degree in Data Science,
             I have developed a strong foundation in data analysis, machine learning, and statistical modeling.
              Through hands-on projects and coursework, I have gained experience with Python, R, data visualization tools, 
              and working with real-world datasets. I thrive in collaborative environments where I can apply data-driven 
              solutions to solve meaningful problems.
          </p>
          <p className="about-interests">
            <strong>Technical Interests:</strong> I enjoy working with data visualization libraries and tools,
             exploring effective ways  to communicate insights, and staying updated on emerging data science technologies.
             I am also passionate about contributing to open-source projects and building data-driven tools that create meaningful impact.
          </p>
          <p className="about-aspirations">
            <strong>Career Aspirations:</strong> My goal is to become a well-rounded data scientist, 
            contribute to impactful projects that leverage data for meaningful insights, 
            and continuously grow my skills in data analysis, machine learning, and scalable data solutions
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
