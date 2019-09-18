import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.header`
  background-color: #7d8c8f;
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  @media only screen and (max-width: 56.25em) {
    padding: 0 3rem;
  }
`

const Logo = styled.span`
  font-weight: 300;
`

const Links = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, max-content);
  grid-column-gap: 3rem;
  text-transform: uppercase;
  font-weight: 700;
`

const LinkContainer = styled.li`
  color: #fff;
  text-decoration: none;
`

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`

const Header = () => {
  return (
    <Container>
      <Logo>(LOGO)</Logo>
      <Links>
        <LinkContainer>
          <NavLink to="/">Home</NavLink>
        </LinkContainer>
        <LinkContainer>
          <NavLink to="/about">About</NavLink>
        </LinkContainer>
        <LinkContainer>
          <NavLink to="/resources">Resources</NavLink>
        </LinkContainer>
        <LinkContainer>
          <NavLink to="/contact">Contact</NavLink>
        </LinkContainer>
      </Links>
    </Container>
  )
}

export default Header
