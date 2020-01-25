import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Title = styled.h4`
  font-weight: 700;
  font-size: 2.5rem;
  color: #131418;
`;

const Details = styled.span`
  color: #8f8f8f;
`;

const Block = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Details>{children}</Details>
  </Container>
);

export default Block;
