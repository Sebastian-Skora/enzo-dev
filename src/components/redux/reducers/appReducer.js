import { TOGGLE_MODE, QUOTATION_TOGGLE, QUOTATION_WEBSITE } from '../actions/actionTypes'

const initialState = {
    toggleMode: false,
    quotationOpen: false,
    websiteModal: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case TOGGLE_MODE: {
            return {
                ...state,
                toggleMode: !state.toggleMode
            }
        }
        case QUOTATION_TOGGLE: {
            return {
                ...state,
                quotationOpen: !state.quotationOpen
            }
        }
        case QUOTATION_WEBSITE: {
            return {
                ...state,
                websiteModal: !state.websiteModal
            }
        }
        default:
            return state;
    }
}
