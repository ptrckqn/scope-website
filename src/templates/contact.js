import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import Hero from "../components/hero";
import Form from "../components/form";
import Footer from "../components/footer";

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 3rem;
  padding: 3rem;
  justify-items: center;
  @media only screen and (max-width: 39em) {
    grid-template-columns: 1fr;
    grid-row-gap: 10rem;
  }
`;

const MarkdownData = styled.div`
  color: #8f8f8f;
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
  a {
    color: inherit;
  }
`;

const ContactPage = ({
  data: {
    markdownRemark: { frontmatter, html }
  }
}) => {
  const images = frontmatter.backgrounds.map(
    ({ src }) => src.childImageSharp.fluid
  );
  return (
    <Layout pageTitle={frontmatter.title}>
      <Hero
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        images={images}
      />
      <Container>
        <Form />
        <MarkdownData dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Layout>
  );
};

export default ContactPage;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        subtitle
        backgrounds {
          src {
            childImageSharp {
              fluid(quality: 90) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
      html
    }
  }
`;
