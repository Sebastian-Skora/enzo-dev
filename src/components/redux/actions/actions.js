import { TOGGLE_MODE, QUOTATION_TOGGLE, MODAL_CHOOSEN_TOGGLE } from "./actionTypes";



export const onToggleMode = () => ({
    type: TOGGLE_MODE
});

export const onQuotationModal = () => ({
    type: QUOTATION_TOGGLE
});
export const onChoosenModal = () => ({
    type: MODAL_CHOOSEN_TOGGLE
});

