import React from "react";
import styled from "styled-components";

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 55vh;
  transition: all 0.3s;
  background: url(${props => props.image}) center center/cover no-repeat;
`;

const Details = styled.div`
  position: absolute;
  width: 100%;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.5rem;
`;

const Title = styled.h1`
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  font-size: 8rem;
  letter-spacing: 1.7rem;
  font-weight: 700;
  @media only screen and (max-width: 39em) {
    font-size: 5rem;
  }
`;

const Subtitle = styled.h2`
  text-align: center;
  color: #fff;
  font-weight: 600;
  @media only screen and (max-width: 39em) {
    font-size: 3rem;
  }
`;

const Hero = ({ title, subtitle, image, altImages }) => {
  return (
    <Container image={image}>
      <Details>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Details>
    </Container>
  );
};

export default Hero;
