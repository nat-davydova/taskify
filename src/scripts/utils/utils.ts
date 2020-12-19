import PerfectScrollbar from "perfect-scrollbar";

// COLLECTION OF HELPERS FUNCTIONS

// - common
// - strings related
// - ui-related
// - tasks related
// - templates related
// - modals related
// - scrollbar related

// *** COMMON

export function isStringEmpty(stringArg: string): boolean {
  return stringArg.length === 0 || stringArg.trim() === "";
}

export function splitStringBySeparator(
  string: string,
  separator: string
): string[] {
  return string.split(separator);
}

export function setWordToCamelCase(word: string): string {
  return word.slice(0, 1).toUpperCase() + word.slice(1, word.length);
}

export const checkElemArgValid = (elem: any, funcName: any): any => {
  if (!elem || !(elem instanceof window.Element)) {
    throw new Error(
      `Provide a valid DOM-element argument to ${funcName} function`
    );
  }

  return true;
};

// *** STRINGS RELATED
export function convertStringToCamelCase(
  string: string,
  separator: string
): string {
  const strArr = splitStringBySeparator(string, separator);

  const newStrArr = strArr.map((elem: string, index: number) => {
    if (index === 0) {
      return elem;
    }

    return setWordToCamelCase(elem);
  });

  return newStrArr.join("");
}

// *** UI-RELATED

export function hideElem(elem: HTMLElement): void {
  elem.classList.add("js-hidden");
}

export function showElem(elem: HTMLElement): void {
  elem.classList.remove("js-hidden");
}

export function markAsError(elem: HTMLElement): void {
  elem.classList.add("is-invalid");
}

export function unmarkErrored(elem: HTMLElement): void {
  elem.classList.remove("is-invalid");
}

// Bootstrap related function for visual button state toggling
export function toggleBootstrapBtn(btn: HTMLElement): void {
  btn.classList.toggle("active");
}

export function setFocusToElem(elem: HTMLElement): void {
  elem.focus();
}

// *** TEMPLATES RELATED

export const grabTemplate = (templateElem: any): any => {
  checkElemArgValid(templateElem, "grabTemplate");

  return document.importNode(templateElem.content, true);
};

export const appendTemplate = (
  templateElem: any,
  appendDestinationElem: any
): any => {
  if (!templateElem || !(templateElem instanceof window.DocumentFragment)) {
    throw new Error("Add a valid template element to appendTemplate function");
  }

  checkElemArgValid(appendDestinationElem, "appendTemplate");

  appendDestinationElem.append(templateElem);
};

// *** SCROLLBAR RELATED
export const scrollbarIniting = (elemWithScrollbar: any): any => {
  isStringEmpty(elemWithScrollbar);

  const ps = new PerfectScrollbar(elemWithScrollbar);
};
