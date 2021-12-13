import React from "react";
import { Provider } from "react-redux";
import FavoriteButton from "../../Components/Meditating/FavoriteButton";
import MeditationInstructions from "../../Components/Meditating/Instructions";
import TimerButtons from "../../Components/Meditating/Timer/TimerButtons";
import TimerClass from "../../Components/Meditating/Timer/TimerClass";
import TimerDisplay from "../../Components/Meditating/Timer/TimerDisplay";
import './style.css';
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";

const MeditatingBreathePage = (props) => {
    

    return(
        <div>
            <div className="container text-center">
                <h1>{/*props.name*/}</h1> { /* <FavoriteButton /> */}
                {/* <TimerDisplay />
                <TimerButtons /> */}
                
                <TimerClass minutes="15" /> {/*minutes=props.minutes*/}
                {/*meditation={props.meditation_id}*/}
                {
                // Dynamic Instructions
                    // Every minute give a new set of instructions.
                    // 5 minutes - 5 instructions.
                    
                }
                {/* { props.instructions.map((instruction) => ) } */}

                <h1>Instructions for Breathing Style:</h1>
                <ul class="list-group">
                <li class="list-group-item">1. Gently breathe deeply in air into your nose ...</li>
                <li class="list-group-item">2. feel your abdomen gently expand...</li>
                <li class="list-group-item">3. breathe out of your mouth and let it all go.</li>
                <li class="list-group-item">4. Gently repeat.</li>
                </ul>
                <Link to= '/MeditationList' className = "lastLink" >Go to List of Meditations</Link>
                {/* Diary Notes textarea to display after the meditation timer completes.*/}

                {/* 
                <MeditationInstructions />
                <MeditationDiaryNotes /> */}
            </div>
        </div>
        )
    }

export default MeditatingBreathePage;