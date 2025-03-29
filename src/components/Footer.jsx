import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>&lt;/castillano.dev&gt;</div>
      <div className={styles.copyright}>
        &copy; {currentYear} castillano.dev. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;