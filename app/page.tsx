"use client";

import Home from '../app/home';
import About from '../app/about';
import Navbar from '../components/Navbar';

import '../styles/globals.css';
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: '300'
})

const App: React.FC = () => {
  return (
      <div className={`${openSans.className} app`}>
          <Navbar />
          <Home />
          <About />
      </div>
  );
}

export default App;