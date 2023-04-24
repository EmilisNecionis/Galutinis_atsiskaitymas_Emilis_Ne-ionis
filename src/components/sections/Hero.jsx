import React from 'react'
import css from './hero.module.css'

function Hero() {
  return (
    <div>
      <img className={css.img} src="../../img/Hero.jpg" alt="" />
      <h2 className={css.logo}>My<span>Shops</span></h2>
    </div>
  )
}

export default Hero