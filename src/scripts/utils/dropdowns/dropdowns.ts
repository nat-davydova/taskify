import { toggleBootstrapBtn } from "../utils";

import { PATH } from "../../configs";

const toggleDropdownBtn = (btn: HTMLElement): void => {
  toggleBootstrapBtn(btn);
};

const toggleDropdownOptions = (optionsElem: HTMLElement): void => {
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

export const checkIfAnyDropdownOpened = (): Node | undefined => {
  const dropdowns = document.querySelectorAll(
    PATH.dropdown.dropdownBlock
  ) as NodeList;

  let toggled;

  for (let i = 0; i < dropdowns.length; i += 1) {
    const currentEl = dropdowns[i] as HTMLElement;

    if (currentEl.dataset.toggled === "true") {
      toggled = currentEl;
      break;
    }
  }

  return toggled;
};
