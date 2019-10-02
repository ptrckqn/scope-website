import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import Hero from "../components/hero";
import Form from "../components/form";
import Block from "../components/block";
import Footer from "../components/footer";

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 3rem;
  justify-items: center;
`;

const ContactPage = () => (
  <Layout pageTitle="Contact Us">
    <Hero
      title="Contact Us"
      subtitle="Let's Get In Touch"
      image="https://images.unsplash.com/photo-1490100667990-4fced8021649?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2704&q=80"
    />
    <Container>
      <Form />
      <Block title="Contact Information">
        The SCOPE Trial, University of Regina <br />
        Department of Psychology, 3737 Wascana Parkway <br />
        Regina, Saskatchewan, S4S 0A2 <br />
        Phone: 306-585-4992 <br />
        Email: femm.study@uregina.ca
      </Block>
    </Container>
    <Footer />
  </Layout>
);

export default ContactPage;
