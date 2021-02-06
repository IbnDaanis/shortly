import { useState } from 'react'
import {
  HeaderContainer,
  Container,
  LoginSignUp,
  Logo,
  NavLinks,
  MenuIcon,
  Menu,
} from './HeaderStyles'
import { HiMenu } from 'react-icons/hi'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <HeaderContainer>
      <nav>
        <Container>
          <Logo src='./images/logo.svg' />
          <Menu isMenuOpen={isMenuOpen}>
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
          </Menu>
          <MenuIcon onClick={() => setIsMenuOpen(isMenuOpen => !isMenuOpen)}>
            <HiMenu />
          </MenuIcon>
        </Container>
      </nav>
    </HeaderContainer>
  )
}

export default Header
