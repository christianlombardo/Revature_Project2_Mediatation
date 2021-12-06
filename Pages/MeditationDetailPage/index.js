import React from 'react';
import "./style.css";
import MantraPageHeader from './MantraPageHeader';

const MeditaionDetailPage = () => {

    
    return (
       
        <div>
            <header>
            <img src={logo} className = "Images" alt="oop" height = "25%" width = "25%"/>
            </header>
            <body>
           <h1 className = "title">Mantra Meditation</h1>
           <h3 className = "discriptionHomePage">Meditation application for the user to gain some quiet time for the mind. The user stops to take some time out during the day to  reconnect with their true self. Choose from a wide selection of meditation styles and track your sessions with our built in timers. We look forward to 
           helping you Reconnect to the things that matter to you.
           </h3>
           </body>
        </div>
    )
}

export default MeditaionDetailPage;
