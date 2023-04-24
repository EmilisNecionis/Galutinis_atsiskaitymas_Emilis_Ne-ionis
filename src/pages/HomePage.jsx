import React from 'react'
import Container from '../components/ui/container/Container'
import Title from '../components/ui/pageTitle/Title'
import Slogan from '../components/ui/slogan/slogan'
import Hero from '../components/sections/Hero'
import css from './homePage.module.css'

function HomePage() {
  return (
    <div>
    <Hero/>
    <Container>
      <Title>Home</Title>
      <Slogan/>
      <p className={css.homePara}>We understand that shopping can be both a fun and daunting experience. That's why we're here to provide you with helpful tips, tricks, and resources to make your shopping experience as enjoyable and stress-free as possible. From fashion boutiques to tech stores, we've got you covered. Our team of experts scours the web for the latest and greatest shops, so you don't have to. We provide you with comprehensive reviews, product recommendations, and insider knowledge to help you make informed decisions.</p>
    </Container>
   </div> 
  )
}

export default HomePage