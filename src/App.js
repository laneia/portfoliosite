import './styles/App.css';
import Landing from './pages/Landing'
import About from './pages/About'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

import SideNav from './components/SideNav'
import TopNav from './components/TopNav';

function App() {
  return (
    <div className="App">
      <div className="landing-overlay">
        <div className="owl-overlay"></div>
      </div>
      

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
  );
}

export default App;
