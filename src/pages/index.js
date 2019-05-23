import React, { Component } from "react";
import SEO from "components/seo";
import Layout from "components/layout";
import Articles from "components/articles/articles";
import LastestArticle from "components/articles/lastestArticle";

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <LastestArticle />
        <Articles />
      </Layout>
    );
  }
}

export default IndexPage;
