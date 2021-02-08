import React from 'react'
import {
  Background,
  FooterContainer,
  Container,
  LinksContainer,
  LinksList,
  Logo,
  ListTitle,
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
            <ListTitle>Features</ListTitle>
            <li>
              <a href='#'>Link Shortening</a>
            </li>
            <li>
              <a href='#'>Branded Links</a>
            </li>
            <li>
              <a href='#'>Analytics</a>
            </li>
          </LinksList>
          <LinksList>
            <ListTitle>Resources</ListTitle>
            <li>
              <a href='#'>Blog</a>
            </li>
            <li>
              <a href='#'>Developers</a>
            </li>
            <li>
              <a href='#'>Support</a>
            </li>
          </LinksList>
          <LinksList>
            <ListTitle>Company</ListTitle>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Our Team</a>
            </li>
            <li>
              <a href='#'>Careers</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </LinksList>
        </LinksContainer>
      </Container>
      <Background />
    </FooterContainer>
  )
}

export default Footer
