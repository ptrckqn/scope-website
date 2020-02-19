import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import remark from "remark";
import remarkHtml from "remark-html";

const Container = styled.section`
  background: #fff;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: ${props => (props.mirrored ? `row-reverse` : `row`)};
  align-items: center;
  @media only screen and (max-width: 39em) {
    position: relative;
    flex-direction: column;
  }
`;

const Image = styled(Img)`
  width: 100%;
  flex: 0 0 50%;
  @media only screen and (max-width: 39em) {
    flex: auto;
    height: 70rem;
  }
`;

const Details = styled.div`
  padding: 3rem 6rem;
  a {
    color: inherit;
  }
  li {
    margin-left: 20px;
  }
  @media only screen and (max-width: 39em) {
    position: absolute;
    background-color: #fff;
    width: 95%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
`;

const Title = styled.h4`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 5rem;
  color: #131418;
`;

const Body = styled.div`
  font-size: 1.5rem;
  line-height: 3rem;
  margin-bottom: 2rem;
  color: #202020;
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
  transition: all 300ms;
  &:hover {
    color: #fff;
    border: 2px solid #202020;
    background-color: #202020;
  }
`;

const LearnSquares = ({ title, url, image, mirrored, children }) => {
  const createHtml = str => {
    return {
      __html: remark()
        .use(remarkHtml)
        .processSync(str)
        .toString()
    };
  };
  return (
    <Container mirrored={mirrored}>
      <Details>
        <Title>{title}</Title>
        <Body dangerouslySetInnerHTML={createHtml(children)} />
        <LearnBtn to={url}>Learn More</LearnBtn>
      </Details>
      <Image fluid={image} />
    </Container>
  );
};

export default LearnSquares;
