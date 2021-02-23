import { PATH } from "../../configs";
import { unmarkErrored, setFocusToElem } from "../utils";

const UI_EFFECTS_TIMEOUT_MS = 250;

function cleanInputvalue(input: HTMLInputElement): void {
  const inputElem = input;
  inputElem.value = "";
}

function createBackdrop(): void {
  const modalBackdrop = document.createElement("div");
  modalBackdrop.classList.add("modal-backdrop", "fade", "show");
  const appFrame = document.querySelector(PATH.layout.frame) as HTMLElement;
  appFrame.appendChild(modalBackdrop);
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

function setModalElemToAutofocus(elemToAutofocus: HTMLElement): void {
  setTimeout(() => {
    setFocusToElem(elemToAutofocus);
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

export const openModal = (modal: string, elemToAutofocusClassname?: string) => {
  const modalEl = document.querySelector(modal) as HTMLElement;

  createBackdrop();

  modalEl.classList.add("show");

  if (elemToAutofocusClassname) {
    const elemToAutofocus = modalEl.querySelector(
      elemToAutofocusClassname
    ) as HTMLElement;

    setModalElemToAutofocus(elemToAutofocus);
  }
};
