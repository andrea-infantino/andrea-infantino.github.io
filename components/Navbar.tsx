"use client";

import React, {useState} from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navbarLeft}>
        <div className={styles.profileImageContainer}>
          <img src="/images/profile.jpg" alt="Profile" className={styles.profileImage} />
        </div>
        <div className={styles.navbarTitle}>ANDREA INFANTINO</div>
      </Link>
      <div className={`${styles.navbarMenu} ${isOpen ? styles.open : ''}`}>
        <Link href="/" className={styles.navbarItem}>Home</Link>
        <Link href="/about" className={styles.navbarItem}>About</Link>
        <Link href="/services" className={styles.navbarItem}>Services</Link>
        <Link href="/contacts" className={styles.navbarItem}>Contact</Link>
      </div>
      <div className={styles.navbarToggle} onClick={toggleMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </nav>
  );
};

export default Navbar;
