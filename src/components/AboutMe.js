import React from 'react'

export default function AboutMe() {
  return (
    <div style={{ paddingLeft: '0px' }} className='about' id='aboutMe'>
      <div className='container'>
          <h2>About Me</h2>
          <span className='line'></span>
          <p>I am a 5th year student at the University of Ottawa, currently majoring in Computer Science and minoring in French as a Second Language. </p>
          <p>I've got a couple of CO-OPs under my belt and went from starting my first not knowing what JIRA was to being responsible for seeing through the completion of APIs and/or UI components (I won't bore you with the details here, that's what my resume is for haha).</p>
          <p>So what exactly do I know?</p>

          <button className='button'>Explore More</button>
      </div>
    </div>
  )
}
