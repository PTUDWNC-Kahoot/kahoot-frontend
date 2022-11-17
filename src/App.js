import './App.css';
import Login from "./components/Authentication/login/Login"
import Register from "./components/Authentication/register/Register"
import {BrowserRouter, Route, Routes, } from "react-router-dom";
function App() {
  return (  
    

      <BrowserRouter>
    <Routes>
         <Route path="login"  element={<Login/>} />
         <Route path="register"  element={<Register/>} />
      
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
