type NavbarProps = {
  onSectionChange: (section: string) => void;
  currentSection: string;
};

const sections = [
  { label: "Home", value: "home" },
  { label: "About Me", value: "about" },
  { label: "Resume", value: "resume" },
  { label: "Projects", value: "projects" },
  { label: "Contact", value: "contact" },
];

function Navbar({ onSectionChange, currentSection }: NavbarProps) {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Portfolio</h1>
      <div className="navbar-links">
        {sections.map((section) => (
          <button
            key={section.value}
            className={`navbar-btn${
              currentSection === section.value ? " active" : ""
            }`}
            onClick={() => onSectionChange(section.value)}
            id={`nav-${section.value}`}
          >
            {section.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
