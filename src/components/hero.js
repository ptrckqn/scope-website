import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 55vh;
  transition: all 0.3s;
  background: url(${props => props.image}) center center/cover no-repeat;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  width: 101%;
  height: 55.2vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s;
  opacity: ${props => (props.id === props.index ? "1" : "0")};
  visibility: ${props => (props.id === props.index ? "visible" : "hidden")};
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
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (altImages) {
      const interval = setInterval(
        () => setIndex(index => (index + 1) % altImages.length),
        10000
      );
      return () => clearInterval(interval);
    }
    return;
  }, []);

  return (
    <Container image={altImages ? null : image}>
      {altImages
        ? altImages.map((image, i) => (
            <BackgroundImage key={i} image={image} id={i} index={index} />
          ))
        : null}
      <Details>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Details>
    </Container>
  );
};

export default Hero;
