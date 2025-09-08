
import About from './about/About';
import './App.css'
import Experience from './experience/Experience';
import Home from './home/Home';
import Navbar from './navbar/Navbar';
import Projects from './projects/Projects';
import Footer from './components/Footer';
import React, { useEffect, useState } from 'react';
import HomeButton from './components/HomeButton';

function App() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollPercent(percent);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // set initial value
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='relative'>
      <div className='fuzzy-overlay'></div>
      <div className="fixed w-full h-0.5 z-100">
        <div className="h-full bg-amber-600" style={{ width: `${scrollPercent}%` }}></div>
      </div>
      <Navbar></Navbar>
      <Home></Home>
      <HomeButton></HomeButton>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
