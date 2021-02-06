import styled from 'styled-components/macro'
import { neutral, primary } from '../../styles/styleVariables'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`

export const Container = styled.div`
  margin: 0 auto;
  width: 1100px;
  height: 130px;
  display: flex;
  align-items: center;
  font-size: 15px;
`

export const Logo = styled.img`
  margin-right: 2.5rem;
  color: ${primary.darkViolet};
`

export const NavLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  width: 260px;
  li {
    font-weight: 700;
    color: ${neutral.grayishViolet};
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: ${neutral.veryDarkBlue};
    }
  }
`
export const LoginSignUp = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  a {
    font-weight: 700;
    color: ${neutral.grayishViolet};
    margin-right: 2rem;
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${neutral.veryDarkBlue};
    }
  }
  button {
    background: ${primary.cyan};
    color: white;
    display: block;
    height: 40px;
    width: 100px;
    font-size: 15px;
    font-weight: 700;
    border: 0;
    border-radius: 1000px;
    cursor: pointer;
  }
`
