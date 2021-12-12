import React from 'react'
import breathe from '../../breathing.png';


const MeditationBreathingPage = () => {
    return (
        <div>
             <div className = "mappingDiv">
                        <h3 className = "mantraName">{meditation.name}</h3>
                        <img className = "mantraImage" src = {breathe} alt = "oop" />
                        <p className = "mantradis"></p>
                        <p className = "mantratime">You’ve spent {time} minutes time in this style.</p>
                        <a className = "/" onClick = {page}>Begin Medition</a>
                        <br /><br />
                    </div>
        </div>
    )
}

export default MeditationBreathingPage
