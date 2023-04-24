import React from 'react'
import css from './formContainer.module.css'

function FormContainer({children}) {
  return (
    <div className={css.formContainer}>{children}</div>
  )
}

export default FormContainer