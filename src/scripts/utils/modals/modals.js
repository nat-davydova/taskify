import { PATH } from "../../configs/path";
import { unmarkErrored, setFocusToElem } from "../utils";

export const closeModal = (modal) => {
  if (!modal) {
    throw new Error("Provide a DOM element in to closeModal function");
  }

  const modalInputs = modal.querySelectorAll("input");
  modalInputs.forEach((elem) => {
    unmarkErrored(elem);
    elem.value = "";
  });

  const modalBackdrop = document.querySelector(PATH.modals.modalBackdrop);
  const appFrame = document.querySelector(PATH.layout.frame);

  setTimeout(() => {
    appFrame.removeChild(modalBackdrop);
  }, 250);

  modal.classList.remove("show");
};

export const openModal = (modal, elemToAutofocus) => {
  if (!modal) {
    throw new Error("Provide a DOM element in to openModal function");
  }

  const modalEl = document.querySelector(modal);

  const modalBackdrop = document.createElement("div");
  modalBackdrop.classList.add("modal-backdrop", "fade", "show");
  const appFrame = document.querySelector(PATH.layout.frame);
  appFrame.appendChild(modalBackdrop);

  modalEl.classList.add("show");

  if (elemToAutofocus) {
    setTimeout(() => {
      const setFocusToElemDOM = modalEl.querySelector(elemToAutofocus);
      setFocusToElem(setFocusToElemDOM);
    }, 250);
  }
};
