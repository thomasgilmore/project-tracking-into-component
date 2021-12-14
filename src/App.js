import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import MobileNav from './components/MobileNav';
import Body from './components/Body';

function App() {
  const [Width, setWidth] = useState(window.innerWidth);
  // let width = window.innerWidth;
  const updateWidth = () => {
    // width = window.innerWidth;
    setWidth(window.innerWidth);
  }
  window.addEventListener('resize', updateWidth);
  return (
    <div className="App">
    {Width > 900 ? <span><Nav /><Body /></span> : <span><MobileNav /><Body /></span>}
    </div>
  );
}

export default App;
