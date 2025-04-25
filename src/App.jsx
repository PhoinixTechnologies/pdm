
import Home from './Home';
import About from './aboutus';
import Agenda from './Agenda';
import Connect from './connect';
import Foot from './footer';

function App() {
  // const likes =  50;
  // const link = "https://www.google.com";
  return (
   
    <div className='content w-100vw'>
        <Home />
        <About/>
        <Agenda/>
        <Connect/>
        <Foot/>
         
        </div>
  );
}

export default App;
