import { createStore } from 'redux'

// initial timer
const initialState = {
    minutes: 5
}

const timerReducer = (state=initialState, action) => {
    if (action.type === "start") {
        return {
            minutes: state.minutes
        };
    }
    

    if (action.type === "increment") {
        return {
            timer: state.minutes + 1,
        };
    }

    if (action.type === "decrement") {
        return {
            timer: state.minutes - 1,
        };
    }

    return state;

}

// create store
const store = createStore(timerReducer)

export default store
