import { PATH } from "../../configs";
import { unmarkErrored, setFocusToElem } from "../utils";

export const closeModal = (modal: HTMLElement) => {
  const modalInputs = modal.querySelectorAll("input");
  modalInputs.forEach((elem) => {
    unmarkErrored(elem);
    // eslint-disable-next-line no-param-reassign
    elem.value = "";
  });

  const modalBackdrop = document.querySelector(
    PATH.modals.modalBackdrop
  ) as HTMLElement;
  const appFrame = document.querySelector(PATH.layout.frame) as HTMLElement;

  setTimeout(() => {
    appFrame.removeChild(modalBackdrop);
  }, 250);

  modal.classList.remove("show");
};

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
