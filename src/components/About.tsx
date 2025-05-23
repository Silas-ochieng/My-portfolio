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
            Hi! I'm <span className="about-highlight">Sarah Nyambura</span>, an
            enthusiastic <span className="about-highlight">IT student</span> and{" "}
            <span className="about-highlight">frontend developer</span>{" "}
            specializing in <span className="about-highlight">JavaScript</span>{" "}
            and <span className="about-highlight">React</span>.
          </p>
          <p className="about-background">
            <strong>Academic Background:</strong> Currently pursuing a degree in
            Information Technology, I have a solid foundation in programming,
            web development, and software engineering principles. My coursework
            and projects have exposed me to a variety of technologies and
            collaborative environments.
          </p>
          <p className="about-interests">
            <strong>Technical Interests:</strong> I enjoy working with modern
            frontend frameworks, exploring UI/UX best practices, and learning
            about emerging web technologies. I am also interested in open-source
            contributions and building tools that make a difference.
          </p>
          <p className="about-aspirations">
            <strong>Career Aspirations:</strong> My goal is to become a
            well-rounded software engineer, contribute to impactful projects,
            and continuously grow my skills in both frontend and full-stack
            development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
