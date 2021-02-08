import React from 'react'
import {
  Background,
  FooterContainer,
  Container,
  LinksContainer,
  LinksList,
  Logo,
} from './FooterStyles'

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Logo>
          <h2>Shortly</h2>
        </Logo>
        <LinksContainer>
          <LinksList>
            <li>Features</li>
          </LinksList>
        </LinksContainer>
      </Container>
      <Background />
    </FooterContainer>
  )
}

export default Footer
