import css from './button.module.css'

function Button({children}) {
  return (
    <button className={css.btn} >{children}</button>
  )
}

export default Button;