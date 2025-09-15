import * as React from "react";
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { BrowserRouter, Route, Routes } from 'react-router';

import './App.css';
// import './../styles/App.css';
import Hobbies from "./components/Hobbies";

function App() {
  return (
    <BrowserRouter>
      <Theme>
        <div className="app-container">
          <div className="navbar-container">
            <NavBar />
          </div>
          <Routes>
            <Route path="/skills" element={<Skills />} />
            <Route path="/aboutMe" element={<AboutMe />} />
            <Route path="/hobbies" element={<Hobbies />} />
            {/* <Route path="/*" element={<Navigate to="/aboutMe" replace />} /> */}
          </Routes>
        </div>
      </Theme>
    </BrowserRouter>
  );
}

export default App;
