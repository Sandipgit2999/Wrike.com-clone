import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { AuthcontextProvider } from "./Context/Authcontext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthcontextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthcontextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
