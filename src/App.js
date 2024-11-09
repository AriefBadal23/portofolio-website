import Navbar from './Components/NavBar/Navbar';
import Contact from './Components/Contact/Contact';
import TechStack from './Components/Skills/Skills';
import About from './Components/About/About';
import Projects from './Components/Projects/Project';
import Header from './Components/Header/header';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Projects/>
      <TechStack />
    </div>
  );
}

export default App;
