import React from 'react'
import {
  HeaderContainer,
  Container,
  LoginSignUp,
  Logo,
  NavLinks,
} from './HeaderStyles'

const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <Container>
          <Logo src='./images/logo.svg' />
          <NavLinks>
            <li>
              <a href='#'>Features</a>
            </li>
            <li>
              <a href='#'>Pricing</a>
            </li>
            <li>
              <a href='#'>Resources</a>
            </li>
          </NavLinks>
          <LoginSignUp>
            <a href='#'>Login</a>
            <button>Sign Up</button>
          </LoginSignUp>
        </Container>
      </nav>
    </HeaderContainer>
  )
}

export default Header
