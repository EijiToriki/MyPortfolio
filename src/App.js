import './App.css';
import Carrer from './components/Carrer';
import Contact from './components/Contact';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Skill from './components/Skill';

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Carrer />
      <Skill />
      <Contact />
    </div>
  );
}

export default App;
