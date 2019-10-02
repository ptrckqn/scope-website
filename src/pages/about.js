import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Details from "../components/details";

const Container = styled.section`
  padding: 5rem;
`;

const AboutPage = () => (
  <Layout pageTitle="About">
    <Hero
      title="About Us"
      subtitle="Who We Are"
      image="https://images.unsplash.com/photo-1490598000245-075175152d25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
    />
    <Container>
      <Details title="Choose Your Own Adventure">
        Everyone’s life is unique and their relationship with mindfulness is no
        different. We don’t believe in a one-size-fits-all approach and so that
        is why buddhify will never tell you which meditation to do and when to
        do it. Instead we think it’s important that you get to choose how you
        use the app since no-one knows what you need better than you. You may
        want to use it every day or you may just want to use it a couple of
        times a month in those moments of need. If you want to deepen then we
        will create pathways for that. If you want to just be a casual
        meditator, then that’s fine too. Whatever works best for you, we will be
        there for you.
      </Details>
      <Details title="Design For Independence, Not Dependence">
        We believe that the ultimate purpose of a meditation app is to help
        someone no longer need a meditation app. Buddhify is designed with the
        aim that it becomes redundant. Our ideal outcome is that someone learns
        enough techniques and understands the practice well enough so that they
        both become independent – and don’t need the app to meditate. They may
        well come back to it every now and then for more inspiration and more
        support but they do so as a creative, empowered meditator, not a
        dependent ‘consumer of meditation content’.
      </Details>
    </Container>

    <Footer />
  </Layout>
);

export default AboutPage;