import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";

import Header from "./header";

/*
  Background: #7d8c8f;
  Background Secondary: #3e4246;
  Text: #131418;
  Alt Text: #8f8f8f;

*/
const GlobalStyle = createGlobalStyle`

*, *::after, *::before{
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html{
  font-size: 62.5%;
  @media (max-width: 39em){
      font-size: 75%;
  }
  @media (max-width: 56.25em){
      font-size: 56.25%;
  }
  @media (max-width: 75em){
      font-size: 50%;
  }
}
body{
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  line-height: 1.7;
  background-color: #7d8c8f;
  font-size: 1.6rem;
  box-sizing: border-box;
  @media (max-width: 56.25em){
      padding: 0;
  }
}
`;

const Container = styled.div`
  max-width: 100rem;
  margin: 8rem auto 0;
  background-color: #fff;
`;

const Layout = ({ pageTitle, children }) => {
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SCOPE - {pageTitle}</title>
      </Helmet>
      <GlobalStyle />
      <Header />
      {children}
    </Container>
  );
};

export default Layout;
