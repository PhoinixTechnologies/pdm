import Navbar from './Navbar';
import Home from './Home';
import About from './aboutus';
import Agenda from './Agenda';
import Connect from './connect';
import Foot from './footer';

function App() {
  // const likes =  50;
  // const link = "https://www.google.com";
  return (
    <div className="App">
     <Navbar />
        <div className='content'>
        <Home />
        <About/>
        <Agenda/>
        <Connect/>
        <Foot/>
         
        </div>
  
    </div>
  );
}

export default App;
