import { toggleBootstrapBtn, checkElemArgValid } from '../utils'

import { PATH } from '../../configs/path'

export const dropdownToggle = dropdown => {
  checkElemArgValid(dropdown, 'dropdownToggle')
  console.log(dropdown)
}
