import { TOGGLE_MODE, QUOTATION_TOGGLE, MODAL_WEBSITE_TOGGLE } from "./actionTypes";



export const onToggleMode = () => ({
    type: TOGGLE_MODE
});

export const onQuotationModal = () => ({
    type: QUOTATION_TOGGLE
});
export const onWebsiteModal = () => ({
    type: MODAL_WEBSITE_TOGGLE
});

