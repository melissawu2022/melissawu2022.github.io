import React, { useState } from "react";
import { DropdownMenu, NavigationMenu, Separator } from "radix-ui";
import { ExternalLinkIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Link, useLocation } from "react-router-dom";
import { Text } from "@radix-ui/themes"
import githubIconWhite from './images/github-mark-white.svg'
import githubIconBlack from './images/github-mark.svg'

import "../App.css"

export default function NavBar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  function toggleMobileMenu() {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  function onHover() {
    setIsHovering(true)
  }

  function onUnhover() {
    setIsHovering(false)
  }

  return (
    <>
      <NavigationMenu.Root className="NavigationMenuRoot">
        <NavigationMenu.List className="NavigationMenuList">
          <NavigationMenu.Item className="NavigationMenuItem">
            <NavigationMenu.Link
              className={`NavigationMenuLink${location.pathname.includes('/aboutMe') ? '--active-nav-item' : ''}`}
              href={`${process.env.PUBLIC_URL}/aboutMe`}
            >
              <Text weight="bold">
                About Me
              </Text>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="NavigationMenuItem">
            <NavigationMenu.Link
              className={`NavigationMenuLink${location.pathname.includes('/skills') ? '--active-nav-item' : ''}`}
              href={`${process.env.PUBLIC_URL}/skills`}
            >
              <Text weight="bold">
                Skills
              </Text>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="NavigationMenuItem">
            <NavigationMenu.Link
              className={`NavigationMenuLink${location.pathname.includes('/hobbies') ? '--active-nav-item' : ''}`}
              href={`${process.env.PUBLIC_URL}/hobbies`}
            >
              <Text weight="bold">
                Hobbies
              </Text>
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <Separator.Root style={{ backgroundColor: "white", width: "1px", height: "2.5rem", margin: "0 0.5rem" }} orientation="vertical" />

          <NavigationMenu.Item className="NavigationMenuItem-github">
            <NavigationMenu.Link
              className="NavigationMenuLink-github"
              href="https://github.com/melissawu2022"
              target="_blank"
            >
              <img className="github-icon-white" src={githubIconWhite} alt="github link" />
              <ExternalLinkIcon />
            </NavigationMenu.Link>
          </NavigationMenu.Item>

        </NavigationMenu.List>
      </NavigationMenu.Root>

      <DropdownMenu.Root className="DropdownMenuRoot" open={mobileMenuOpen} onOpenChange={setMobileMenuOpen} >
        <DropdownMenu.Trigger asChild className={`DropdownMenuTrigger${mobileMenuOpen ? " open" : ""}`}>
          <button onClick={toggleMobileMenu}>
            <HamburgerMenuIcon width="20" height="20" />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal className="DropdownMenuPortal">
          <DropdownMenu.Content className="DropdownMenuContent">
            <div className="dropdown-menu-item-wrapper">
              <Link
                to={"./aboutMe"}
                className="internal-link-styling"
              >
                <DropdownMenu.Item
                  className={`DropdownMenuItem${location.pathname.includes('/aboutMe') ? '--active-nav-item' : ''}`}
                >
                  About Me
                </DropdownMenu.Item>
              </Link>
            </div>

            <div className="dropdown-menu-item-wrapper">
              <Link
                to={"/skills"}
                className="internal-link-styling"
              >
                <DropdownMenu.Item
                  className={`DropdownMenuItem${location.pathname.includes('/skills') ? '--active-nav-item' : ''}`}
                >
                  Skills
                </DropdownMenu.Item>
              </Link>
            </div>

            <div className="dropdown-menu-item-wrapper">
              <Link
                to={"/hobbies"}
                className="internal-link-styling"
              >

                <DropdownMenu.Item
                  className={`DropdownMenuItem${location.pathname.includes('/hobbies') ? '--active-nav-item' : ''}`}
                >
                  Hobbies
                </DropdownMenu.Item>
              </Link>
            </div>

            <Separator.Root style={{ backgroundColor: "white", width: "100%", height: "1px" }} />

            <a href="https://github.com/melissawu2022" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <DropdownMenu.Item onMouseOver={onHover} onMouseLeave={onUnhover} className="DropdownMenuItem">
                {isHovering
                  ? <img className="github-icon-black" src={githubIconBlack} alt="github link" />
                  : <img className="github-icon-white" src={githubIconWhite} alt="github link" />}
                <ExternalLinkIcon />
              </DropdownMenu.Item>
            </a>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root >
    </>
  );
}
