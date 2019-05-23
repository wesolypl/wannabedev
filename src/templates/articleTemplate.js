import React from "react";
import Layout from "components/layout";
import { Link } from "gatsby";

const ArticleTemplate = ({ pageContext: { data } }) => {
  return (
    <Layout>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
      <img src={data.thumbnail} alt={data.slug} />
    </Layout>
  );
};

export default ArticleTemplate;
