import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10rem 1.5rem;
  align-items: center;
  @media only screen and (max-width: 39em) {
    padding: 3rem;
  }
`;

const Icon = styled.span`
  position: relative;
  border: 2px solid #afafaf;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  margin-bottom: 3rem;
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 7rem;
  }
`;

const Body = styled.p`
  text-align: center;
  margin-bottom: 3rem;
  color: #131418;
`;

const Author = styled.span`
  text-align: center;
  font-weight: 700;
  color: #8f8f8f;
`;

const Title = styled.span`
  text-align: center;
  font-style: oblique;
  color: #8f8f8f;
`;

const Quote = ({ author, title, children }) => {
  return (
    <Container>
      <Icon>
        <svg
          id="Capa_1"
          data-name="Capa 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 463 463"
        >
          <defs></defs>
          <path
            d="M355.41 214.75v-.07a48.42 48.42 0 1 0-32.65 45.66c-10.87 62.33-59.47 102.52-14.41 69.44 49.96-36.68 47.12-113.62 47.06-115.03zM200.88 263a48.2 48.2 0 0 0 15.64-2.64c-10.87 62.32-59.47 102.52-14.42 69.44 50-36.68 47.13-113.62 47.07-115v-.07A48.29 48.29 0 1 0 200.88 263z"
            transform="translate(-22.52 -22.52)"
          />
        </svg>
      </Icon>
      <Body>{children}</Body>
      <Author>{author}</Author>
      <Title>{title}</Title>
    </Container>
  );
};

export default Quote;
