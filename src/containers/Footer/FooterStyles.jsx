import styled from 'styled-components/macro'
import { neutral } from '../../styles/styleVariables'

export const FooterContainer = styled.footer`
  width: 100%;
  background: ${neutral.veryDarkViolet};
  bottom: 0;
`

export const Container = styled.div`
  margin: 0 auto;
  padding: 3rem 0;
  width: 1100px;
  max-width: 90%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
`

export const Logo = styled.div`
  color: white;
  font-size: 1.3rem;
`

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const LinksList = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
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
