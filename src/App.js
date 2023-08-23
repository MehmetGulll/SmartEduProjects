import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import {Routes,Route} from 'react-router-dom'
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Courses from './pages/Courses/Courses.js';
import CourseDetail from "./pages/CourseDetail/CourseDetail";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div>
      <Header/>
      
      <Routes>
        <Route path = "/" element={
          <>
          <Home/>
          </>
        }/>
        <Route path = "/login" element={<Login/>}/>
        <Route path ="/signup" element ={<SignUp/>}/>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/courses" element = {<Courses/>}/>
        <Route path  = "/courses/:slug" element={<CourseDetail/>}/>
        <Route path = "/dashboard" element={<Dashboard/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
