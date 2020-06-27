import { grabTemplate, appendTemplate, hideElem } from '../utils'
import { PATH } from '../configs/path'

export const renderTask = taskData => {
  if (
    !taskData ||
    typeof taskData !== 'object'
  ) {
    throw new Error('Please provide taskData to renderTask function')
  }

  const { taskTitle, taskId } = taskData

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

export const editTask = (taskId, newTitle) => {
  const tasksArr = document.querySelectorAll(PATH.task.task)

  let taskElemToEdit

  tasksArr.forEach(elem => {
    if (elem.dataset.taskId === taskId) {
      taskElemToEdit = elem
    }
  })

  const titleElem = taskElemToEdit.querySelector(PATH.task.taskTitle)

  titleElem.textContent = newTitle
}
