import React from "react";
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
}) => (
  <Layout pageTitle={frontmatter.title}>
    <Hero
      title={frontmatter.title}
      subtitle={frontmatter.subtitle}
      image="https://images.unsplash.com/photo-1490100667990-4fced8021649?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2704&q=80"
    />
    <Container>
      <Form />
      <MarkdownData dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  </Layout>
);

export default ContactPage;

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
