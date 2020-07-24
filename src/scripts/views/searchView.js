import { renderTasksFromArrayOnly } from '../utils/utils'

export const renderSearchResults = (fullList, searchedTasksArr) => {
  console.log(fullList, searchedTasksArr)
  renderTasksFromArrayOnly(fullList, searchedTasksArr)
}
