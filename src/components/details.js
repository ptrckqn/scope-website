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

const MarkdownData = styled.div`
  color: #202020;
  h1 {
    font-weight: 700;
    font-size: 2.5rem;
    color: #131418;
  }
  h2 {
    font-weight: 400;
    font-size: 2.5rem;
    color: #131418;
  }
  p {
    padding: 1.5rem 0;
  }
  a {
    color: inherit;
  }
  li {
    margin-left: 20px;
  }
`;

const Details = ({ data }) => (
  <Container>
    <MarkdownData dangerouslySetInnerHTML={{ __html: data }} />
  </Container>
);

export default Details;
