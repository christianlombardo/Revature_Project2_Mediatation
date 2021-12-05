import React, {useState} from "react";
import {Link} from 'react-router-dom';

    const MeditationList = () => {

        // Data from the source database, JSON, etc......
        const [meditations, setMeditation] = useState ([

            {
                id: 1,
                name: 'Mantra Meditation',
                image: 'Image of style',
                description: 'Brief description',
                timespend: 30,
                link: 'Link to desired style page'
            },
            {
                id: 2,
                name: 'Progressive Relaxation',
                image: 'Image of style',
                description: 'Brief description',
                timespend: 55,
                link: 'Link to desired style page'
            },
            {
                id: 3,
                name: 'Breathing Meditation',
                image: 'Image of style',
                description: 'Brief description',
                timespend: 20,
                link: 'Link to desired style page'
            }
        ])

        return (
            <div>
                {meditations.map((meditation) => (
                    <div>
                        <h3>{meditation.name}</h3>
                        <p>{meditation.image}</p>
                        <p>{meditation.description}</p>
                        <p>You’ve spent {meditation.timespend} minutes time in this style.</p>
                        {/* {<a href={meditation.link}>Click to view more...</a>} */}
                        <Link to='/MeditatingPage' name={meditation.name}>Meditate now</Link>
                        <br /><br />
                    </div>
                ))}
            </div>
        )

}

export default MeditationList