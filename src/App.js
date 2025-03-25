import { Route, Routes } from "react-router-dom"; 
import "./App.css";
import "./components/all-styles.css"
import AuthProvider from "./hook/AuthProvider.js";
import { Home } from "./pages/home/home.page.js";
// import PrivateRoute from "./router/route.js";
import { Register } from "./pages/register/register.page.js";
import { Login } from "./pages/login/login.page.js";
import { Dashboard } from "./pages/dashboard/dashboard.page.js";
import { Courses } from "./pages/course/course.page.js";
import { GiftCourse } from "./pages/course/gift/gift.page.js";
import { WatchCourse } from "./pages/course/watch/watch.page.js";


function App() {

    return (
      <div className="app-container"> 

        <AuthProvider>
          {/* <Header /> */}

          <Routes>
              <Route path="/" exact element={<Home title="PDM Tutor | Welcome To PDM Tutor" />} />
              <Route path="/register" exact element={<Register title="PDM Tutor | Register an Account " />} />
              <Route path="/login" exact element={<Login title="PDM Tutor | Login to your Account " />} />
              {/* <Route element={<PrivateRoute />}> */}
                <Route path="/dashboard" exact element={<Dashboard title="PDM - Tutur | Dashboard" />} />
                <Route path="/courses" element={<Courses title="PDM - Tutor | Courses" />} />
                <Route path="/courses/gift" exact element={<GiftCourse title="PDM - Tutor | Gift Course" />} />
                <Route path="/courses/watch/:id" exact element={<WatchCourse title="PDM - Tutor | Watch Courses" />} />
              {/* </Route> */}
          </Routes>

        </AuthProvider>
          
      </div>
    ); 
  
}

export default App;
