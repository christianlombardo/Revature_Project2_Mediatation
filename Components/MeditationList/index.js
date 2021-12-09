import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import './style.css';
import mantra from '../../mantra.png';
import breath from '../../breathing.png';
import progressive from '../../progressiverelaxation.png';
    const MeditationList = () => {

        // Data from the source database, JSON, etc......
        const [meditations, setMeditation] = useState ([

            {
                id: 1,
                name: 'Mantra Meditation',
                image: mantra,
                shortDescription: 'Meant for relaxation and to increase focus through repetition of a mantra',
                longDiscription: 'Mentra meditation is the reciting of a word or phrase. This can be done either outloud or in the mind.',
                timespend: 30,
                link: 'Link to desired style page'
            },
            {
                id: 2,
                name: 'Progressive Relaxation',
                image: progressive,
                shortDescription: 'Brief description',
                longDiscription: 'this is a long and detailed discription',
                timespend: 55,
                link: 'Link to desired style page'
            },
            {
                id: 3,
                name: 'Breathing Meditation',
                image: breath,
                shortDescription: 'Brief description',
                longDiscription: 'this is a long and detailed discription',
                timespend: 20,
                link: '/MeditationDetailPage'
            }
        ])

        // function detailPages() {
        //     {meditations.map((meditation) => (
        //         <div>
        //         <h3>{meditation.name}</h3>
        //         <p>{meditation.image}</p>
        //         <p>{meditation.longDescription}</p>
        //         <Link to='/MeditatingPage' name={meditation.name}>Meditate now</Link>
        //         <br /><br />
        //     </div>
        //         ))}
        // }

        return (
            <div>
                {meditations.map((meditation) => (
                    <div className = "mappingDiv">
                        <h3 className = "meditationName">{meditation.name}</h3>
                        <img className = "meditationImage" src = {meditation.image} alt = "oop" />
                        <p className = "meditationShortDescription">{meditation.shortDescription}</p>
                        <p className = "meditationTimespend">You’ve spent {meditation.timespend} minutes time in this style.</p>
                        <a href={meditation.link} className = "meditationLink">Click to view more...</a>
                        <br /><br />
                    </div>
                ))}
            </div>
        )

}

export default MeditationList