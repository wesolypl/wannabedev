import React, { Component } from "react";
import SEO from "components/seo";
import Layout from "components/layout";
import Articles from "components/articles/articles";
import LatestArticle from "components/articles/latestArticle";
import Button from "components/articles/moreArticlesButton";
class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <LatestArticle />
        <Articles />
        <Button />
      </Layout>
    );
  }
}

export default IndexPage;
