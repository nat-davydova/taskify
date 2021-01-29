import { toggleBootstrapBtn } from "../utils";

import { PATH } from "../../configs";

const toggleDropdownBtn = (btn: HTMLElement) => {
  toggleBootstrapBtn(btn);
};

const toggleDropdownOptions = (optionsElem: HTMLElement) => {
  optionsElem.classList.toggle("js-visible");
};

export const dropdownToggle = (dropdown: HTMLElement) => {
  const dropdownBtn = dropdown.querySelector(
    PATH.dropdown.toggleBtn
  ) as HTMLElement;
  const dropdownOptions = dropdown.querySelector(
    PATH.dropdown.options
  ) as HTMLElement;
  const currentToggleStatus = dropdown.dataset.toggled;

  toggleDropdownBtn(dropdownBtn);
  toggleDropdownOptions(dropdownOptions);
  // eslint-disable-next-line no-param-reassign
  dropdown.dataset.toggled = currentToggleStatus === "true" ? "false" : "true";
};

export const checkIfAnyDropdownOpened = () => {
  const dropdowns = document.querySelectorAll(PATH.dropdown.dropdownBlock);

  let toggled = false;

  for (let i = 0; i < dropdowns.length; i++) {
    const currentEl = dropdowns[i];

    if (currentEl.dataset.toggled === "true") {
      toggled = currentEl;
      break;
    }
  }

  return toggled;
};
