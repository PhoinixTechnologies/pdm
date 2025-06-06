import Home from './Home';
import About from './aboutus';
import Agenda from './Agenda';
import Connect from './connect';
import Foot from './footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Join from './pages/JoinWait';


function App() {
  // const likes =  50;
  // const link = "https://www.google.com";
  return (
    <Router>
      <div className='content w-100vw bg-black overflow-hidden scroll-smooth'>
       <Switch>
          <Route exact path ="/">
            <Home />
            <About/>
            <Agenda/>
            <Connect/>
            <Foot/>
          </Route>
          <div className='bg-[#EDEFFE] h-auto items-center '>
          <Route path ="/join">
              <Join/>
          </Route>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
