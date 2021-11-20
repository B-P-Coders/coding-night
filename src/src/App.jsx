import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Index from './pages/Index';
import Notes from './pages/Notes';
import Math from './pages/Math'
import Timetable from './pages/Timetable';
import Calculator from './pages/Calculator';
import Formulas from './pages/Formulas';
import Charts from './pages/FalconFunction'
import BinCalculator from './pages/BinCalculator';

export default function App()
{
  return(
    <Router basename="/">

          <Routes>
            <Route path='/Math' element={<Math />}/>
            <Route path='/timetable' element={<Timetable/>}/>
            <Route path='/notes' element={<Notes />}/>
            <Route path='/formulas' element={<Formulas />}/>
            <Route path='/charts' element={<Charts/>}/>
            <Route path='/calculator' element={<Calculator />}/>
            <Route exact path='/' element={<Index/>} />
            <Route path='/bincalculator' element={<BinCalculator />}/>

          </Routes>
        </Router>
    )
}


