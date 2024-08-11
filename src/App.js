import { useState } from 'react';
import './App.css';
import Carrer from './components/Carrer';
import Contact from './components/Contact';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Skill from './components/Skill';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (event) => {
    setIsVisible(true);
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
  
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <Header handleClick={handleClick} />
      <Introduction />
      <Carrer />
      <Skill isVisible={isVisible} />
      <Contact isVisible={isVisible} />
    </div>
  );
}

export default App;
