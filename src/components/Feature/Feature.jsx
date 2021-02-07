import React from 'react'
import { Container, Description, Icon, Title } from './FeatureStyles'

const Feature = ({ path, title, description }) => {
  return (
    <Container>
      <Icon>
        <img src={`./images/${path}.svg`} alt='Icon' />
      </Icon>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}

export default Feature
