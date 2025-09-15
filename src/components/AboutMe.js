import { Button, Text } from "@radix-ui/themes"
import React from "react"
import avatar from './images/headshot-bitmojied.webp'
import "../AboutMe.css"

export default function AboutMe() {
  return (
    <div className="aboutme-container">
      <div className="text-block">
        Hi there
        <span role="img" aria-label="wave-hello" style={{ padding: '10px' }}>👋🏻</span>
        I'm
        <br />
        <div style={{ paddingTop: '20px' }} />
        <Text size="9" weight="bold">
          Melissa Wu
        </Text>
        <br />
        <div style={{ paddingTop: '40px' }} />
        <Text className="aboutmebio" size="6" weight="bold" >
          SOFTWARE DEVELOPER + GENERAL TINKERER
        </Text>
        <br />
        <div style={{ paddingTop: '40px' }} />
        <Button onClick={
          () => {
            window.open("https://drive.google.com/uc?export=download&id=1Vz4lm4TPqdYBciJll4jnbMOrWxhfJC_W", "_blank")
          }
        }>
          Download my resume
        </Button>
      </div>
      <div className="headshot-div">
        <img className="headshot" src={avatar} alt="avatar" />
      </div>
    </div>
  )
}