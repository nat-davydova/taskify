export const search = (list, query) => {
  const queryRegExp = new RegExp(query, 'ig')

  const searchResults = []

  list.forEach(elem => {
    const { taskTitle } = elem

    if (queryRegExp.test(taskTitle)) {
      searchResults.push(elem)
    }
  })

  return searchResults
}
