import profileImg from "../assets/profile.jpg";

type HeroProps = {
  onSectionChange: (section: string) => void;
};

function Hero({ onSectionChange }: HeroProps) {
  return (
    <section className="hero-section">
      <img src={profileImg} alt="Sarah Nyambura" className="hero-photo" />
      <h1 className="intro-name">Hello, I am Sarah Nyambura</h1>
      <p className="hero-tagline">
        <strong className="intro-a">Frontend Developer</strong> I build modern
        web apps with JavaScript and React.
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
