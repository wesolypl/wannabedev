import React from "react";
import Layout from "components/layout";
import SEO from "components/seo";
import About from "components/about/about";

const AboutPage = props => (
  <Layout {...props}>
    <SEO title="O Blogu" keywords={[`gatsby`, `application`, `react`]} />
    <About />
  </Layout>
);

export default AboutPage;
