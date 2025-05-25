import { useState } from "react";

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
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleNavClick = (section: string) => {
    onSectionChange(section);
    setShowMobileMenu(false); // Close menu on selection (mobile)
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-title">Portfolio</h1>
      {/* Desktop links */}
      <div className="navbar-links">
        {sections.map((section) => (
          <button
            key={section.value}
            className={`navbar-btn${
              currentSection === section.value ? " active" : ""
            }`}
            onClick={() => handleNavClick(section.value)}
            id={`nav-${section.value}`}
          >
            {section.label}
          </button>
        ))}
      </div>
      {/* Hamburger menu icon for mobile */}
      <button
        className="navbar-menu-icon"
        onClick={() => setShowMobileMenu(true)}
        aria-label="Open menu"
        type="button"
      >
        {/* Unicode hamburger icon */}
        &#9776;
      </button>
      {/* Mobile menu */}
      {showMobileMenu && (
        <div className="navbar-mobile-menu">
          <button
            className="navbar-mobile-menu-close"
            onClick={() => setShowMobileMenu(false)}
            aria-label="Close menu"
            type="button"
          >
            &times;
          </button>
          {sections.map((section) => (
            <button
              key={section.value}
              className={`navbar-btn${
                currentSection === section.value ? " active" : ""
              }`}
              onClick={() => handleNavClick(section.value)}
              id={`mobile-nav-${section.value}`}
            >
              {section.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
