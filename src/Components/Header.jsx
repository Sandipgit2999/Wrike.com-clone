import { Button, Box, Heading, Input } from "@chakra-ui/react";
import React from "react";
import Styles from "../Styles/Header.module.css";
import sc from "../assets/sc2.png";
import sc1 from "../assets/sc1.png";
const Header = () => {
  return (
    <div>
      <Box display="flex"  className={Styles.bg}>
        <Box width="300px">
          <img src={sc} alt="" />
        </Box>
        <Box
          padding="20px"
          border="1px solid white"
          width="720px"
          margin="auto"
        >
          <Heading fontSize="49px" color="white">
            Remove barriers, find clarity,
          </Heading>
          <Heading marginLeft="170px" color="white" fontSize="49px">
            exceed goals
          </Heading>
          <p className={Styles.para}>
            Anything is possible with the msot powerful work management software
            at your fingertips
          </p>
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
              Try for free
            </Button>
          </Box>
          <Box color="green.500" marginLeft="45%">
            Our Story
          </Box>
        </Box>
        <Box width="300px" marginTop="100px">
          <img src={sc1} alt="" />
        </Box>
      </Box>
      <Box className={Styles.bg2}>
        <Box
          color="white"
          margin="auto"
          padding="40px"
          border="1px solid white"
          
        >
          <p
            style={{
              margin: "auto",
              marginLeft: "500px",
              marginBottom: "30px",
              marginTop:"50px"
            }}
            margin="auto"
          >
            TRUSTED BY 20,000+ HAPPY CUSTOMERS WORLDWIDE
          </p>

          <Box
            padding="10px"
            justifyContent="space-between"
            margin="auto"
            display="flex"
            border="1px solid white"
            width="1200px"
          >
            <img
              src="https://web-static.wrike.com/content/uploads/2020/09/1440_logoroll_logo_white_google.svg?av=beca5f4cceefb37ded0e3f6cea1d2c34"
              alt=""
            />
            <img
              src="https://web-static.wrike.com/content/uploads/2022/01/1440_logoroll_logo_syneos_white-1.svg?av=3c51d53d3a2752e057f1e1abfbbebf47"
              alt=""
            />
            <img
              src="https://web-static.wrike.com/content/uploads/2020/09/1440_logoroll_logo_white_Siemens.svg?av=5e1fa37e9d06ab82ef08777c7c0e082e"
              alt=""
            />
            <img
              src="https://web-static.wrike.com/content/uploads/2021/02/1440_logoroll_logo_estee-lauder_white.svg?av=2be9b6d45167ac0cde38a9db25481551"
              alt=""
            />
            <img
              src="https://web-static.wrike.com/content/uploads/2021/11/1440_logoroll_logo_nickelodeon_white.svg?av=42b06a13b1119784a23a94a6b260a40e"
              alt=""
            />
            <img
              src="https://web-static.wrike.com/content/uploads/2020/09/1440_logoroll_logo_white_Oglivy.svg?av=ee1653b2fed429de007bf68906de4575"
              alt=""
            />
            <img
              src="https://web-static.wrike.com/content/uploads/2020/09/1440_logoroll_logo_snowflake_white.svg?av=55fc2b6f2809a277065577c0b7f71cf1"
              alt=""
            />
            <img
              src="https://web-static.wrike.com/content/uploads/2021/06/1440_logoroll_logo_lyft_white-1.svg?av=36defb5419ded7146f73cf1f4934c332"
              alt=""
            />
          </Box>
        </Box>
        <Box
          display="flex"
          width="1200px"
          border="1px solid white"
          margin="auto"
          marginTop="50px"
          marginBottom="50px"
        >
          <Box border="1px solid white">
            <img
              src="https://web-static.wrike.com/cdn-cgi/image/width=981,fit=cover,format=auto,q=80/content/uploads/2022/06/promo-ebook_Dark-Matter-of-Work_Dark-theme_2x.png?av=153921f8a3b563eddf08828774c378ba"
              alt=""
            />
          </Box>
          <Box
            marginLeft="80px"
            border="1px solid white"
            width="800px"
            height="100px"
            marginTop="70px"
          >
            <Heading color="white" marginBottom="20px">
              Without a single source of truth for work, it could cost you.
            </Heading>
            <p style={{ color: "white", fontSize: "20px" }}>
              New research from Wrike sheds light on the hidden cost of modern
              work complexities caused by low visibility, wasted time, project
              delays, and employee churn. The results are staggering.
            </p>
            <Heading fontSize="23px" color="green.600" marginTop="20px">
              Download free report 
            </Heading>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Header;
