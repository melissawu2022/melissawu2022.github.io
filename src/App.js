import './App.css';
import * as React from "react";
import IntroBlurb from "./components/IntroBlurb"
import ToolBar from './components/ToolBar';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div>
      <ToolBar />
      <div
        className="App"
      >
        <IntroBlurb />
        <img
          src='https://wallpaperaccess.com/full/1769725.jpg'
          style={{ width: '100%'}}
        />
        <AboutMe />
      </div>
    </div>

  );
}

export default App;
