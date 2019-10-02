import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 3rem;
`;

const Title = styled.h3`
  font-size: 2.5rem;
  text-align: center;
  font-weight: 600;
  margin-bottom: 3rem;
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
