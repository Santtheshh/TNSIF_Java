// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import CollegeList from "./CollegeList";
import AddCollege from "./AddCollege";
import Home from "./Home";

const Footer = () => {
  return (
    <footer style={{ textAlign: "center", padding: "10px", marginTop: "20px", backgroundColor: "#f1f1f1" }}>
      © 2024 Copyright by Santhesh
    </footer>
  );
};

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Navbar />    
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddCollege />} />
            <Route path="/display" element={<CollegeList />} />
          </Routes>
          
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
