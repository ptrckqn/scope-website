import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import Hero from "../components/hero";
import Details from "../components/details";
import Interested from "../components/interested";

const Container = styled.section`
  background: #fff;
  padding: 5rem;
  @media only screen and (max-width: 39em) {
    padding: 5rem 3rem;
  }
  @media only screen and (max-width: 30em) {
    padding: 5rem 1rem;
  }
`;

const ProjectPage = ({
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
        <Details data={html} />
      </Container>
      <Interested image="/images/photo-10.jpg" />
    </Layout>
  );
};
export default ProjectPage;

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
