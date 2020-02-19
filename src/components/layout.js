import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";

import Nav from "./nav";
import Footer from "./footer";

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
  max-width: 90rem;
  margin: 8rem auto 0;
  background-color: transparent;
`;

const Layout = ({ pageTitle, children }) => {
  const title = pageTitle.includes("#") ? pageTitle.substring(2) : pageTitle;
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SCOPE - {title}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <GlobalStyle />
      <Nav />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
