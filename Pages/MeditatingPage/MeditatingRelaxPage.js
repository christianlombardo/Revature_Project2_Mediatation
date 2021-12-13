import React from "react";
import { Provider } from "react-redux";
import FavoriteButton from "../../Components/Meditating/FavoriteButton";
import MeditationInstructions from "../../Components/Meditating/Instructions";
import TimerButtons from "../../Components/Meditating/Timer/TimerButtons";
import TimerClass from "../../Components/Meditating/Timer/TimerClass";
import TimerDisplay from "../../Components/Meditating/Timer/TimerDisplay";


const MeditatingRelaxPage = (props) => {
    

    return(
        <div>
            <div className="container text-center">
                <h1>{/*props.name*/}</h1> { /* <FavoriteButton /> */}
                {/* <TimerDisplay />
                <TimerButtons /> */}
                
                <TimerClass minutes="17" /> {/*minutes=props.minutes*/}
                {/*meditation={props.meditation_id}*/}
                {
                // Dynamic Instructions
                    // Every minute give a new set of instructions.
                    // 5 minutes - 5 instructions.
                    
                }
                {/* { props.instructions.map((instruction) => ) } */}
                <div>Find yourself a quiet place to relax. This is your time...a time for complete and utter relaxation.</div>
                <div>Become aware of your breathing, and notice how your abdomen rises and falls with each breath.</div>
                <div>Take a long slow deep breath in through your nose, all the way down into your stomach. Hold the breath for just a moment, and then exhale through your mouth. Allow your breath to carry away all stress and tension as the air floods out of your lungs.</div>
                <div>Take another slow breath in through your nose. Fill your lungs completely. Hold it for a moment...and  release the breath through your mouth. Empty your lungs completely.</div>
                <div>Take a third deep breath in. Hold it for a moment, and then let it go.</div>
                <div>Feel your body now is more relaxed.</div>
                <div>During this relaxation, you will gently tense various muscles throughout your body.</div>
                <div>Just contract each muscle firmly but gently as you breathe in. At any time if you feel uncomfortable, you can simply relax and breathe normally.</div>
                <div>Bring your awareness to your feet and toes. Breathe in deeply through your nose, and as you do, gradually curl your toes down and tense the muscles in the soles of your feet.</div>
                <div>Hold your breath for just a few seconds and then release the muscles in your feet as you breathe out. Feel the tension in your feet wash away as you exhale. Notice how different your feet feel when tensed and when they are relaxed.</div>
                <div>Now let go of all the tension. Breathe in, raise your wrists towards your shoulders and tighten the muscles in your upper arms.'</div>
                <div>Hold that breath and that contraction for just a moment...and then gently lower your arms and breathe all the way out.</div>
                <div>Feel how relaxing it is to release any tightness and to breathe away all the tension.</div>

                {/* Diary Notes textarea to display after the meditation timer completes.*/}

                {/* 
                <MeditationInstructions />
                <MeditationDiaryNotes /> */}
            </div>
        </div>
        )
    }

export default MeditatingRelaxPage;