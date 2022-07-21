import React from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button
  } from '@chakra-ui/react'
  import {ChevronDownIcon} from "@chakra-ui/icons"

const Menubutton = () => {
  return (
    <div>
      <Menu>
        <MenuButton righticon={<ChevronDownIcon />}>Products</MenuButton>
        <MenuList>
          <MenuItem>Take a Tour</MenuItem>
          <MenuItem>Features</MenuItem>
          <MenuItem>Project Templates</MenuItem>
          <MenuItem>Apps & Integration</MenuItem>
          <MenuItem>Security</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Menubutton;
