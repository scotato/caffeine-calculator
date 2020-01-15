import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const icons = {
  "chevron-left": faChevronLeft,
  "chevron-right": faChevronRight
}

export default ({name, ...props}) => <FontAwesomeIcon icon={icons[name]} {...props} />
