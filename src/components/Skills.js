import React from 'react'
import { imageNames } from '../constants/SkillsConstants'
import "../Skills.css"

export default function Skills() {
  return (
    <div className="skills-container">
      {imageNames.map((imageName, index) => (
        <img
          key={index}
          src={require(`./images/${imageName}`)}
          alt={imageName.split('.')[0]}
          className="skill-icon"
        />
      ))}
    </div>
  )
}