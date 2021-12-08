import React, {useState} from 'react';
import { useSelector } from 'react-redux';

const TimerDisplay = () => {

    const minutes = useSelector(state => state.minutes)
    const mins = useSelector(state => state.mins)
    const secs = useSelector(state => state.secs)
    // const seconds = 0

    // const [[mins, secs], setTime] = React.useState([minutes, seconds]);

    // const tick = () => {
    //     if (mins === 0 && secs === 0) {
    //         setTime([59, 59]);
    //     } else if (secs === 0) {
    //         setTime([mins - 1, 59]);
    //     } else {
    //         setTime([mins, secs - 1]);
    //     }
    // };

    // const reset = () => setTime([parseInt(minutes), parseInt(seconds)]);

    // React.useEffect(() => {
    //     const timerId = setInterval(() => tick(), 1000);
    //     return () => clearInterval(timerId);
    // });

    return (
        <div>
            <h1>{`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</h1>
            <h1>{minutes}:00</h1>
        </div>
    )
}

export default TimerDisplay
