export const getFilterValue = (filterOptionElem) => {
  const filterElem = filterOptionElem.querySelector("[value]");

  return filterElem.value;
};

export const getFilterCriteria = (filterBlockElem) => {
  return filterBlockElem.dataset.filterCriteria;
};
