import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import axios from "axios";
import Homepage from "./Homepage/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./LoginForm/Login";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </Router>
    </>
  )
}
 export default App;

