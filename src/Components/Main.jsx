import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Styles from "../Styles/Main.module.css";
import wike from "../assets/wike.png";

const Main = () => {
  return (
    <>
      <div>
        <Heading color="white">Stories from our customers</Heading>
        <Box>
          <Box></Box>
          <Box>
            <Text>
              "The end goal was to create an agile, professional design
              engine.Wrike was our top pick;it was the one solution that we felt
              could make thisareality." Ashley Klee,Global Senior
              Designer,KitchenAid KitchenAid
            </Text>
          </Box>
        </Box>
      </div>
      <div className={Styles.parent}>
        <Box display="flex" flexDirection="column" gap="25px">
          <Heading color="white" width="55%" margin="auto" fontSize="48px">
            Transform the way your teams work
          </Heading>
          <Text color="white" width="50%" margin="auto" fontSize="20px">
            Empower your teams to do the best work of their lives with 360°
            visibility, true cross-
            <Text color="white" width="65%" margin="auto">
              departmental collaboration, and powerful automation.
            </Text>
          </Text>
        </Box>
        <Box display="flex" width="85%" margin="auto">
          <Box width="45%">
            <Box
              display="flex"
              flexDirection="column"
              gap="20px"
              marginTop="100px"
              marginRight="110px"
            >
              <Text color="gray">WORK YOUR WAY</Text>
              <Heading color="white">
                Tailored to your needs, not the other way around
              </Heading>
              <Text color="white">
                Customize Wrike to best suit your organization. From custom
                dashboards and workflows to team-specific automation to
                streamline processes, Wrike has everything you need to work your
                way. No one else offers this level of versatility.
              </Text>
              <Text color="white">Learn More</Text>
            </Box>
          </Box>
          <Box>
            <img
              style={{ width: "600px" }}
              src="https://web-static.wrike.com/cdn-cgi/image/width=981,fit=cover,format=auto,q=80/content/uploads/2020/06/rebrand-screenshot_custom-statuces-workflows_2x.png?av=30d697d3e8e3a5bc8494e184b75ff082"
              alt=""
            />
          </Box>
        </Box>

        <Box border="3px solid green" width="85%" margin="auto">
          <Box width="68%" margin="auto" paddingTop="70px" paddingBottom="70px">
            <Text color="white" fontSize="27px">
              Having a single source of truth for information and communication
              makes it easy for leadership to stay in the loop or get a new team
              member up to speed quickly. It mitigates the risk of tasks falling
              through the cracks.
            </Text>
            <Box display="flex" justifyContent="space-between">
              <Text color="white" marginTop="13px">
                Shaun Carlson, Director of R&D and Continuous Innovation, Arvig
              </Text>
              <Box>
                <img
                  src="https://web-static.wrike.com/content/uploads/2021/02/rebrand-quote_logo_white_arvig.svg?av=87b582e470c7fd63e7c8d57152682a5e"
                  alt=""
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display="flex" border="1px solid blue" width="85%" margin="auto">
          <Box>
            <img
              style={{ width: "600px" }}
              src="https://web-static.wrike.com/cdn-cgi/image/width=981,fit=cover,format=auto,q=80/content/uploads/2020/11/rebrand-screenshot_commenting_2x.png?av=8760554efd5d8731bfcbbbd41dc2778f"
              alt=""
            />
          </Box>
          <Box border="1px solid white" width="45%">
            <Box
              border="1px solid white"
              display="flex"
              flexDirection="column"
              gap="20px"
              marginTop="100px"
              marginLeft="110px"
            >
              <Text color="gray">COLLABORATE ACROSS TEAMS</Text>
              <Heading color="white">
                Work in real-time across your entire org
              </Heading>
              <Text color="white">
                Eliminate endless email threads, needless meetings, and copious
                check-ins with real-time commenting and notifications, live
                editing, dynamic reports, and more. Best of all? Information can
                easily be shared with all stakeholders at any time.
              </Text>
              <Text color="white">Learn More</Text>
            </Box>
          </Box>
        </Box>

        <Box border="3px solid green" width="85%" margin="auto">
          <Box
            width="68%"
            border="1px solid white"
            margin="auto"
            paddingTop="70px"
            paddingBottom="70px"
          >
            <Text color="white" fontSize="27px">
              Collaboration has improved dramatically, not because the people
              have changed — we've always wanted to help, but now we have a tool
              that allows us to figure out how we can help each other better.
            </Text>
            <Box
              display="flex"
              border="1px solid white"
              justifyContent="space-between"
            >
              <Text color="white" marginTop="13px">
                Katy Scott, Digital Learning Manager, Monterey Bay Aquarium
              </Text>
              <Box>
                <img
                  src="https://web-static.wrike.com/content/uploads/2021/02/rebrand-quote_logo_white_monterey-bay.svg?av=1dc75eabdbe6724b6e35f7188d1092f3"
                  alt=""
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display="flex" border="1px solid blue" width="85%" margin="auto">
          <Box border="1px solid white" width="45%">
            <Box
              border="1px solid white"
              display="flex"
              flexDirection="column"
              gap="20px"
              marginTop="100px"
              marginRight="110px"
            >
              <Text color="gray">GET END-TO-END VISIBILITY</Text>
              <Heading color="white">
                Always be prepared for what’s next
              </Heading>
              <Text color="white">
                Get real-time updates and see potential roadblocks before they
                happen. Drill down to individual tasks or zoom out for a
                holistic view of everything in your portfolio. With Wrike,
                you’ll always have what you need to deliver more projects,
                faster.
              </Text>
              <Text color="white">Learn More</Text>
            </Box>
          </Box>
          <Box border="1px solid white">
            <img
              style={{ width: "600px" }}
              src="https://web-static.wrike.com/cdn-cgi/image/width=981,fit=cover,format=auto,q=80/content/uploads/2020/06/rebrand-screenshot_kanban-and-gantt_2x.png?av=ecbb4f0a5a6d11d03dbd171cf4cbbc65"
              alt=""
            />
          </Box>
        </Box>

        <Box border="3px solid green" width="85%" margin="auto">
          <Box
            width="68%"
            border="1px solid white"
            margin="auto"
            paddingTop="70px"
            paddingBottom="70px"
          >
            <Text color="white" fontSize="27px">
              We work faster, update key dates for deliverables much more
              quickly, and eliminate human error. We’ve likely saved around 200
              or more hours per year in our launch prep.
            </Text>
            <Box
              display="flex"
              border="1px solid white"
              justifyContent="space-between"
            >
              <Text color="white" marginTop="13px">
                Brynne Roberts, Director of Creative Operations, Fitbit
              </Text>
              <Box>
                <img
                  src="https://web-static.wrike.com/content/uploads/2022/07/rebrand-quote_logo_fitbit_white.svg?av=0cb6037be9d0e4a093d64845f45e4b1d"
                  alt=""
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* //lets start to build */}
        <Box display="flex" border="1px solid white" width="85%" margin="auto">
          <Box border="1px solid white">
            <img style={{ width: "600px" }} src={wike} alt="" />
          </Box>
          <Box border="1px solid white" width="45%">
            <Box
              border="1px solid white"
              display="flex"
              flexDirection="column"
              gap="20px"
              marginTop="100px"
              marginLeft="110px"
            >
              <Text color="gray">BE THE MASTER OF YOUR DATA</Text>
              <Heading color="white">
                Take advantage of our industry-leading security
              </Heading>
              <Text color="white">
                Get all the advantages of a cloud-based work management platform
                with the security you’d expect from an on-premises system. Our
                enterprise-grade security is unparalleled, and gives you full
                control over your data.
              </Text>
              <Text color="greenyellow">Be Secure with Wrike</Text>
            </Box>
          </Box>
        </Box>

        <Box border="3px solid green" width="85%" margin="auto">
          <Box
            width="68%"
            border="1px solid white"
            margin="auto"
            paddingTop="70px"
            paddingBottom="70px"
          >
            <Text color="white" fontSize="27px">
              I am so glad that we have Wrike as opposed to having information
              in hundreds of spreadsheets going around thousands of emails or
              worse, just in people’s heads.
            </Text>
            <Box
              display="flex"
              border="1px solid white"
              justifyContent="space-between"
            >
              <Text color="white" marginTop="13px">
                Dave Rorke, Project Officer, University of New South Wales
              </Text>
              <Box>
                <img
                  src="https://web-static.wrike.com/content/uploads/2021/02/rebrand-quote-logo_white_unsw-sydney.svg?av=cf883813870f9a9b9a089b0de89c24d9"
                  alt=""
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Main;
