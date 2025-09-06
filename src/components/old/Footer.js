import React from 'react'
import { Box } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

function FooterIconRow() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
      <a href='https://www.linkedin.com/in/melissa-wu2023' target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", paddingRight: '5px'}}><LinkedInIcon /></a>
      <a href='https://github.com/melissawu2022/hungryScholars' target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", paddingRight: '5px' }}><GitHubIcon /></a>
      <a href='mailto:melissa.o.wu@outlook.com' target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", paddingRight: '5px' }}><MailIcon /></a>
    </div>
  )
}

const Footer = () => {
  return (
    <Box sx={{ height: '75px' }} bgcolor={"GrayText"}>
      <p style={{ color: 'white', fontSize: '12px', fontFamily: 'roboto', display: 'flex', justifyContent: 'center', alignContent: 'center', paddingTop: '10px' }}>Made with bucketfuls of TLC by Melissa Wu ♥</p>
      <FooterIconRow/>
    </Box>
  )
}

export default Footer
