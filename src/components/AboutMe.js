import { Button, Text } from "@radix-ui/themes"
import React from "react"
import avatar from './images/headshot-bitmojied.webp'
import "../App.css"

export default function LandingPage() {
  return (
    <div class="container">
      <div class="text-block">
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
        <Text size="6" weight="bold" style={{ color: "#b8f2ff" }} >
          SOFTWARE DEVELOPER + GENERAL TINKERER
        </Text>
        <br />
        <div style={{ paddingTop: '40px' }} />
        <Button>
          Click here to get my experience on 1 page
        </Button>
      </div>
      <div className="headshot-div">
        <img className="headshot" src={avatar} alt="avatar" />
      </div>
    </div>
  )
}