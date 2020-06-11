export const search = (list, query) => {
  const queryRegExp = new RegExp(query, 'ig')

  const searchResults = []

  list.forEach(elem => {
    const { taskTitle } = elem

    if (taskTitle.match(queryRegExp)) {
      searchResults.push(taskTitle)
    }
  })

  return searchResults
}
