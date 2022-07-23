import { Box, Heading, Input, Button, Text } from "@chakra-ui/react";
import React from "react";
import graph1 from "../assets/graph1.png";
import graph2 from "../assets/graph2.png";
import Styles from "../Styles/Footer.module.css";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";

const Footer = () => {
  return (
    <div className={Styles.parent}>
      <Box display="flex">
        <Box width="300px" marginTop="100px">
          <img src={graph1} alt="" />
        </Box>

        <Box
          padding="20px"
          border="1px solid white"
          width="720px"
          margin="auto"
        >
          <Heading fontSize="49px" color="white">
            Unlock the possibilities
          </Heading>

          <Text>
            Work As One™. Experience effortless collaboration with Wrike’s work
            management platform.
          </Text>
          <Box border="1px solid white" marginBottom="80px">
            <Input
              htmlSize={4}
              width="400px"
              placeholder="Enter your business email"
              height="60px"
              marginRight="20px"
              background="white"
              marginLeft="40px"
            />
            <Button
              background="green.500"
              color="white"
              height="58px"
              width="180px"
            >
              Start free trial
            </Button>
          </Box>
        </Box>
        <Box width="300px" marginTop="100px">
          <img src={graph2} alt="" />
        </Box>
      </Box>
      <Box
        display="flex"
        width="70%"
        justifyContent="space-between"
        margin="auto"
        className={Styles.box}
      >
        <Box>
          <Heading color="white" fontSize="20px">
            Product
          </Heading>
          <Box display="flex" flexDirection="column" gap="6px" marginTop="10px">
            <Text>Product tour</Text>
            <Text>Pricing</Text>
            <Text>Templates</Text>
            <Text>Apps & integrations</Text>
            <Text>Task management</Text>
            <Text>Gantt charts</Text>
            <Text>Wrike status</Text>
            <Text>Security</Text>
            <Text>CA notice at collection</Text>
            <Text>API</Text>
          </Box>
        </Box>
        <Box>
          <Heading color="white" fontSize="20px">
            Solutions
          </Heading>
          <Box display="flex" flexDirection="column" gap="6px" marginTop="10px">
            <Text>All teams</Text>
            <Text>Marketing</Text>
            <Text>Creative</Text>
            <Text>Project management</Text>
            <Text>Product development</Text>
            <Text>Business operations</Text>
            <Text>Professional servies</Text>
            <Text>Students</Text>
          </Box>
        </Box>
        <Box>
          <Heading color="white" fontSize="20px">
            Resources
          </Heading>
          <Box display="flex" flexDirection="column" gap="6px" marginTop="10px">
            <Text>Help Center</Text>
            <Text>Community</Text>
            <Text>Webinars</Text>
            <Text>Interactive training</Text>
            <Text>Support</Text>
            <Text>Google project management tools</Text>
            <Text>Remote Work Guide</Text>
            <Text>Project management software</Text>
          </Box>
        </Box>

        <Box>
          <Heading color="white" fontSize="20px">
            Company
          </Heading>
          <Box display="flex" flexDirection="column" gap="6px" marginTop="10px">
            <Text>About us</Text>
            <Text>Careers</Text>
            <Text>Our customers</Text>
            <Text>Blog</Text>
            <Text>Events</Text>
            <Text>Newsroom</Text>
            <Text>Partner program</Text>
            <Text>User conference</Text>
            <Text>Contact us</Text>
            <Text></Text>
          </Box>
        </Box>
        <Box>
          <Heading color="white" fontSize="20px">
            Guides
          </Heading>
          <Box display="flex" flexDirection="column" gap="6px" marginTop="10px">
            <Text>Project Management Guide</Text>
            <Text>Professional Services Guide</Text>
            <Text>Kanban Guide</Text>
            <Text>Agile Guide</Text>
            <Text>Remote Work Guide</Text>
            <Text>Return To Work Guide</Text>
            <Text>Marketing Guide</Text>
            <Text>Scrum Guide</Text>
            <Text>Product Management Guide</Text>
            <Text>Digital Marketing Guide</Text>
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="end" width="85%" marginTop="20px">
        <Box width="30%" color="white">
          <Heading fontSize="20px">Latest in Wrike Blog</Heading>
          <Text color="gray" marginTop="10px">
            Why Your Team Needs Social Media Automation in 2022 RFQs Explained:
            How to Write a Request for Quote Lessons We Can Learn From the Great
            Resignation Do Remote Marketing Jobs Offer Higher Salaries?
            Marketing to Gen Z: The Complete Marketing Strategy Guide How To
            Enhance Design Operations for Creative Teams The State of IT in
            2022: Why IT Teams Need Flexible Project Management
          </Text>
        </Box>
      </Box>
      <Box
        borderBottom="1px solid gray"
        width="85%"
        margin="auto"
        marginTop="40px"
        marginBottom="25px"
      ></Box>
      <Box
        display="flex"
        justifyContent="space-between"
        paddingBottom="20px"
        margin="auto"
        width="85%"
      >
        <Box display="flex">
          <Box width="100px">
            <img
              src="https://d1c5qktmphn2d.cloudfront.net/web-grid/v3/3.16.3/components/footer/img/apple_en.svg"
              alt=""
            />
          </Box>
          <Box width="100px">
            <img
              src="https://d1c5qktmphn2d.cloudfront.net/web-grid/v3/3.16.3/components/footer/img/google_play_en.svg"
              alt=""
            />
          </Box>
          <Box>
            <PhoneIcon />
          </Box>
        </Box>
        <Box color="white">
          <Text> ©2006-2022 Wrike, Inc. All rights reserved.</Text>
          <Text>
            {" "}
            Patented. Privacy Policy. Terms of Service. Cookie Preferences
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
