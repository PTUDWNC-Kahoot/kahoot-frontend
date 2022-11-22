import './App.css';
import Login from "./components/Authentication/login/Login"
import Register from "./components/Authentication/register/Register"
import {BrowserRouter, Route, Routes, } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
function App() {
  // localStorage.setItem("authenticated", false);               // set quyền đăng nhập sang false để không navigate vào dashboard

  return (  
      <BrowserRouter>
    <Routes>
        <Route index path= "" element={<Dashboard/>}/>
        <Route path="login"  element={<Login/>} />
        <Route path="register"  element={<Register/>} />
      
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
