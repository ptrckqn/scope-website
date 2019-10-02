import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 3rem;
`;

const Title = styled.h4`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 5rem;
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
