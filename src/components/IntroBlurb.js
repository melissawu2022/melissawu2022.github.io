import { Box } from "@mui/system";
import * as React from "react";
import Stack from "@mui/material/Stack";

function Blurb() {
  const customStyle = {
    fontSize: '15px'
  }
  return (
    <div
      style={{
        paddingTop: '100px',
      }}
    >
      <span style={customStyle} className="font-link">{"\t"}def introduction():</span>
      <div />
      <div style={customStyle} className="font-link">name = "Melissa"</div>
      <div style={customStyle} className="font-link">monthsUntilGraduation = 2.5</div>
      <div style={customStyle} className="font-link">hobbies = ["baking", "catching up on Stephen King mystery novels", "finding new music to listen to", "or trying to recreate starbucks drinks at home"]</div>
      <div style={customStyle} className="font-link">string = "Hi! My name is " + name + ", I'll be graduating in about " + monthsUntilGraduation + " months. I enjoy doing work that's anything and everything UI, but I'm always open to learning and trying new things :) Outside of work and school, I either spend my time..."</div>
      <div style={customStyle} className="font-link">print(string)</div>
      <div style={customStyle} className="font-link">print(*hobbies, sep=",")</div>
    </div>
  )
}

function IntroBlurb() {
  return (
    <Stack id="/" style={{ paddingTop: '100px', paddingBottom: '300px', background: '#9bc9a7' }} direction="row" spacing={2}>
      <img style={{ paddingTop: '50px' }} src='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Round&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Happy&eyebrowType=Default&mouthType=Default&skinColor=Light'
      />
      <Blurb />
      
    </Stack>
  )
}

export default IntroBlurb;