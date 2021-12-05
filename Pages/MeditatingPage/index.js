import React from "react";
import Meditating from "../../Components/Meditating";
import FavoriteButton from "../../Components/Meditating/FavoriteButton";
import TimerButtons from "../../Components/Meditating/Timer/TimerButtons";
import TimerDisplay from "../../Components/Meditating/Timer/TimerDisplay";

const MeditatingPage = (props) => {
    return(
        <div>
            <h1>{props.name}</h1> { /* <FavoriteButton /> */}
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
    )

}

export default MeditatingPage