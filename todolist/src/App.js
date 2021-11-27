import React, { useState } from "react";
import "./App.css";
import Home from './Home'
import Contact from './Contact'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Link to="/"> Home </Link> <Link to="/about">About</Link>{" "}
        <Link to="/contact">Contact</Link>{" "}       
          <Routes>
            <Route exact path="/"  element={< Home />}/>
            <Route path="/about" render={() => <h3> About us</h3>} />
            <Route path="/contact" element={< Contact />} />
            <Route path="*" render={() =>  <h1> Not found</h1>} />
          </Routes>        
      </div>
    </Router>
  );
}

export default App;
