export function getFilterValue(filterOptionElem: HTMLElement): string {
  const filterElem = filterOptionElem.querySelector(
    "[value]"
  ) as HTMLInputElement;

  return filterElem.value;
}

export function getFilterCriterion(
  filterBlockElem: HTMLElement
): string | undefined {
  return filterBlockElem.dataset.filterCriterion;
}
