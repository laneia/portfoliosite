import { useEffect, useState } from 'react';
import './styles/App.css';
import Landing from './pages/Landing'
import About from './pages/About'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

import SideNav from './components/SideNav'
import TopNav from './components/TopNav';


const overlay = (
  <div>
      <div className="landing-overlay">
        <div className="owl-overlay"></div>
      </div>
  </div>
)

const current = (
  <div className="App">
    <TopNav />
    <div className="bottom-app">
      <SideNav />
      <main id="main">
        <Landing/>
        <About/>
        <Experience/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
    </div>  
  </div>
)


function App() {
  const [rendered, setRendered] = useState(overlay)
  
  useEffect(() => {
    const timer = setTimeout(() => setRendered(current), 3700);
    return () => clearTimeout(timer);
  }, []);

  return (
    rendered
  );
}

export default App;
