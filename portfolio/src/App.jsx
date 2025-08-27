import About from './about/About';
import './App.css'
import Experience from './experience/Experience';
import Home from './home/Home';
import Navbar from './navbar/Navbar';
import Projects from './projects/Projects';

function App() {
  return (
    <div className='relative'>
      <div className='fuzzy-overlay'></div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
    </div>
  )
}

export default App
