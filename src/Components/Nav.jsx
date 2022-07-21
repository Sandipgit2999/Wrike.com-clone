import React from "react";
import { Box } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Text,
} from "@chakra-ui/react";

import logo from "../assets/logo.png"

import { ChevronDownIcon } from "@chakra-ui/icons";
import Styles from "../Styles/Nav.module.css"

const Nav = () => {
  return (
    <div>

      <Box
        background="hsl(200,70%,16%)"
        
        // paddingLeft="20px"
        // paddingRight="20px"
        
      >
        <Box width="85%" display="flex"
        border="1px solid white" justifyContent="space-between" >
        <Box
        margin="auto"
          display="flex"
          border="1px solid white"
          width="600px"
          justifyContent="space-between"
          marginBottom="20px"
          marginTop="13px"
          
        >
          <Box border="1px solid white" >
          <img
            width="200px"
            height="20px"
           
            src={logo}
            alt=""
          />
          </Box>
          <Box display="flex" justifyContent="space-between" border="1px solid white" width="420px">
          <Menu>
            <MenuButton color="white" righticon={<ChevronDownIcon />}>
              Product
            </MenuButton>
            <MenuList>
              <MenuItem>Take a Tour</MenuItem>
              <MenuItem>Features</MenuItem>
              <MenuItem>Project Templates</MenuItem>
              <MenuItem>Apps & Integration</MenuItem>
              <MenuItem>Security</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton color="white" righticon={<ChevronDownIcon />}>
              Solutions
            </MenuButton>
            <Box display="flex">
              <Box>
                <MenuList>
                  <p>TEAMS</p>
                  <MenuItem>Project Managers</MenuItem>
                  <MenuItem>Marketing</MenuItem>
                  <MenuItem>Creative</MenuItem>
                  <MenuItem>Professional Services</MenuItem>
                  <MenuItem>Product Development</MenuItem>
                  <MenuItem>Company-Wide</MenuItem>
                </MenuList>
              </Box>
             
            </Box>
          </Menu>
          <Menu>
          <MenuButton color="white" righticon={<ChevronDownIcon />}>
              Pricing
            </MenuButton>
            <MenuButton color="white" righticon={<ChevronDownIcon />}>
              Resources
            </MenuButton>
            <MenuList>
              <MenuItem>Take a Tour</MenuItem>
              <MenuItem>Features</MenuItem>
              <MenuItem>Project Templates</MenuItem>
              <MenuItem>Apps & Integration</MenuItem>
              <MenuItem>Security</MenuItem>
            </MenuList>
          </Menu>
          </Box>
        </Box>
        <Box
          border="1px solid white"
          width="400px"
          
          justifyContent="space-between"
          display="flex"
          paddingTop="20px"
        >
          <Text color="white" marginTop="10px">Contact Sales</Text>
          <Text color="white" marginTop="10px">En</Text>
          <Text color="green.600" marginTop="10px">Log in</Text>
          <Button background="green.500" >Start for free</Button>
        </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Nav;
