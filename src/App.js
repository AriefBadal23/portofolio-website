import Header from './header';
import Navbar from './Navbar';
import About from './About';
import Projects from './project';
import Contact from './Contact';
import TechStack from './Skills/Skills';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <TechStack />
    </div>
  );
}

export default App;
