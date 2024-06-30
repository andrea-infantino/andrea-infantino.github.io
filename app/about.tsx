import React from 'react';
import { Element } from 'react-scroll';

import styles from '../styles/about.module.css';

const About: React.FC = () => {
    return (
        <Element name="about" className={styles.container}>
            <div className={`${styles.presentation} slide-in`}>
                <span className={styles.description}>Hello there! I'm<br />
                <span className={styles.title}>ANDREA INFANTINO</span><br />
                Double Master's Student in Computer Science & Engineering | Politecnico di Milano & UIC | Aspiring Cybersecurity Expert & Software Developer<br />
                </span>
            </div>
            <img src="/images/mainImage.png" alt="Profile" className={`${styles.mainImage} slide-in`} />
        </Element>
    );
};

export default About;