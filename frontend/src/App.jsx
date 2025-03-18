import { useState } from 'react' 
import './App.css'
import { BrowserRouter as Router , Route ,Routes } from "react-router-dom";
//import SideBar from './components/SideBar';
import Contracts from './pages/Contracts';
import Dashboard from './pages/Dashboard';
import Invoice from './pages/Invoice';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';
import Tickets from './pages/Tickets';
import Team from './pages/Team';
import NavBar from './components/NavBar';



//import { BrowserRouter,Route,Routes } from "react-router-dom";
function App(){

  return(
    <Router>
      <NavBar/>
    <Routes>
      <Route path ='/'element={<Dashboard/>}/>
      <Route path ='/projects'element={<Projects/>}/>
      <Route path ='/tasks'element={<Tasks/>}/>
      <Route path ='/contracts'element={<Contracts/>}/>
      <Route path ='/tickets'element={<Tickets/>}/>
      <Route path ='/invoice'element={<Invoice/>}/>
      <Route path ='/team'element={<Team/>}/>
    </Routes>
    </Router>
  );
};

export default App
