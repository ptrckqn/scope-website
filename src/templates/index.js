import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import Hero from "../components/hero";
import LearnSquares from "../components/learnSquares";
import Quote from "../components/quote";
import Interested from "../components/interested";
import Footer from "../components/footer";

const QuoteSpan = styled.span`
  display: block;
  width: 100%;
  background-color: #3e4246;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.7rem;
  font-weight: 600;
  padding: 2rem 3rem;
`;

const Quotes = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media only screen and (max-width: 30em) {
    grid-template-columns: 1fr;
  }
`;

const IndexPage = ({
  data: {
    markdownRemark: { frontmatter }
  }
}) => {
  const images = frontmatter.backgrounds.map(
    image => image.childImageSharp.fluid
  );

  return (
    <Layout pageTitle="Welcome">
      <Hero
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        images={images}
      />
      <QuoteSpan>{frontmatter.mainQuote}</QuoteSpan>
      {frontmatter.squares &&
        frontmatter.squares.map(({ title, body, image, url }, count) => (
          <LearnSquares
            title={title}
            url={url}
            image={image.childImageSharp.fluid}
            mirrored={count % 2 === 0}
          >
            {body}
          </LearnSquares>
        ))}
      <Quotes>
        {frontmatter.quotes &&
          frontmatter.quotes.map(({ body, sub, author }) => (
            <Quote author={author} title={sub}>
              {body}
            </Quote>
          ))}
      </Quotes>
      <Interested image="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2555&q=80" />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        mainQuote
        quotes {
          author
          sub
          body
        }
        squares {
          body
          title
          url
          image {
            childImageSharp {
              fluid(quality: 90) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
        subtitle
        title
        backgrounds {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`;
