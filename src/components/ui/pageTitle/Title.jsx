import React from 'react'
import css from './title.module.css'

function Title({children}) {
  return (
    <h1 className={css.pageTitle}>{children}</h1>
  )
}

export default Title