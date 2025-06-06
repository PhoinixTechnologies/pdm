import Home from './Home';
import About from './aboutus';
import Agenda from './Agenda';
import Connect from './connect';
import Foot from './footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Join from './pages/JoinWait';

function App() {
  return (
    <Router>
      <div className='content w-100vw bg-black overflow-hidden scroll-smooth'>
        <Routes>
          {/* Main Page Route */}
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Agenda />
              <Connect />
              <Foot />
            </>
          } />

          {/* Join Page Route */}
          <Route path="/join" element={
            <div className='bg-[#EDEFFE] h-auto items-center'>
              <Join />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
