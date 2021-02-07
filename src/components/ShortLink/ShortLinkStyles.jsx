import styled from 'styled-components/macro'
import { neutral, primary } from '../../styles/styleVariables'

export const ShortLinkContainer = styled.div`
  background: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-radius: 5px;
  margin-bottom: 1rem;
`

export const OriginalLink = styled.a`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${neutral.veryDarkViolet};
`

export const ShortenedLinkContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ShortenedLink = styled.a`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${primary.cyan};
  margin-right: 1.5rem;
`
export const CopyButton = styled.button`
  background: ${props =>
    props.copied ? neutral.veryDarkViolet : primary.cyan};
  color: white;
  display: block;
  height: 40px;
  width: 100px;
  font-size: 16px;
  font-weight: 700;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
`
