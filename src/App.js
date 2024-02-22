import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImageBox from './components/Box';
import Slider from './components/Slider';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <ImageBox/>
      <Slider/>
      <Footer/>
    </div>
  );
}

export default App;
