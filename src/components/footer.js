import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  background-color: #3e4246;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Body = styled.p`
  color: #fff;
  text-align: center;
  font-weight: 300;
`;

const MadeBy = styled.a`
  color: #777;
  text-decoration: none;
  font-weight: 300;
  font-size: 1.5rem;
  &:hover {
    color: #fff;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Body>The SCOPE Trial</Body>
      <Body>University of Regina, Department of Psychology</Body>
      <MadeBy href="https://github.com/ptrckqn">Made by Patrick Quan</MadeBy>
    </Container>
  );
};

export default Footer;
