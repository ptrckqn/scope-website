import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import remark from "remark";
import remarkHtml from "remark-html";

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 55vh;
  transition: all 0.3s;
  overflow: hidden;
  min-height: 250px;
  background-color: transparent;
`;

const BackgroundWrapper = styled.div`
  position: fixed;
  width: 100%;
  max-width: 90rem;
  height: 55.2vh;
  min-height: 250px;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.7s;
  z-index: -1;
  opacity: ${props => (props.id === props.index ? "1" : "0")};
  visibility: ${props => (props.id === props.index ? "visible" : "hidden")};
`;

const Details = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.5rem;
  @media only screen and (max-width: 39em) {
    padding: 0.5rem;
  }
`;

const Image = styled(Img)`
  height: 100%;
`;

const Title = styled.div`
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  font-size: 3.5rem;
  letter-spacing: 3.7rem;
  padding-left: 3.7rem;
  font-weight: 700;
  line-height: 1.2;
  @media only screen and (max-width: 39em) {
    font-size: 2.2rem;
    letter-spacing: 1.6rem;
    padding-left: 1.6rem;
  }
`;

const Subtitle = styled.h2`
  text-align: center;
  color: #fff;
  font-weight: 300;
  font-size: 2rem;
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

  const createHtml = str => {
    return {
      __html: remark()
        .use(remarkHtml)
        .processSync(str)
        .toString()
    };
  };

  return (
    <Container>
      {images &&
        images.map((image, i) => (
          <BackgroundWrapper key={i} id={i} index={index}>
            <Image fluid={image} />
          </BackgroundWrapper>
        ))}
      <Details>
        <Title dangerouslySetInnerHTML={createHtml(title)} />
        <Subtitle>{subtitle}</Subtitle>
      </Details>
    </Container>
  );
};

export default Hero;
