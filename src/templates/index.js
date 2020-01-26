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
  return (
    <Layout pageTitle="Welcome">
      <Hero
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        image="https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1911&q=80"
        altImages={[
          "https://images.unsplash.com/photo-1435820876491-c2cb37e8e7ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2845&q=80",
          "https://images.unsplash.com/photo-1470399542183-e6245d78c479?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80",
          "https://images.unsplash.com/photo-1507629221898-576a56b530bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
        ]}
      />
      <QuoteSpan>{frontmatter.mainQuote}</QuoteSpan>
      <LearnSquares
        title={frontmatter.squares[0].title}
        url="/project"
        image="https://images.unsplash.com/photo-1553548146-50f0bdf09f0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80"
      >
        {frontmatter.squares[0].body}
      </LearnSquares>
      <LearnSquares
        title={frontmatter.squares[1].title}
        url="/am-i-eligible"
        image="https://images.unsplash.com/photo-1553628864-9149ead2585b?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
        mirrored
      >
        {frontmatter.squares[1].body}
      </LearnSquares>
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
        }
        subtitle
        title
      }
    }
  }
`;
