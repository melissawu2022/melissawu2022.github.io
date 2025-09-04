import './App.css';
import * as React from "react";
import Intro from "./components/Intro"
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import { ImageDivider1, ImageDivider2, ImageDivider3 } from './components/ImageDivider';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <NavBar />
      <div
        className="App"
      >
        <Intro />
        <ImageDivider1/> 
        {/* <AboutMe />
        <ImageDivider2/> */}
        <Skills />
        <ImageDivider3 />
        <Projects />
        <Footer />
      </div>
    </div>

  );
}

export default App;
