import React from 'react'
import HomePage from '../../Pages/HomePage';
import './style.css';
import {Link} from 'react-router-dom';
import LoggedNavbar from './LoggedNavbar';
import NotLoggedNavbar from './NotLoggedNavbar';

const Navbar = (props) => {
if(props.isLoggedIn===true){

    return <LoggedNavbar />
}
return <NotLoggedNavbar />
    
}

export default Navbar;


 
