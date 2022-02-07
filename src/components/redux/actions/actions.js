import {
  TOGGLE_MODE,
  QUOTATION_TOGGLE,
  MODAL_CHOOSEN_TOGGLE,
  PROGRESS_BAR_SET,
  OPEN_MESSENGER,
} from "./actionTypes";

export const onToggleMode = () => ({
  type: TOGGLE_MODE,
});

export const onQuotationModal = () => ({
  type: QUOTATION_TOGGLE,
});
export const onChoosenModal = () => ({
  type: MODAL_CHOOSEN_TOGGLE,
});

export const onProgressBarSet = (progress) => ({
  type: PROGRESS_BAR_SET,
  progress: progress,
});

export const onOpenMessenger = () => ({
  type: OPEN_MESSENGER,
});
