import * as React from "react";
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import './App.css';
import Hobbies from "./components/Hobbies";

function App() {
  console.log("process.env.PUBLIC_URL", process.env.PUBLIC_URL);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Theme>
        <div className="app-container">
          <div className="navbar-container">
            <NavBar />
          </div>
          <Routes>
            <Route path="/skills" element={<Skills />} />
            <Route path="/aboutMe" element={<AboutMe />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/*" element={<Navigate to="/aboutMe" replace />} />
          </Routes>
        </div>
      </Theme>
    </BrowserRouter>
  );
}

export default App;
