import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title ='App Component';
  // const likes =  50;
  // const link = "https://www.google.com";
  return (
    <div className="App">
     <Navbar />
        <div className='content'>
        <Home />
          <h1>{title}</h1>
          {/* <p>Likes {likes} times</p>

          <p>{10}</p>
          <p>{'Hello Ninjas'}</p>
          <p>{[1,2,3,4]}</p>

          <a href={link}>Google Site</a> */}
        </div>
  
    </div>
  );
}

export default App
