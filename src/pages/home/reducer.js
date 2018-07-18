// import { Someting } from 'Somewhere';
export const MY_ACTION  = 'MY_ACTION'

const INITIAL_STATE = {};

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MY_ACTION:
            return {
                ...state,
                ...action.payload
            };
        default: return state;
    }
};