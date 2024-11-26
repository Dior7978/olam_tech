import React from "react";
// import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";


function App(){
    return (
        <div>
            {/* <Login /> */}
            <Router>
                <Navbar />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/projects' element={<Projects />} />
                </Routes>
                <Footer />
            </Router>
            
        </div>
    )
}

export default App;