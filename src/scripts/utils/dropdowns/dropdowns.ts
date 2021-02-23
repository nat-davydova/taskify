import { toggleBootstrapBtn } from "../utils";

import { PATH } from "../../configs";

function toggleDropdownBtn(btn: HTMLElement): void {
  toggleBootstrapBtn(btn);
}

function toggleDropdownOptionsList(optionsElem: HTMLElement): void {
  optionsElem.classList.toggle("js-visible");
}

function toggleDropdownToggledAttr(
  dropdownElem: HTMLElement,
  currentToggleStatus: string
): void {
  const newToggleVisibilityStatus =
    currentToggleStatus === "true" ? "false" : "true";

  dropdownElem.setAttribute("data-toggled", newToggleVisibilityStatus);
}

export function toggleDropdown(dropdown: HTMLElement): void {
  const dropdownBtn = dropdown.querySelector(PATH.dropdown.toggleBtn);
  const dropdownOptions = dropdown.querySelector(PATH.dropdown.options);
  const currentToggleStatus = dropdown.dataset.toggled;

  if (
    !(dropdownBtn instanceof HTMLElement) ||
    !(dropdownOptions instanceof HTMLElement) ||
    !currentToggleStatus
  )
    return;

  toggleDropdownBtn(dropdownBtn);
  toggleDropdownOptionsList(dropdownOptions);
  toggleDropdownToggledAttr(dropdown, currentToggleStatus);
}

export function checkIfAnyDropdownOpened(): Node | undefined {
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
}
