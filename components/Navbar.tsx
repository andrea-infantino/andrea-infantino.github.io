import React, {useState} from 'react';
import { Link } from 'react-scroll';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <Link to="home"
        smooth={true}
        duration={500}
        spy={true}
        className={styles.navbarLeft}>
        <div className={styles.profileImageContainer}>
          <img src="/images/profile.jpg" alt="Profile" className={styles.profileImage} />
        </div>
        <div className={styles.navbarTitle}>ANDREA INFANTINO</div>
      </Link>
      <div className={`${styles.navbarMenu} ${isOpen ? styles.open : ''}`}>
        <Link to="home"
          smooth={true}
          duration={500}
          spy={true}
          className={styles.navbarItem}
          activeClass={styles.active}>Home</Link>
        <Link to="about"
          smooth={true}
          duration={500}
          spy={true}
          className={styles.navbarItem}
          activeClass={styles.active}>About</Link>
        <Link to="services"
          smooth={true}
          duration={500}
          spy={true}
          className={styles.navbarItem}
          activeClass={styles.active}>Services</Link>
        <Link to="contacts"
          smooth={true}
          duration={500}
          spy={true}
          className={styles.navbarItem}
          activeClass={styles.active}>Contacts</Link>
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
