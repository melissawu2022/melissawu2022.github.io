import React from 'react'
import ArchitectureIcon from '@mui/icons-material/Architecture';
import { Box, Grid, Card, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

function ProjectsHeader() {
  return (
    <div id="projects" style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
      <ArchitectureIcon fontSize='large' style={{ marginTop: '50px' }} />
      <h2 style={{ fontFamily: 'Courier Prime', padding: '40px' }}> PROJECTS </h2>
      <ArchitectureIcon fontSize='large' style={{ marginTop: '50px' }} />
    </div>
  )
}

function ProjectsGrid() {
  let description = "Inspired by my love for food, this webapp was based off my dream to start a food truck or ghost kitchen in the future. " +
    "Catered to anyone who wants a quick bite without breaking the bank, users can use this web app (which realistically I should make smartphone friendly because who has the time to drag out their laptop?) to put in an order ahead of time and pick it up when it's ready for them."
  return (
    <Box >
      <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
        <Grid item xs={8}  >
          <Card variant='outlined' style={{ padding: '20px' }}>
            <h3 style={{ fontFamily: 'Courier Prime' }}>Hungry Scholars (In Progress) </h3>
            <p style={{ fontFamily: 'Courier Prime', fontSize: '13px' }}> {description}</p>
            <a href='https://github.com/melissawu2022/hungryScholars' target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}><GitHubIcon /></a>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default function Projects() {
  return (
    <div style={{ padding: '30px', background: "linear-gradient(#FFFFFF, #FBFBFB, #FFFFFF)" }}>
      <ProjectsHeader />
      <ProjectsGrid />
    </div>
  )
}
