import { grabTemplate, appendTemplate, hideElem } from '../utils'
import { PATH } from '../configs/path'

export const renderTask = ({ taskTitle, taskId }) => {
  const taskTemplate = grabTemplate(PATH.task.taskTemplate)
  const taskEl = taskTemplate.querySelector(PATH.task.task)
  const taskTitleElem = taskTemplate.querySelector(PATH.task.taskTitle)

  taskEl.dataset.taskId = taskId

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

export const deleteTask = taskId => {
  const tasksArr = document.querySelectorAll(PATH.task.task)

  let taskElemToDel

  tasksArr.forEach(elem => {
    if (elem.dataset.taskId === taskId) {
      taskElemToDel = elem
    }
  })

  taskElemToDel.remove()
}
