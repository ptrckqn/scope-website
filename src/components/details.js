import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 1.5rem 10rem;
  @media only screen and (max-width: 39em) {
    padding: 1.5rem 5rem;
  }
  @media only screen and (max-width: 30em) {
    padding: 1.5rem 3rem;
  }
`;

const Title = styled.h4`
  font-weight: 700;
  font-size: 2.5rem;
  color: #131418;
`;

const Body = styled.p`
  color: #8f8f8f;
`;

const Details = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Body>{children}</Body>
  </Container>
);

export default Details;
