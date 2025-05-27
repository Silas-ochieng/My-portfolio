import profileImg from "../assets/profile.jpg";

type HeroProps = {
  onSectionChange: (section: string) => void;
};

function Hero({ onSectionChange }: HeroProps) {
  return (
    <section className="hero-section">
      <img src={profileImg} alt="Silas Ochieng" className="hero-photo" />
      <h1 className="intro-name">Hello, I am Silas Ochieng</h1>
      <p className="hero-tagline">
        <strong className="intro-a">Machine learning engineer</strong> I build modern
        web apps with JavaScript and React,Perform exploratory data analysis (EDA) to discover trends and patterns,
        Build and evaluate machine learning models for prediction and classification,Document and present data-driven insights through dashboards and reports
      </p>
      <div className="hero-actions">
        <button
          className="hero-btn"
          onClick={() => onSectionChange("projects")}
        >
          View My Work
        </button>
        <button className="hero-btn" onClick={() => onSectionChange("resume")}>
          Resume
        </button>
      </div>
    </section>
  );
}

export default Hero;
