import React from 'react'
import { HeroContainer, HeroCTA, HeroImage } from './HeroStyles'

const Hero = () => {
  return (
    <HeroContainer>
      <HeroCTA>
        <h1 className='title'>More than just shorter links</h1>
        <p className='description'>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className='cta-button'>Get Started</button>
      </HeroCTA>
      <HeroImage>
        <img src='./images/illustration-working.svg' alt='Hero Image' />
      </HeroImage>
    </HeroContainer>
  )
}

export default Hero
