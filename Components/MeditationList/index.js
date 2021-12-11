import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './style.css';
import mantras from '../../mantra.png';
import breath from '../../breathing.png';
import progressive from '../../progressiverelaxation.png';
    const MeditationList = () => {

        // Data from the source database, JSON, etc......
        const [mantra, setMantra] = useState ([

            {
                id: 1,
                name: 'Mantra Meditation',
                image: mantras,
                shortDescription: 'Meant for relaxation and to increase focus through repetition of a mantra',
                longDiscription: 'Mentra meditation is the reciting of a word or phrase. This can be done either outloud or in the mind.',
                timespend: 30,
                link: '/MeditationDetailPage'
            },
        ])

        const [relax, setRelax] = useState ([

            {
        
            id: 2,
            name: 'Progressive Relaxation',
            image: progressive,
            shortDescription: 'Brief description',
            longDiscription: 'this is a long and detailed discription',
            timespend: 55,
            link: '/MeditationDetailPage'
        },
    ])
    const [breathing, setBreathing] = useState ([
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

        return (
            <div>
              
                    <div className = "mappingDiv">
                        <h3 className = "meditationName">{mantra.name}</h3>
                        <img className = "meditationImage" src = {mantra.image} alt = "oop" />
                        <p className = "meditationShortDescription">{mantra.shortDescription}</p>
                        <p className = "meditationTimespend">You’ve spent {mantra.timespend} minutes time in this style.</p>
                        <Link to= {mantra.link} className = "meditationLink" name = {mantra.name}>Click to view more </Link>
                        <br /><br />
                    </div>

                    <div className = "mappingDiv">
                        <h3 className = "meditationName">{relax.name}</h3>
                        <img className = "meditationImage" src = {relax.image} alt = "oop" />
                        <p className = "meditationShortDescription">{relax.shortDescription}</p>
                        <p className = "meditationTimespend">You’ve spent {relax.timespend} minutes time in this style.</p>
                        <Link to= {mantra.link} className = "meditationLink" name = {relax.name}>Click to view more </Link>
                        <br /><br />
                    </div>

                    <div className = "mappingDiv">
                        <h3 className = "meditationName">{breathing.name}</h3>
                        <img className = "meditationImage" src = {breathing.image} alt = "oop" />
                        <p className = "meditationShortDescription">{breathing.shortDescription}</p>
                        <p className = "meditationTimespend">You’ve spent {breathing.timespend} minutes time in this style.</p>
                        <Link to= {mantra.link} className = "meditationLink" name = {breathing.name}>Click to view more </Link>
                        <br /><br />
                    </div>
            </div>
        )

}

export default MeditationList