import { toggleBootstrapBtn, checkElemArgValid } from '../utils'

import { PATH } from '../../configs/path'

const toggleDropdownBtn = btn => {
  toggleBootstrapBtn(btn)
}

export const dropdownToggle = dropdown => {
  checkElemArgValid(dropdown, 'dropdownToggle')

  const dropdownBtn = dropdown.querySelector(PATH.dropdown.toggleBtn)
  toggleDropdownBtn(dropdownBtn)
}
