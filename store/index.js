import { createStore } from 'redux'

// initial timer
const initialState = {
    timer: 5
}

const TimerReducer = (state=initialState, action) => {
    if (action.type === "start") {

        return (
            <div>
                
            </div>
        );
    }
}

export default TimerReducer
