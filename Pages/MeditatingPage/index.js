import React from "react";
import { Provider } from "react-redux";
import FavoriteButton from "../../Components/Meditating/FavoriteButton";
import TimerButtons from "../../Components/Meditating/Timer/TimerButtons";
import TimerDisplay from "../../Components/Meditating/Timer/TimerDisplay";

const MeditatingPage = (props) => {

    const hoursMinSecs = {minutes: 5, seconds: 0}

    const { minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[mins, secs], setTime] = React.useState([minutes, seconds]);

    const tick = () => {
   
        if (mins === 0 && secs === 0) {
            setTime([59, 59]);
        } else if (secs === 0) {
            setTime([mins - 1, 59]);
        } else {
            setTime([mins, secs - 1]);
        }
    };

    const reset = () => setTime([parseInt(minutes), parseInt(seconds)]);

    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });
    
    return(
        <div>
            <div className="container text-center">
                <h1>{/*props.name*/}</h1> { /* <FavoriteButton /> */}
                <TimerDisplay />
                <TimerButtons />
                {
                // Begin Meditation Button
                // Dynamic Instructions
                    // Every minute give a new set of instructions.
                    // 5 minutes - 5 instructions.
                
                // Diary Notes textarea to display after the mediataion timer completes.}

                /* 
                <BeginMeditationButton />
                <MeditationInstructions />
                <MeditationDiaryNotes /> */}
            </div>

        </div>
    )

}

export default MeditatingPage