import './App.css';
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import {BrowserRouter, Route, Routes, } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import EditProfile from './pages/Profile/editprofile';
function App() {
 localStorage.setItem("authenticated", false);               // set quyền đăng nhập sang false để không navigate vào dashboard
  return (  
      <BrowserRouter>
    <Routes>
        <Route index path= "" element={<Dashboard/>}/>
        <Route path="login"  element={<Login/>} />
        <Route path="register"  element={<Register/>} />
        <Route path="editprofile" element={<EditProfile/>}/>
      
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
