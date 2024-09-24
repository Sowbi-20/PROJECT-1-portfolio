import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Profile from './pages/Profile';   // Import your page components
import Projects from './pages/Projects';
import Contact from './pages/Contact';
// import Login from './pages/Login';  // Assuming you have a login page

const App = () => {
  const appname = "SOWBARNIKA P N";

  return (
    <BrowserRouter>
      <div className="h-screen w-screen flex flex-col justify-start items-center">
        <Navbar appname={appname} />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
