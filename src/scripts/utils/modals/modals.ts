import { PATH } from "../../configs";
import { unmarkErrored, setFocusToElem } from "../utils";

const UI_EFFECTS_TIMEOUT_MS = 250;

function cleanInputvalue(input: HTMLInputElement): void {
  const inputElem = input;
  inputElem.value = "";
}

function removeBackdrop(): void {
  const modalBackdrop = document.querySelector(
    PATH.modals.modalBackdrop
  ) as HTMLElement;

  const appFrame = document.querySelector(PATH.layout.frame) as HTMLElement;

  setTimeout(() => {
    appFrame.removeChild(modalBackdrop);
  }, UI_EFFECTS_TIMEOUT_MS);
}

export function closeModal(modal: HTMLElement): void {
  const modalInputs = modal.querySelectorAll("input");

  modalInputs.forEach((elem) => {
    unmarkErrored(elem);
    cleanInputvalue(elem);
  });

  modal.classList.remove("show");

  removeBackdrop();
}

export const openModal = (modal: string, elemToAutofocus?: string) => {
  const modalEl = document.querySelector(modal) as HTMLElement;

  const modalBackdrop = document.createElement("div");
  modalBackdrop.classList.add("modal-backdrop", "fade", "show");
  const appFrame = document.querySelector(PATH.layout.frame) as HTMLElement;
  appFrame.appendChild(modalBackdrop);

  modalEl.classList.add("show");

  if (elemToAutofocus) {
    setTimeout(() => {
      const setFocusToElemDOM = modalEl.querySelector(
        elemToAutofocus
      ) as HTMLElement;
      setFocusToElem(setFocusToElemDOM);
    }, 250);
  }
};
