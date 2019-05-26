import React, { Component } from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Articles from "../components/articles/articles";
import LatestArticle from "../components/articles/latestArticle";
import Button from "../components/articles/moreArticlesButton";
class IndexPage extends Component {
  render() {
    const { data } = this.props;
    const articles = data.wbd.articles;
    return (
      <Layout>
        <SEO title="Główna" keywords={[`gatsby`, `application`, `react`]} />
        <LatestArticle />
        <Articles />
        {articles.length > 8 ? (
          <Button link="/blog/2" text="Więcej artukułów" />
        ) : (
          ""
        )}
      </Layout>
    );
  }
}
export const query = graphql`
  query {
    wbd {
      articles {
        id
        createdAt
        title
        shortcut
        thumbnail
        slug
      }
    }
  }
`;
export default IndexPage;
