import React from 'react'

function Button({title,buttonType,ariaLabelName}) {
  return (
    <button type={buttonType} aria-label={ariaLabelName}>{title}</button>
  )
}

export default Button