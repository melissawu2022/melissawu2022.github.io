import React from "react";
import { Link } from "react-router-dom";
import { NavigationMenu } from "radix-ui";
import { Text } from "@radix-ui/themes"

import "../App.css"

export default function NavBar() {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item className="NavigationMenuItem">
          <NavigationMenu.Link
            className="NavigationMenuLink"
            href="./aboutMe"
          >
            <Text weight="bold">
              About Me
            </Text>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="NavigationMenuItem">
          <Link
            className="NavigationMenuLink"
            to={"/skills"}
          >
            <Text weight="bold">
              Skills
            </Text>
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="NavigationMenuItem">
          <NavigationMenu.Link
            className="NavigationMenuLink"
            href="https://github.com/radix-ui"
          >
            <Text weight="bold">
              Non-work related things
            </Text>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
