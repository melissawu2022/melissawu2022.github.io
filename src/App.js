import './App.css';
import * as React from "react";
import Intro from "./components/Intro"
import ToolBar from './components/ToolBar';
import AboutMe from './components/AboutMe';
import ImageDivider from './components/ImageDivider';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <ToolBar />
      <div
        className="App"
      >
        <Intro />
        <ImageDivider/> 
        <AboutMe />
        <Skills />
      </div>
    </div>

  );
}

export default App;
