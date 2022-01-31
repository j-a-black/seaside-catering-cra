import React from "react";
import Navbar from "../components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./app.scss";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" />
        </Routes>
      </Router>
    </>
  );
};

export default App;
