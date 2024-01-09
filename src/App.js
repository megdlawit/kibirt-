import logo from './logo.svg';
// import './App.css';
import Navb from './Navb';
import Hero from './Hero';
import { Grid } from './Grid';
import About from './About';
import Card from './Card';
import Contact from './Contact';
import MIssion from './MIssion';
import { Footer } from './Footer';
import Slider from './Slider';


function App() {
  return (
    <div className="App">
      <Navb/>
      <Hero/>
      <Grid/>
      <Slider/>
      <About/>
      <MIssion/>
      <Card/>
      <Contact/>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
