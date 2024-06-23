import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Enterprise from "./components/Enterprise";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
<<<<<<< HEAD
import { Select } from "./components/Select";
import SignUp from "./components/SignUp";
import Testing from "./components/Testing";
import Test2 from "./components/Test2";
import UpworkAndBiz from "./components/ui/Home/UpworkAndBiz";
=======
>>>>>>> 230f7677707c6f33b67c846a37c5564a4bf5628a

import SignUp from "./components/SignUp";

export default function app() {
  return (
<<<<<<< HEAD
    <div >
      <NavBar />
      <Home />
      {/* <Test2/> */}
      <UpworkAndBiz/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enterprise" element={<Enterprise />} />
      </Routes>
      <Login />
      {/* <Testing /> */}
      {/* <Select /> */}
    </div>
=======
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/enterprise" element={<Enterprise />} />
        </Routes>
      </div>
    </Router>
>>>>>>> 230f7677707c6f33b67c846a37c5564a4bf5628a
  );
}
