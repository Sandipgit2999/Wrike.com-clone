import React from "react";
import { Box, Button, Input } from "@chakra-ui/react";
import { useContext } from "react";
import { Authcontext } from "../Context/Authcontext";
import { useState } from "react";

const Login = () => {

const context=useContext(Authcontext);
    console.log(context);
    const [email,setEmail]=useState("");
    const [password ,setPassword]=useState("");
console.log(email);
console.log(password);
    const handleemail=(e)=>{
         let em=e.target.value;
         setEmail(em);
         localStorage.setItem("email",email)
    }
    const handlepass=(e)=>{
      let pas=e.target.value;
      setPassword(pas)
      localStorage.setItem("password",password)
    }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box width="25%" height="200px" border="1px solid black">
        <Input />
        <Button width="90%">Next</Button>
      </Box>
      <Box>
        <Input onChange={handleemail} type="email" placeholder="enter email" />
        <Input onChange={handlepass} type="password" placeholder="enter password" />
      </Box>
    </div>
  );
};

export default Login;
