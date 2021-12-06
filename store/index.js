import React, { useEffect, useState } from 'react';
import { createStore } from 'redux';
import { useSelector } from 'react-redux'

// initial timer
const initialState = {
    minutes: 5,
    seconds: 0,
    mins: 0,
    secs: 0
}

const TimerBegin = () => {

    const minutes = useSelector(state => state.minutes)

    // const mins = useSelector(state => state.mins)
    // const secs = useSelector(state => state.secs)

    const seconds = 0

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
}


const timerReducer = (state=initialState, action) => {
    if (action.type === "start") {
        
        return {
            //minutes: state.minutes,
            mins: state.mins,
            secs: state.secs,
            TimerBegin
        };
    }
    

    if (action.type === "increment") {
        return {
            minutes: state.minutes + 1,
            mins: state.mins,
            secs: state.secs
        };
    }

    if (action.type === "decrement") {
        return {
            minutes: state.minutes - 1,
            mins: state.mins,
            secs: state.secs
        };
    }

    return state;

}

// create store
const store = createStore(timerReducer)

export default store
