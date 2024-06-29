"use client";

import Layout from '../components/Layout';
import styles from '../styles/page.module.css';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
      router.push('/contacts');
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div className={`${styles.presentation} slide-in`}>
          <span className={styles.description}>Hello there! I'm<br />
          <span className={styles.title}>ANDREA INFANTINO</span><br />
          Double Master's Student in Computer Science & Engineering | Politecnico di Milano & UIC | Aspiring Cybersecurity Expert & Software Developer<br />
          <button className={styles.button} onClick={handleClick}>Connect with me!</button>
          </span>
        </div>
        <img src="/images/mainImage.png" alt="Profile" className={`${styles.mainImage} slide-in`} />
      </div>
    </Layout>
  );
}
