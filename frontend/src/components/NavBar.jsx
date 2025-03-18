import React from 'react';
import { Link } from "react-router-dom";


function NavBar(){
    return(
        <nav>
            <Link to='/'>Dashboard</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/tasks'>Tasks</Link>
            <Link to='/contracts'>Contracts</Link>
            <Link to='/tickets'>Tickets</Link>
            <Link to='/invoice'>Invoice</Link>
            <Link to='/team'>Team</Link>

        </nav>
    );

}

export default NavBar;