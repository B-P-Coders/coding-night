import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout"
import Index from './pages/Index';
import Sidebar from './components/Layout';
import Calculator from './pages/Calculator'

export default function App()
{
    return(
        <Router>

          <Routes>
            {/* <Route path='/calculator' element={<Calculator />}/> */}
            <Route exact path='/'  element={<Index/>} />
          </Routes>


        </Router>
    )
}


