import React from 'react'
import css from './container.module.css'

function Container({children}) {
  return (
    <div className={css.container}>{children}</div>
  )
}

export default Container