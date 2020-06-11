import { grabTemplate, appendTemplate, hideElem } from '../utils'
import { PATH } from '../configs/path'

export const renderTask = ({ taskTitle }) => {
  const taskTemplate = grabTemplate(PATH.task.taskTemplate)
  const taskTitleElem = taskTemplate.querySelector(PATH.task.taskTitle)

  taskTitleElem.textContent = taskTitle

  appendTemplate(taskTemplate, document.querySelector(PATH.panels.tasks.tasksPanelContent))
}

export const hideTask = task => {
  const taskTitle = task.querySelector(PATH.task.taskTitle)
  const taskTitleContent = taskTitle.textContent
  const newTaskTitle = `
    <del>
        ${taskTitleContent}
    </del>
  `

  taskTitle.innerHTML = newTaskTitle

  setTimeout(() => {
    hideElem(task)
  }, 300)
}
