import React from 'react'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { Link } from 'react-scroll';
import { Button } from '@mui/material';

const customStyle1 = {
  fontSize: '50px',
  color: '#aeafb0',
  ':hover': {
    bgcolor: 'white',
    color: '#737373',
  },
}

function ArrowButton(props) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
    }}>
      <Button>
        <Link to={props.toLink} spy={true} smooth={true} offset={-250} duration={500}>
          <ExpandCircleDownIcon
            sx={customStyle1}
          />
        </Link>
      </Button >
    </div>

  )
}

export function ImageDivider1() {
  return (
    <>
      <ArrowButton toLink="aboutMe" />
      <img
        alt="imageDivider"
        src='https://img.freepik.com/premium-vector/vector-illustration-chinese-ink-landscape-painting-beautiful-vintage-paper-modern-design_29865-4102.jpg?w=2000'
        style={{ width: '100%' }}
      />
    </>
  )
}

export function ImageDivider2() {
  return (
    <>
      <ArrowButton toLink="skills" />
      <img
        alt="imageDivider"
        src='https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/blue-mountains-watercolor-paintingmodern-landscape-green-palace.jpg'
        style={{ width: '100%' }}
      />
    </>
  )
}

export function ImageDivider3() {
  return (
    <>
      <ArrowButton toLink="projects" />
      <img
        alt="imageDivider"
        src='https://img.freepik.com/premium-vector/modern-design-vector-illustration-gorgeous-chinese-ink-landscape-painting_29865-4220.jpg?w=2000'
        style={{ width: '100%' }}
      />
    </>
  )
}