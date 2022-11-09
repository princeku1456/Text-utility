
import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/textForm';

function App() {
  return (
    <div>
    {/* create a nav bar */}
    <Router>
      <Navbar title="textUtility"/>
      <Routes>
          <Route path="/" element={<TextForm/>}/>
          <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;