import Header from './header';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects/project';
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
