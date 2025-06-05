import Home from './Home';
import About from './aboutus';
import Agenda from './Agenda';
import Connect from './connect';
import Foot from './footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Join from './pages/JoinWait';
import VerifyFailed from './verifyFailed';
import VerifySuccess from './verifySuccess';
// import VerifyHandler from './verifyHandler';

function App() {
  return (
    <Router>
      <div className='content w-100vw overflow-hidden scroll-smooth'>
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Agenda />
              <Connect />
              <Foot />
            </>
          } />

          <Route path="/join" element={
            <div className='bg-[#EDEFFE] h-auto flex justify-center items-center'>
              <Join />
            </div>
          } />

          {/* Uncomment this when your handler is ready */}
          {/* <Route path="/verify" element={<VerifyHandler />} /> */}

          <Route path="/verifySuccess" element={<VerifySuccess />} />
          <Route path="/verifyFail" element={<VerifyFailed />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
