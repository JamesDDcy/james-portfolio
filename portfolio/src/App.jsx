import About from './about/About';
import './App.css'
import Experience from './experience/Experience';
import Home from './home/Home';
import Navbar from './navbar/Navbar';
import Projects from './projects/Projects';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
    </>
  )
}

export default App
