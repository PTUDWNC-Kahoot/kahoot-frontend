import './App.css';
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import {BrowserRouter, Route, Routes, } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import EditProfile from './pages/Profile/Editprofile';
import Home from "./pages/Home/Home";
import Group from "./pages/Group/Group";
function App() {
//  localStorage.setItem("authenticated", false);               // set quyền đăng nhập sang false để không navigate vào dashboard
  return (  
      <BrowserRouter>
    <Routes>
        <Route path="/"  element={<Login/>} />
        <Route path="register"  element={<Register/>} />
        <Route path="editprofile" element={<EditProfile/>}/>
        <Route path="home" element={<Home />} />
        <Route path="/group" element={<Group />} />
        <Route path="*" element={<Home />} />
    </Routes>
    </BrowserRouter>
  
  );
}


export default App;