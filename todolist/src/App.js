import React, { useState } from "react";
import "./App.css";
import Home from './Home'
import Contact from './Contact'
import About from './About'
import NotFound from './NotFound'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div class="App-header">
        <Link to="/"> Home </Link> <Link to="/about">About</Link>{" "}
        <Link to="/contact">Contact</Link>{" "}       
          <Routes>
            <Route exact path="/"  element={< Home />}/>
            <Route path="/about" element={< About />}/>
            <Route path="/contact" element={< Contact />} />
            <Route path="*" element={< NotFound />} />
          </Routes>        
      </div>
    </Router>
  );
}

export default App;
