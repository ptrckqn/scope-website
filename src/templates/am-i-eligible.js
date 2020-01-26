import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import Hero from "../components/hero";
import Details from "../components/details";

const Container = styled.section`
  padding: 5rem;
  @media only screen and (max-width: 39em) {
    padding: 5rem 3rem;
  }
  @media only screen and (max-width: 30em) {
    padding: 5rem 1rem;
  }
`;

const AmIEligiblePage = ({
  data: {
    markdownRemark: { frontmatter, html }
  }
}) => (
  <Layout pageTitle={frontmatter.title}>
    <Hero
      title={frontmatter.title}
      subtitle={frontmatter.subtitle}
      image="https://images.unsplash.com/photo-1490598000245-075175152d25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
    />
    <Container>
      <Details data={html} />
    </Container>
  </Layout>
);

export default AmIEligiblePage;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        subtitle
      }
      html
    }
  }
`;
