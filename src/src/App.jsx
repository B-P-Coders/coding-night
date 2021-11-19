import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Layout from "./components/Layout"
import Index from './pages/Index';
import Sidebar from './components/Layout';
import Calculator from './pages/Calculator'

export default function App()
{
    return(
        <Router>
           <Sidebar/>

        <Switch>
          <Route path='/Calculator' component={Calculator} />
          <Route exact path='/' component={Index} />
        </Switch>


        </Router>
    )
}


