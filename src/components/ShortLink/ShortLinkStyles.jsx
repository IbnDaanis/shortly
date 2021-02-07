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
`

export const OriginalLink = styled.a`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${neutral.veryDarkViolet};
`

export const ShortenedLink = styled.a`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${primary.cyan};
`
export const CopyButton = styled.button`
  background: ${primary.cyan};
  color: white;
  display: block;
  height: 40px;
  width: 100px;
  font-size: 16px;
  font-weight: 700;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
`
