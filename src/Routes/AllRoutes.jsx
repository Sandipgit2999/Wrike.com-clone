import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
