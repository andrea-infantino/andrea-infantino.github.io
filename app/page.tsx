import Layout from '../components/Layout';
import styles from '../styles/page.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to My Personal Website</h1>
        <p className={styles.description}>This is a simple personal website template using Next.js and TypeScript.</p>
      </div>
    </Layout>
  );
}
