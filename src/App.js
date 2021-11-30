import './styles/App.css';
import Landing from './pages/Landing'
import About from './pages/About'
import Experience from './pages/Experience'
// import Skills from './pages/Skills'
// import Projects from './pages/Projects'
// import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <main>
        <Landing/>
        <About/>
        <Experience/>
        {/* <Skills/>
        <Projects/>
        <Contact/> */}
      </main>
    </div>
  );
}

export default App;
