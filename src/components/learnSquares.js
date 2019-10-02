import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: ${props => (props.mirrored ? `row-reverse` : `row`)};
  @media only screen and (max-width: 39em) {
    position: relative;
    flex-direction: column;
  }
`;

const Image = styled.div`
  background: url(${props => props.image}) center center/cover no-repeat;
  width: 100%;
  flex: 0 0 50%;
  @media only screen and (max-width: 39em) {
    flex: auto;
    height: 70rem;
  }
`;

const Details = styled.div`
  padding: 6rem;
  @media only screen and (max-width: 39em) {
    position: absolute;
    background-color: #fff;
    width: 85%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Title = styled.h4`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 5rem;
  color: #131418;
`;

const Body = styled.p`
  font-size: 1.5rem;
  line-height: 3rem;
  margin-bottom: 2rem;
  color: #8f8f8f;
`;

const LearnBtn = styled(Link)`
  color: #000;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 600;
  border: 2px solid #000;
  border-radius: 3px;
  padding: 1.5rem;
  float: right;
`;

const LearnSquares = ({ title, url, image, mirrored, children }) => {
  return (
    <Container mirrored={mirrored}>
      <Image image={image} />
      <Details>
        <Title>{title}</Title>
        <Body>{children}</Body>
        <LearnBtn to={url}>Learn More</LearnBtn>
      </Details>
    </Container>
  );
};

export default LearnSquares;
