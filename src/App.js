import { Route, Routes } from "react-router-dom"; 
import "./App.css";
import "./components/all-styles.css"
import AuthProvider from "./hook/AuthProvider.js";
import { Home } from "./pages/home/home.page.js";
import PrivateRoute from "./router/route.js";
import Register from "./pages/register/register.page.js";


function App() {

    return (
      <div className="app-container"> 

        <AuthProvider>
          {/* <Header /> */}

          <Routes>
              <Route path="/register" exact element={<Register title="PDM Tutor | Register an Account " />} />
              {/* <Route path="/login" exact element={<HomePage title="PDM Tutor | Login to your Account " />} /> */}
                <Route path="/" exact element={<Home title="PDM - Tutor Home" />} />
              <Route element={<PrivateRoute />}>
                <Route path="/courses" exact element={<Home title="PDM - Courses" />} />
              </Route>  
          </Routes>

        </AuthProvider>
          
      </div>
    ); 
  
}

export default App;
