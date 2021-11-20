import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout"
import Index from './pages/Index';
import Sidebar from './components/Layout';
import Calculator from './pages/Calculator'
import Notes from './pages/Notes';
import Math from './pages/Math'
import TimeTable from './pages/Timetable';

export default function App()
{
    return(
        <Router>

          <Routes>
            <Route path='/Math' element={<Math />}/>
            <Route exact path='/notes' element={<Notes/>} />
            <Route exact path='/timetable' element={<TimeTable/>} />
            <Route exact path='/' element={<Index/>} />

          </Routes>


        </Router>
    )
}


