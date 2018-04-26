import { incrementCounter, decrementCounter } from '../actions/actionTypes';

const initialState = { counter: 0 };

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case incrementCounter:
            return { ...state, counter: state.counter + 1};
        case decrementCounter:
            return { ...state, counter: state.counter - 1};
        default:
            return state;
    }
};

export default counterReducer;

/* counterReducer - state: + {"counter":0}
counterReducer - state: + {"counter":1}
counterReducer - state: + {"counter":2} */