import React, { useState } from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false); 
    };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>&lt;/castillano.dev&gt;</div>
        <div className={styles.menuIcon} onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? 'X' : '☰'}
        </div>
      <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.navLinksMobile : ''}`}>
        <button onClick={() => scrollToSection('home')}>Home</button>
        <button onClick={() => scrollToSection('about')}>About</button>
        <button onClick={() => scrollToSection('projects')}>Projects</button>
        <button onClick={() => scrollToSection('contact')}>Contact</button>
      </div>
    </nav>
  );
}

export default Navbar;