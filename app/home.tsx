import React from 'react';
import { Button } from 'react-scroll';

import styles from '../styles/home.module.css';

const Home : React.FC = () => (
        <div className={styles.container}>
            <div className={`${styles.presentation} slide-in`}>
                <span className={styles.description}>Hello there! I'm<br />
                <span className={styles.title}>ANDREA INFANTINO</span><br />
                Double Master's Student in Computer Science & Engineering | Politecnico di Milano & UIC | Aspiring Cybersecurity Expert & Software Developer<br />
                <Button
                className={styles.button}
                to="contacts"
                smooth={true}
                duration={500}>
                    Connect with me!
                </Button>
                </span>
            </div>
            <img src="/images/mainImage.png" alt="Profile" className={`${styles.mainImage} slide-in`} />
        </div>
);

export default Home;