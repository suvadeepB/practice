import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/View/Home/Banner";
import Homepagelayout from "../src/View/Layout/Homepagelayout";
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Homepagelayout />}>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/account" element={<Account />} /> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
