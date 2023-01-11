import './App.css';
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import EditProfile from './pages/Profile/EditProfile';
import Home from "./pages/Home/Home";
import Group from "./pages/Group/Group";
import Presentation from './pages/Presentations/Presentation';
import ViewPresentationHost from './pages/ViewPresentationHost/ViewPresentationHost';
import Slides from './pages/Slides/Slides';
import KahootLogin from './pages/MemberView/KahootLogin/KahootLogin';
import KahootView from './pages/MemberView/Kahoot/KahootView';
import SignOn from './pages/SignOn/SignOn';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import GroupInvitation from "./pages/Group/GoupInvitation";

import { AuthProvider, useAuth } from './context/AuthProvider';
import { useEffect } from 'react';

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/home" element={<Home />} />
          <Route path="/group" element={<Group />} />
          <Route path='/presentation' element={<Presentation />} />
          <Route path='/viewpresentationhost' element={<ViewPresentationHost />} />
          <Route path='/slides' element={<Slides />} />
          <Route path='/kahootLogin' element={<KahootLogin />} />
          <Route path='/kahoot' element={<KahootView />} />
          <Route path='/signOn' element={<SignOn />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/join-group/*' element={<GroupInvitation />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>


  );
}


export default App;