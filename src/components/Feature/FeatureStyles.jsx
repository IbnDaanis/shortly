import styled from 'styled-components/macro'
import { neutral, primary } from '../../styles/styleVariables'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: white;
  border-radius: 5px;
  width: 350px;
  position: relative;
`

export const Icon = styled.div`
  position: absolute;
  top: 0%;
  left: 1.5rem;
  width: 70px;
  height: 70px;
  background: ${primary.darkViolet};
  border-radius: 50%;
  transform: translateY(-75%);
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 50%;
  }
`

export const Title = styled.h3`
  color: ${neutral.veryDarkViolet};
  margin: 2rem 0 0.8rem;
  font-size: 1.3rem;
`
export const Description = styled.p`
  color: ${neutral.grayishViolet};
  font-size: 14px;
  font-weight: 500;
  margin: 0 0 1rem;
`
