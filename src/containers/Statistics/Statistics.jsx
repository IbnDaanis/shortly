import React from 'react'
import { Feature } from '../../components'
import {
  Container,
  Description,
  FeaturesContainer,
  HeadingContainer,
  StatisticsContainer,
  Title,
} from './StatisticsStyles'

const Statistics = () => {
  const data = [{path: 'icon-brand-recognition', title='Brand Recognition'}]
  return (
    <StatisticsContainer>
      <Container>
        <HeadingContainer>
          <Title>Advanced Statistics</Title>
          <Description>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </Description>
        </HeadingContainer>
        <FeaturesContainer>
          <Feature path={} title={'Brand Recognition'} />
        </FeaturesContainer>
      </Container>
    </StatisticsContainer>
  )
}

export default Statistics
