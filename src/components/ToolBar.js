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
						<Button>
							<Link style={{ textDecoration: "none" }} to="/" spy={true} smooth={true} offset={-80} duration={500} >
								<Typography sx={{ padding: '20px', fontSize: "30px", color: "white", fontFamily: "Courier Prime" }}>
									MELISSA
								</Typography>
							</Link>
						</Button>
						<Button position="relative" variant="text" sx={{ paddingLeft: '20px', paddingRight: '20px', my: 2, color: 'white', display: 'block', fontFamily: "Courier Prime" }}>
							<Link to="aboutMe" spy={true} smooth={true} offset={-250} duration={500} >
								About Me
							</Link>
						</Button>
						<Button position="relative" variant="text" sx={{ paddingLeft: '20px', paddingRight: '20px', my: 2, color: 'white', display: 'block', fontFamily: "Courier Prime" }}>
							<Link to="projects" spy={true} smooth={true} offset={-80} duration={500} >
								Tinkering Around
							</Link>
						</Button>
						<Button position="relative" variant="text" sx={{ paddingLeft: '20px', paddingRight: '20px', my: 2, color: 'white', display: 'block', fontFamily: "Courier Prime" }}
						>
							<Link to="skills" spy={true} smooth={true} offset={-80} duration={500} >
								Skills
							</Link>
						</Button>
						<Button
							variant="contained"
							sx={{
								marginLeft: '45%',
								padding: '20px',
								my: 2,
								color: 'white',
								background: '#4a4a4a',
								':hover': {
								bgcolor: '#5c6960',
								color: '#FFFFF',
								},
								display: 'block',
								fontFamily: "Roboto"
							}}
							href="https://drive.google.com/uc?export=download&id=1vYLct45PCQzmIWJ0NZ72PdSwNSV1-uLG"
						>
							Download my Resume 
						</Button>
					</Box>
				</AppBar>
			</ThemeProvider>
		</>
	)
}


