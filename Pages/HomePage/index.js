import React from 'react'
import Navbar from '../../Components/Navbar'
import RegistrationPage from '../RegistrationPage';
import LoginPage from '../LoginPage';
import "./style.css";
import logo from "../../Homepage.png"

const HomePage = () => {




<Navbar />
    return (
        
        <div>
            <header>
            <img src={logo} alt="oop" height = "600px" width = "50%"/>
            </header>
            <body>
           <h1 className = "title">Our Mission:</h1>
           <h3 className = "discriptionHomePage">Meditation application for the user to gain some quiet time for the mind. The user stops to take some time out during the day to  reconnect with their true self. Choose from a wide selection of meditation styles and track your sessions with our built in timers. We look forward to 
           helping you Reconnect to the things that matter to you.
           </h3>
           </body>
        </div>
    )
}

export default HomePage;

