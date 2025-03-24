import { useEffect, useRef } from 'react';
import './App.css'
import Contracts from './pages/Contracts';
import Dashboard from './pages/Dashboard';
import Invoice from './pages/Invoice';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';
import Team from './pages/Team';
import Tickets from './pages/Tickets';
import Clients from './pages/Clients';
import Company from './pages/Company';
import Deals from './pages/Deals';
import Leads from './pages/Leads';
import Sales from './pages/Sales';
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import LoadingBar from 'react-top-loading-bar';

function App() {
  
  
  // const location = useLocation();

  

  return (
    <BrowserRouter>
      <Routes>
    
        <Route path='/'  element = {<Dashboard/>}/>
        <Route path='/projects'  element = {<Projects/>}/>
        <Route path='/tasks'  element = {<Tasks/>}/>
        <Route path='/contracts'  element = {<Contracts/>}/>
        <Route path='/invoice'  element = {<Invoice/>}/>
        <Route path='/team'  element = {<Team/>}/>
        <Route path='/tickets'  element = {<Tickets/>}/>
        <Route path='/clients'  element = {<Clients/>}/>
        <Route path='/company'  element = {<Company/>}/>
        <Route path='deals'  element = {<Deals/>}/>
        <Route path='leads'  element = {<Leads/>}/>
        <Route path='sales'  element = {<Sales/>}/>

        {/* <Route path='/c'  element = {<Contracts/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App