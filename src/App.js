import logo from './logo.svg';
// import './App.css';
import Navb from './Navb';
import Hero from './Hero';
import { Grid } from './Grid';
import About from './About';
import Card from './Card';
import Contact from './Contact';
import Mission from './Mission';

function App() {
  return (
    <div className="App">
      <Navb/>
      <Hero/>
      <Grid/>
      <About/>
      <Mission/>
      <Card/>
      <Contact/>
      
    </div>
  );
}

export default App;