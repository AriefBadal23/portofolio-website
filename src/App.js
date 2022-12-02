import './App.css';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Header from './components/header/header';
import Project from './components/Projects/projects';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact'

// about details tonen op scherm 26-okt
function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Header/>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
    </div>
    
  );
}

export default App;
