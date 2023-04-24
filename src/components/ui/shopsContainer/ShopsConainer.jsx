import React from 'react'
import css from './shopsContainer.module.css'

function ShopsContainer({children}) {
  return (
    <div className={css.shopsContainer}>{children}</div>
  )
}

export default ShopsContainer