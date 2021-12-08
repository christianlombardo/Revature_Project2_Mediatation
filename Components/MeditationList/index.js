import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";

    const MeditationList = () => {

        // Data from the source database, JSON, etc......
        const [meditations, setMeditation] = useState ([

            {
                id: 1,
                name: 'Mantra Meditation',
                image: 'Image of style',
                shortDescription: 'Brief description',
                longDiscription: 'this is a long and detailed discription',
                timespend: 30,
                link: 'Link to desired style page'
            },
            {
                id: 2,
                name: 'Progressive Relaxation',
                image: 'Image of style',
                shortDescription: 'Brief description',
                longDiscription: 'this is a long and detailed discription',
                timespend: 55,
                link: 'Link to desired style page'
            },
            {
                id: 3,
                name: 'Breathing Meditation',
                image: 'Image of style',
                shortDescription: 'Brief description',
                longDiscription: 'this is a long and detailed discription',
                timespend: 20,
                link: 'Link to desired style page'
            }
        ])

        function detailPages() {
            {meditations.map((meditation) => (
                <div>
                <h3>{meditation.name}</h3>
                <p>{meditation.image}</p>
                <p>{meditation.longDescription}</p>
                <Link to='/MeditatingPage' name={meditation.name}>Meditate now</Link>
                <br /><br />
            </div>
                ))}
        }

        return (
            <div>
                {meditations.map((meditation) => (
                    <div>
                        <h3>{meditation.name}</h3>
                        <p>{meditation.image}</p>
                        <p>{meditation.shortDescription}</p>
                        <p>You’ve spent {meditation.timespend} minutes time in this style.</p>
                        {/* {<a href={meditation.link}>Click to view more...</a>} */}
                        <br /><br />
                    </div>
                ))}
            </div>
        )

}

export default MeditationList