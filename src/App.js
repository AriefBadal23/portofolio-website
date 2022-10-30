import './App.css';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Header from './components/header/header';

// about details tonen op scherm 26-okt
function App() {
  return (
    <div className='App'>
      <Header/>
      <About/>
      <Skills/>
    </div>
    
  );
}

export default App;
