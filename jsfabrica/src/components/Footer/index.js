import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <h1>IFitness</h1>
        <p>© Copyright 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
