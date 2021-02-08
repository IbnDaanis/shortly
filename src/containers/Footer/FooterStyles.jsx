import styled from 'styled-components/macro'
import { neutral } from '../../styles/styleVariables'

export const FooterContainer = styled.footer`
  width: 100%;
  background: ${neutral.veryDarkViolet};
  bottom: 0;
`

export const Container = styled.div`
  margin: 180px auto 0;
  width: 1100px;
  max-width: 90%;
`

export const Background = styled.div`
  position: fixed;
  z-index: -1;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  background: ${neutral.veryDarkViolet};
`
