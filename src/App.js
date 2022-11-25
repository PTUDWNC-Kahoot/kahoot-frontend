import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Group from "./pages/Group/Group";


export default function App() {
    
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/group" element={<Group />} />

                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
};

