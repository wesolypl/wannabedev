import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Contact from "../components/contact/contact";

const ContactPage = props => (
  <Layout {...props}>
    <SEO title="Kontakt" keywords={[`gatsby`, `application`, `react`]} />
    <Contact />
  </Layout>
);

export default ContactPage;
