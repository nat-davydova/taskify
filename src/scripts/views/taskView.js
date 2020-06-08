import { grabTemplate, appendTemplate } from '../utils'
import { PATH } from '../configs/path'

export const renderTask = ({ taskTitle }) => {
  const taskTemplate = grabTemplate(PATH.task.taskTemplate)
  const taskTitleElem = taskTemplate.querySelector(PATH.task.taskTitle)

  taskTitleElem.textContent = taskTitle

  appendTemplate(taskTemplate, document.querySelector(PATH.panels.tasks.tasksPanelContent))
}
