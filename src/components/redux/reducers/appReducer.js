import { TOGGLE_MODE, QUOTATION_TOGGLE, MODAL_CHOOSEN_TOGGLE } from '../actions/actionTypes'

const initialState = {
    toggleMode: false,
    quotationOpen: false,
    choosenModal: false,
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
        case MODAL_CHOOSEN_TOGGLE: {
            return {
                ...state,
                choosenModal: !state.choosenModal
            }
        }
        default:
            return state;
    }
}
