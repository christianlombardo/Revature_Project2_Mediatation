import React from 'react'
import Navbar from '../../Components/Navbar'
import RegistrationPage from '../RegistrationPage';
import LoginPage from '../LoginPage';
<<<<<<< HEAD
import MeditationListPage from '../MeditationListPage';
=======
import "./style.css";
import logo from "../../Homepage.png"
>>>>>>> 63c101fa5760a052c4252ac847227a87c2c77664

const HomePage = () => {




<Navbar />
    return (
        
        <div>
<<<<<<< HEAD
            <Navbar />
            <RegistrationPage />
            <MeditationListPage />
=======
            <header>
            <img src={logo} alt="oop" height = "600px" width = "50%"/>
            </header>
            <body>
           <h1 className = "title">Our Mission:</h1>
           <h3 className = "discriptionHomePage">Meditation application for the user to gain some quiet time for the mind. The user stops to take some time out during the day to  reconnect with their true self. Choose from a wide selection of meditation styles and track your sessions with our built in timers. We look forward to 
           helping you Reconnect to the things that matter to you.
           </h3>
           </body>
>>>>>>> 63c101fa5760a052c4252ac847227a87c2c77664
        </div>
    )
}

export default HomePage;
