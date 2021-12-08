import React, { useEffect, useState } from 'react';
import { createStore } from 'redux';
import { useSelector } from 'react-redux'

// initial timer
const initialState = {
    minutes: 5
}

const timerReducer = (state=initialState, action) => {
    if (action.type === "start") {

        
        return {
            minutes: state.minutes,
            // mins: state.mins,
            // secs: state.secs,
            // TimerBegin
        };
    }
    
    if (action.type === "increment") {
        console.log(state.minutes)
        return {
            minutes: state.minutes + 1
        };
    }

    if (action.type === "decrement") {
        console.log(state.minutes)
        return {
            minutes: state.minutes - 1
        };
    }

    return state;

}

// create store
const store = createStore(timerReducer)

export default store
