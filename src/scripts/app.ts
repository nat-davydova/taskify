// import views
import * as taskView from "./views";

// import controllers
import {
  filtersController,
  searchController,
  tasksListController,
} from "./controllers";

// import utils and configs
import { state } from "./state";
import { PATH } from "./configs";
import {
  initScrollbar,
  unmarkErrored,
  getFilterCriteria,
  getFilterValue,
  toggleDropdown,
  checkIfAnyDropdownOpened,
  openModal,
  closeModal,
} from "./utils";

(function () {
  // *** EVENT LISTENERS
  document.addEventListener("DOMContentLoaded", () => {
    state.taskList.forEach((elem) => {
      taskView.renderTask(elem);
    });

    initScrollbar(PATH.panels.tasks.tasksPanel);
  });

  document.addEventListener("click", ({ target }) => {
    const targetElem = target as HTMLElement;

    // dropdowns toggling
    if (targetElem && targetElem.closest(PATH.dropdown.toggleBtn)) {
      const dropdown = targetElem.closest(
        PATH.dropdown.dropdownBlock
      ) as HTMLElement;

      toggleDropdown(dropdown);
    }

    // close opened dropdown onclick everywhere but options part
    if (!targetElem.closest(PATH.dropdown.dropdownBlock)) {
      const openedToggle = checkIfAnyDropdownOpened() as HTMLElement;
      if (openedToggle) {
        toggleDropdown(openedToggle);
      }
    }

    // apply filter functionality
    if (targetElem.closest(PATH.filter.option)) {
      const filterOptionElem = targetElem.closest(
        PATH.filter.option
      ) as HTMLElement;
      const filterBlockElem = targetElem.closest(
        PATH.filter.filter
      ) as HTMLElement;

      const filterCriteria = getFilterCriteria(filterBlockElem);
      const currentFilterValue = getFilterValue(filterOptionElem);

      if (filterCriteria) {
        filtersController("addNewFilter", filterCriteria, currentFilterValue);
      }
    }

    // close modal windows
    if (
      targetElem.closest(PATH.modals.closeBtnMain) ||
      targetElem.closest(PATH.modals.closeBtnTop)
    ) {
      const modal = targetElem.closest(PATH.modals.modal) as HTMLElement;

      closeModal(modal);
    }

    if (targetElem.closest(PATH.modals.modalBackdrop)) {
      const currentModal = document.querySelector(
        `${PATH.modals.modal}.show`
      ) as HTMLElement;

      closeModal(currentModal);
    }

    // open add task modal
    if (targetElem.closest(PATH.addTask.openTaskModal)) {
      openModal(PATH.addTask.addTaskModal, PATH.addTask.addTaskTitleInput);
    }

    // adding new task
    if (targetElem.closest(PATH.addTask.saveTaskBtn)) {
      tasksListController("add");
      filtersController("reapplyFilter");
    }

    // checking/unchecking task
    if (targetElem.closest(PATH.task.taskCheckbox)) {
      const task = targetElem.closest(PATH.task.task) as HTMLElement;
      const { taskId } = task.dataset;

      tasksListController("changeCompletenessStatus", taskId);
      setTimeout(() => {
        filtersController("reapplyFilter");
      }, 300);
    }

    // search functional
    if (targetElem.closest(PATH.search.searchBtn)) {
      const searchBtn = targetElem.closest(
        PATH.search.searchBtn
      ) as HTMLElement;

      searchController(searchBtn);
    }

    // deleting task
    if (targetElem.closest(PATH.task.taskDelBtn)) {
      const task = targetElem.closest(PATH.task.task) as HTMLElement;
      const { taskId } = task.dataset;

      tasksListController("pick", taskId);

      openModal(PATH.delTaskModal.delModal, PATH.delTaskModal.delTaskBtn);
    }

    if (targetElem.closest(PATH.delTaskModal.delTaskBtn)) {
      tasksListController("del");
    }

    // editing task
    if (targetElem.closest(PATH.task.taskEditBtn)) {
      const task = targetElem.closest(PATH.task.task) as HTMLElement;
      const { taskId } = task.dataset;

      tasksListController("pick", taskId);

      openModal(PATH.editTaskModal.editModal, PATH.editTaskModal.editTaskInput);
    }

    if (targetElem.closest(PATH.editTaskModal.editTaskBtn)) {
      tasksListController("edit");
    }
  });

  document.addEventListener("keyup", (e) => {
    const { target } = e;
    const targetElem = target as HTMLElement;

    // search on typing
    if (targetElem.closest(PATH.search.searchInput) && e.code !== "Enter") {
      const searchInput = targetElem.closest(
        PATH.search.searchInput
      ) as HTMLElement;

      searchController(searchInput);
    }

    // clean errored inputs when start typing
    if (
      (targetElem.closest(PATH.addTask.addTaskTitleInput) ||
        targetElem.closest(PATH.editTaskModal.editTaskInput)) &&
      e.code !== "Enter"
    ) {
      const inputEl = targetElem.closest("input") as HTMLElement;

      unmarkErrored(inputEl);
    }
  });

  document.addEventListener("keypress", (e) => {
    const { target } = e;
    const targetElem = target as HTMLElement;

    // if we press 'Enter' when Search Input is focused
    if (
      targetElem.closest(PATH.search.searchInput) &&
      (e.code === "Enter" || e.key === "Enter")
    ) {
      e.preventDefault();

      const searchInput = targetElem.closest(
        PATH.search.searchInput
      ) as HTMLElement;

      searchController(searchInput);
    }

    // adding new task
    if (
      targetElem.closest(PATH.addTask.addTaskTitleInput) &&
      (e.code === "Enter" || e.key === "Enter")
    ) {
      e.preventDefault();

      tasksListController("add");
    }

    // adding new task
    if (
      targetElem.closest(PATH.editTaskModal.editTaskInput) &&
      (e.code === "Enter" || e.key === "Enter")
    ) {
      e.preventDefault();

      tasksListController("edit");
    }
  });
})();
