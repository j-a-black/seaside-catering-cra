import React from "react";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Catering from "../pages/Catering";
import SampleMenu from "../pages/SampleMenu";
import Contact from "../pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./app.scss";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/menu" element={<SampleMenu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
