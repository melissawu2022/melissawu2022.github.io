import './App.css';
import * as React from "react";
import Intro from "./components/Intro"
import ToolBar from './components/ToolBar';
import AboutMe from './components/AboutMe';
import { ImageDivider1, ImageDivider2, ImageDivider3 } from './components/ImageDivider';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <ToolBar />
      <div
        className="App"
      >
        <Intro />
        <ImageDivider1/> 
        <AboutMe />
        <ImageDivider2/>
        <Projects />
        <ImageDivider3/>
        <Skills />
        <Footer />
      </div>
    </div>

  );
}

export default App;
