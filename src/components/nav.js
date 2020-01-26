import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Container = styled.header`
  position: fixed;
  top: 0;
  margin: 0 auto;
  z-index: 10;
  max-width: 100rem;
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
`;

const Logo = styled.span`
  font-weight: 300;
`;

const Checkbox = styled.input`
  display: none;
`;

const MenuIcon = styled.label`
  position: relative;
  display: none;
  z-index: 10;
  height: 5rem;
  width: 5rem;
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 3rem;
    height: 2px;
    background-color: #efefef;
    transition: all 0.3s;
    ${Checkbox}:checked ~ & {
      background-color: transparent;
    }
    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 3rem;
      height: 2px;
      background-color: #efefef;
      transition: all 0.3s;
    }
    &::before {
      top: 0.75rem;
      ${Checkbox}:checked ~ & {
        transform: rotate(135deg);
        top: 0;
      }
    }
    &::after {
      top: -0.75rem;
      ${Checkbox}:checked ~ & {
        transform: rotate(-135deg);
        top: 0;
      }
    }
  }
  @media only screen and (max-width: 39em) {
    display: block;
  }
`;

const Links = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, max-content);
  grid-column-gap: 3rem;
  text-transform: uppercase;
  font-weight: 700;
  @media only screen and (max-width: 39em) {
    grid-template-columns: 1fr;
    grid-row-gap: 5rem;
    padding: 3rem;
    justify-items: center;
    z-index: 9;
    position: absolute;
    top: 1.5rem;
    left: 50%;
    transform: translateX(-50%) scale(0.8);
    transform-origin: top right;
    background-color: #3e4246;
    justify-content: center;
    opacity: 0;
    width: 95%;
    border-radius: 3px;
    visibility: hidden;
    transition: all 0.3s;
    ${Checkbox}:checked ~ & {
      opacity: 1;
      transform: translateX(-50%) scale(1);
      visibility: visible;
    }
  }
`;

const LinkContainer = styled.li`
  color: #fff;
  text-decoration: none;
  z-index: 2;
  display: ${props => (props.mobile ? "none" : "list-item")};
  @media only screen and (max-width: 39em) {
    display: list-item;
  }
`;

const DropdownContainer = styled.span`
  cursor: pointer;
  position: relative;
  @media only screen and (max-width: 39em) {
    display: none;
  }
`;

const DropdownContent = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  transform: translateX(-35%);
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
  z-index: 1;
  margin-top: 20px;
  div {
    z-index: 1;
    margin-top: 15px;
    background-color: #3e4246;
    display: flex;
    flex-direction: column;
    width: auto;
    padding: 10px;
    border-radius: 3px;
    a {
      padding: 15px 0;
    }
  }

  ${DropdownContainer}:hover &,  &:hover {
    visibility: visible;
    pointer-events: auto;
    opacity: 1;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  white-space: nowrap;
`;

const Nav = () => {
  return (
    <Container>
      <Logo>(LOGO)</Logo>
      <Checkbox type="checkbox" id="menu" />
      <MenuIcon htmlFor="menu">
        <span />
      </MenuIcon>
      <Links>
        <LinkContainer>
          <NavLink to="/">Home</NavLink>
        </LinkContainer>
        <DropdownContainer>
          <NavLink to="/about">About</NavLink>
          <DropdownContent>
            <div>
              <NavLink to="/self-compassion">Self-Compassion</NavLink>
              <NavLink to="/depression">Depression</NavLink>
            </div>
          </DropdownContent>
        </DropdownContainer>
        <LinkContainer mobile>
          <NavLink to="/about">About</NavLink>
        </LinkContainer>
        <LinkContainer mobile>
          <NavLink to="/self-compassion">Self-Compassion</NavLink>
        </LinkContainer>
        <LinkContainer mobile>
          <NavLink to="/depression">Depression</NavLink>
        </LinkContainer>
        <LinkContainer>
          <NavLink to="/resources">Resources</NavLink>
        </LinkContainer>
        <LinkContainer>
          <NavLink to="/contact">Contact</NavLink>
        </LinkContainer>
      </Links>
    </Container>
  );
};

export default Nav;
