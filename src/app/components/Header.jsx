
"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container-custom header-inner">

        <a href="/" className="brand-logo" onClick={closeMenu}>
          <span className="brand-symbol">C</span>

          <span className="brand-name">
            CROP CARE
            <span className="brand-subtitle">
              PESTICIDES INDIA PVT. LTD.
            </span>
          </span>
        </a>

        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`}>
          <a href="/" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About Us</a>
          <a href="#manufacturing" onClick={closeMenu}>
            Manufacturing & Quality
          </a>

          <div className="nav-dropdown">
            <button className="nav-dropdown-trigger" type="button">
              Products <span>⌄</span>
            </button>

            <div className="dropdown-menu">
              <a href="#products" onClick={closeMenu}>Insecticides</a>
              <a href="#products" onClick={closeMenu}>Herbicides</a>
              <a href="#products" onClick={closeMenu}>Fungicides</a>
            </div>
          </div>

          <a href="#why-us" onClick={closeMenu}>Why Crop Care</a>
          <a href="#contact" onClick={closeMenu}>Contact Us</a>
        </nav>

        <div className="header-actions">
          <a className="header-phone" href="tel:+911762280012">
            +91 1762 280012
          </a>

          <a className="primary-button" href="#contact">
            Enquire Now <span>↗</span>
          </a>

          <button
            className="mobile-menu-button"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

      </div>
    </header>
  );
}