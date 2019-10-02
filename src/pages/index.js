import React from "react";
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

const IndexPage = () => (
  <Layout pageTitle="Welcome">
    <Hero
      title="Scope"
      subtitle="The Self-Compassion Online - Preventing Depression Trial"
      image="https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1911&q=80"
    />
    <QuoteSpan>
      "Quote about the self-compassion intervention" - Dr. Shadi Beshai
    </QuoteSpan>
    <LearnSquares
      title="Project"
      url="/"
      image="https://images.unsplash.com/photo-1553548146-50f0bdf09f0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </LearnSquares>
    <LearnSquares
      title="Am I Eligible?"
      url="/"
      image="https://images.unsplash.com/photo-1553628864-9149ead2585b?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
      mirrored
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </LearnSquares>
    <Quotes>
      <Quote author="Dr. Lorem Ipsum" title="Lorem ipsum dolor sit amet">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Quote>
      <Quote author="Dr. Lorem Ipsum" title="Lorem ipsum dolor sit amet">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </Quote>
      <Quote author="Dr. Lorem Ipsum" title="Lorem ipsum dolor sit amet">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </Quote>
    </Quotes>
    <Interested image="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2555&q=80" />
    <Footer />
  </Layout>
);

export default IndexPage;
