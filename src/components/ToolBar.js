import React from 'react'
import { AppBar, ThemeProvider, Typography } from '@mui/material';
import { createTheme } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-scroll';

const theme = createTheme({
	palette: {
		primary: {
			main: "#303030"
		}
	},
});

export default function ToolBar() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<AppBar position="sticky">
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						<Link style={{ textDecoration: "none" }} to="/" spy={true} smooth={true} offset={50} duration={500} >
							<Typography sx={{ padding: '20px', fontSize: "30px", color: "white", fontFamily: "Courier Prime" }}>
								MELISSA
							</Typography>
						</Link>
						<Button position="relative" variant="text" sx={{ paddingLeft: '20px', paddingRight: '20px', my: 2, color: 'white', display: 'block', fontFamily: "Courier Prime" }}
						>
							<Link to="aboutMe" spy={true} smooth={true} offset={50} duration={500} >
								About Me
							</Link>
						</Button>
						<Button position="relative" variant="text" sx={{ paddingLeft: '20px', paddingRight: '20px', my: 2, color: 'white', display: 'block', fontFamily: "Courier Prime" }}
						>
							<Link to="projects" spy={true} smooth={true} offset={50} duration={500} >
								Tinkering Around
							</Link>
						</Button>
						<Button position="relative" variant="text" sx={{ paddingLeft: '20px', paddingRight: '20px', my: 2, color: 'white', display: 'block', fontFamily: "Courier Prime" }}
						>
							<Link to="resume" spy={true} smooth={true} offset={50} duration={500} >
								Download my Resume
							</Link>
						</Button>
					</Box>
				</AppBar>
			</ThemeProvider>
		</>
	)
}
