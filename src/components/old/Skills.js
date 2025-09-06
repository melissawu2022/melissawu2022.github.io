import React from 'react'
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import dynamodb from './images/dynamodb.png'
import expressjs from './images/expressjs.png'
import stackOverflow from './images/stackOverflow.png'
import java from './images/java.png'
import python from './images/python.png'
import javascript from './images/javascript.png'
import react from './images/react.png'
import graphql from './images/graphql.png'

const iconStyle = {
  width: '50px',
  height: '50px',
  padding: '20px'
}


function SkillsHeader() {
  return (
    <div id="skills" style={{ display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
      <HomeRepairServiceIcon  fontSize='large' style={{ marginTop: '50px'}} />
      <h2 style={{ fontFamily: 'Courier Prime', padding: '40px'}}> SKILLS </h2>
      <HomeRepairServiceIcon fontSize='large' style={{ marginTop: '50px' }} />
    </div>
  )
}


function IconRow() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', }}>
      <img style={iconStyle} src={javascript} alt="jsIcon" />
      <img style={iconStyle} src={java} alt="javaIcon" />
      <img style={iconStyle} src={python} alt="pythonIcon" />
      <img style={iconStyle} src={react} alt="stackOverflowIcon" />
      <img style={iconStyle} src={expressjs} alt="expressicon" />
      <img style={iconStyle} src={graphql} alt="stackoverflowicon" />
      <img style={iconStyle} src={dynamodb} alt="expressicon" />
      <p style={{padding: '20px'}}>(and of course)</p>
      <img style={iconStyle} src={stackOverflow} alt="stackoverflowicon" />
    </div>
  )
}

export default function Skills() {
  return (
    <div style={{ padding: '100px' }}>
      <SkillsHeader />
      <IconRow />
    </div>
  )
}
