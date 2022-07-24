import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import AllRoutes from "./Routes/AllRoutes";
import Home from "./Components/Home";
function App() {
  return (
    <div>
      <AllRoutes />
      <Home />
    
      <Footer />
    </div>
  );
}

export default App;
