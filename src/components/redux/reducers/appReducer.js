import { TOGGLE_MODE } from '../actions/actionTypes'

const initialState = {
    toggleMode: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case TOGGLE_MODE: {
            return {
                ...state,
                toggleMode: !state.toggleMode
            }
        }
        default:
            return state;
    }
}
