// import views
import * as taskView from "./views/taskView";

// import controllers
import { tasksListController } from "./controllers/tasksListController";
import { searchController } from "./controllers/searchController";
import { filtersController } from "./controllers/filtersController";

// import utils and configs
import { state } from "./state";
import { PATH } from "./configs";
import {
  initScrollbar,
  unmarkErrored,
  getFilterCriteria,
  getFilterValue,
} from "./utils";

import { openModal, closeModal } from "./utils/modals/modals";
import {
  dropdownToggle,
  checkIfAnyDropdownOpened,
} from "./utils/dropdowns/dropdowns";

(function () {
  "use strict";

  // *** EVENT LISTENERS
  document.addEventListener("DOMContentLoaded", () => {
    state.taskList.forEach((elem) => {
      taskView.renderTask(elem);
    });

    initScrollbar(PATH.panels.tasks.tasksPanel);
  });

  document.addEventListener("click", (e) => {
    const target = e.target;

    // dropdowns toggling
    if (target.closest(PATH.dropdown.toggleBtn)) {
      const dropdown = target.closest(PATH.dropdown.dropdownBlock);

      dropdownToggle(dropdown);
    }

    // close opened dropdown onclick everywhere but options part
    if (!target.closest(PATH.dropdown.dropdownBlock)) {
      const openedToggle = checkIfAnyDropdownOpened();
      if (openedToggle) {
        dropdownToggle(openedToggle);
      }
    }

    // apply filter functionality
    if (target.closest(PATH.filter.option)) {
      const filterOptionElem = target.closest(PATH.filter.option);
      const filterBlockElem = target.closest(PATH.filter.filter);

      const filterCriteria = getFilterCriteria(filterBlockElem);
      const currentFilterValue = getFilterValue(filterOptionElem);

      filtersController("addNewFilter", filterCriteria, currentFilterValue);
    }

    // close modal windows
    if (
      target.closest(PATH.modals.closeBtnMain) ||
      target.closest(PATH.modals.closeBtnTop)
    ) {
      const modal = target.closest(PATH.modals.modal);

      closeModal(modal);
    }

    if (target.closest(PATH.modals.modalBackdrop)) {
      const currentModal = document.querySelector(`${PATH.modals.modal}.show`);

      closeModal(currentModal);
    }

    // open add task modal
    if (target.closest(PATH.addTask.openTaskModal)) {
      openModal(PATH.addTask.addTaskModal, PATH.addTask.addTaskTitleInput);
    }

    // adding new task
    if (target.closest(PATH.addTask.saveTaskBtn)) {
      tasksListController("add");
      filtersController("reapplyFilter");
    }

    // checking/unchecking task
    if (target.closest(PATH.task.taskCheckbox)) {
      const task = target.closest(PATH.task.task);
      const taskId = task.dataset.taskId;

      tasksListController("changeCompletenessStatus", taskId);
      setTimeout(() => {
        filtersController("reapplyFilter");
      }, 300);
    }

    // search functional
    if (target.closest(PATH.search.searchBtn)) {
      searchController(target.closest(PATH.search.searchBtn));
    }

    // deleting task
    if (target.closest(PATH.task.taskDelBtn)) {
      const taskId = target.closest(PATH.task.task).dataset.taskId;

      tasksListController("pick", taskId);

      openModal(PATH.delTaskModal.delModal, PATH.delTaskModal.delTaskBtn);
    }

    if (target.closest(PATH.delTaskModal.delTaskBtn)) {
      tasksListController("del");
    }

    // editing task
    if (target.closest(PATH.task.taskEditBtn)) {
      const taskId = target.closest(PATH.task.task).dataset.taskId;

      tasksListController("pick", taskId);

      openModal(PATH.editTaskModal.editModal, PATH.editTaskModal.editTaskInput);
    }

    if (target.closest(PATH.editTaskModal.editTaskBtn)) {
      tasksListController("edit");
    }
  });

  document.addEventListener("keyup", (e) => {
    const target = e.target;

    // search on typing
    if (target.closest(PATH.search.searchInput) && e.code !== "Enter") {
      searchController(target.closest(PATH.search.searchInput));
    }

    // clean errored inputs when start typing
    if (
      (target.closest(PATH.addTask.addTaskTitleInput) ||
        target.closest(PATH.editTaskModal.editTaskInput)) &&
      e.code !== "Enter"
    ) {
      unmarkErrored(target.closest("input"));
    }
  });

  document.addEventListener("keypress", (e) => {
    const target = e.target;

    // if we press 'Enter' when Search Input is focused
    if (
      target.closest(PATH.search.searchInput) &&
      (e.code === "Enter" || e.key === "Enter")
    ) {
      e.preventDefault();

      searchController(target.closest(PATH.search.searchInput));
    }

    // adding new task
    if (
      target.closest(PATH.addTask.addTaskTitleInput) &&
      (e.code === "Enter" || e.key === "Enter")
    ) {
      e.preventDefault();

      tasksListController("add");
    }

    // adding new task
    if (
      target.closest(PATH.editTaskModal.editTaskInput) &&
      (e.code === "Enter" || e.key === "Enter")
    ) {
      e.preventDefault();

      tasksListController("edit");
    }
  });
})();
