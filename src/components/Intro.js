import { Box } from "@mui/system";
import * as React from "react";
import Stack from "@mui/material/Stack";
import { Card } from '@mui/material'
import avatar from './images/avataaars.png'

function Blurb() {
  const customStyle = {
    fontSize: '15px'
  }
  return (
    <Card  style={{ fontFamily: 'Courier Prime', marginTop: '5%', marginRight: '5%', padding: '30px' }} variant="outlined">
      <div>
        <span style={customStyle} className="font-link">{"\t"}def introduction():</span>
        <div style={customStyle} className="font-link">name = "Melissa"</div>
        <div style={customStyle} className="font-link">monthsUntilGraduation = 2.5</div>
        <div style={customStyle} className="font-link">hobbies = ["baking", "catching up on Stephen King mystery novels", "finding new music to listen to", "or trying to recreate starbucks drinks at home"]</div>
        <div style={customStyle} className="font-link">string = "Hi! My name is " + name + ", I'll be graduating in about " + monthsUntilGraduation + " months. I enjoy doing work that's anything and everything UI, but I'm always open to learning and trying new things :) Outside of work and school, I either spend my time..."</div>
        <div style={customStyle} className="font-link">print(string)</div>
        <div style={customStyle} className="font-link">print(*hobbies, sep=",")</div>
      </div>
    </Card>

  )
}

function Intro() {
  return (
    <Stack id="/" style={{ paddingTop: '100px', paddingBottom: '300px', background: "linear-gradient(#9bc9a7, #70A6D4, #FFFFFF)" }} direction="row" spacing={2}>
      <img style={{ paddingTop: '50px', width: '250px' }} src={avatar} alt="avatar"/>
      <Blurb />

    </Stack>
  )
}

export default Intro;