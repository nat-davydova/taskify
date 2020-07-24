export const filters = (tasksArr, filterCriteria, currentValue) => {
  const filteredArr = []

  tasksArr.forEach(elem => {
    if (currentValue === 'all' || elem[filterCriteria] === currentValue) {
      filteredArr.push(elem)
    }
  })

  return filteredArr
}
