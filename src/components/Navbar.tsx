
import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-symbol">TG</span>
          <span className="logo-text">Tara Gamache</span>
          <span className="logo-dot">.</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          id="primary-navigation"
          className={`nav-links ${menuOpen ? 'active' : ''}`}
        >
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" className="nav-contact" onClick={closeMenu}>
            Let's Connect
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
