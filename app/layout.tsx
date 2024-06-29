import '../styles/globals.css';
import Navbar from '../components/Navbar';
import styles from '../styles/Layout.module.css';

import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: '300'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <div className={styles.container}>
          <Navbar />
          <main className={styles.main}>{children}</main>
        </div>
      </body>
    </html>
  );
}
