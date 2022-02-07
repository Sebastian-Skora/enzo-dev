import {
  TOGGLE_MODE,
  QUOTATION_TOGGLE,
  MODAL_CHOOSEN_TOGGLE,
  PROGRESS_BAR_SET,
  OPEN_MESSENGER,
} from "../actions/actionTypes";

const initialState = {
  toggleMode: false,
  quotationOpen: false,
  choosenModal: false,
  openMessenger: false,
  progressBar: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODE: {
      return {
        ...state,
        toggleMode: !state.toggleMode,
      };
    }
    case QUOTATION_TOGGLE: {
      return {
        ...state,
        quotationOpen: !state.quotationOpen,
      };
    }
    case MODAL_CHOOSEN_TOGGLE: {
      return {
        ...state,
        choosenModal: !state.choosenModal,
      };
    }
    case PROGRESS_BAR_SET: {
      return {
        ...state,
        progressBar: action.progress,
      };
    }
    case OPEN_MESSENGER: {
      return {
        ...state,
        openMessenger: true,
      };
    }
    default:
      return state;
  }
}
