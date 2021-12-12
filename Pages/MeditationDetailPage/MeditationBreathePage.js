import React from 'react'

const MeditationBreathePage = (props) => {
    return (
        <div>
            <header>
       <img src={props.image} className = "meditationDetail" alt="oop" />
      </header>
        <body>
            <p></p>
       <h1 className = "title">{props.name}</h1>
       <h3 className = "discriptionHomePage">{props.longDiscription}
       </h3>
       <Link to= '/TimePage' className = "meditationStart" >Start Meditation</Link>
       </body>
        </div>
    )
}

export default MeditationBreathePage
