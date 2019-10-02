import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Title = styled.h3`
  font-size: 2.5rem;
  text-align: center;
  font-weight: 600;
  margin-bottom: 3rem;
  color: #131418;
`;

const Details = styled.span`
  line-height: 1.7;
  color: #8f8f8f;
`;

const Block = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Details>{children}</Details>
  </Container>
);

export default Block;
