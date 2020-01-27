import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 55vh;
  transition: all 0.3s;
  overflow: hidden;
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  width: 101%;
  height: 55.2vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.7s;
  opacity: ${props => (props.id === props.index ? "1" : "0")};
  visibility: ${props => (props.id === props.index ? "visible" : "hidden")};
`;

const Details = styled.div`
  position: absolute;
  width: 100%;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.5rem;
`;

const Image = styled(Img)`
  height: 100%;
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

const Hero = ({ title, subtitle, images }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(
        () => setIndex(index => (index + 1) % images.length),
        10000
      );
      return () => clearInterval(interval);
    }
    return;
  }, []);

  return (
    <Container>
      {images &&
        images.map((image, i) => (
          <BackgroundWrapper key={i} id={i} index={index}>
            <Image fluid={image} />
          </BackgroundWrapper>
        ))}
      <Details>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Details>
    </Container>
  );
};

export default Hero;
