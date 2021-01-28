export const getFilterValue = (filterOptionElem: HTMLElement) => {
  const filterElem = filterOptionElem.querySelector(
    "[value]"
  ) as HTMLInputElement;

  return filterElem.value;
};

export const getFilterCriteria = (filterBlockElem) => {
  return filterBlockElem.dataset.filterCriteria;
};
