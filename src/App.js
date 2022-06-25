import Cover from './componentes/Cover'
import Navbar from './componentes/Navbar';
import About from './componentes/About';
import Info from './componentes/Info';
import Footer from './componentes/Footer';
import Slider from './componentes/Slider';
import './App.css';
import { useEffect, useState } from 'react';






function App() {

  const [ScrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {

    const position = window.scrollY;
    setScrollHeight( position )
  }

  useEffect(() => {
   
    window.addEventListener( "scroll", handleScroll )
  }, [ScrollHeight])
  

  return (
    <div className="App">
     <Navbar isScrolling={ ScrollHeight } />
     <Cover />
     <About />
     <Slider />
     <Info />
     <Footer />
    </div>
  );
}

export default App;
