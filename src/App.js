import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';    /* Switch = Routes in react-router-dom v6 */

import Navbar from './components/navigations/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <>
        <Router>

            <Navbar />  

            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
            </Routes>
            
        </Router>
    </>
  );
}

export default App;
