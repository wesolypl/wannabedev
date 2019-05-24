import React from "react";
import SEO from "components/seo";
import Layout from "components/layout";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import moment from "moment";
const StyledLink = styled(Link)`
  display: block;
  font-size: ${({ theme }) => theme.font.size.m};
  text-decoration: none;
  color: ${({ theme }) => theme.grey};
  font-family: ${({ theme }) => theme.font.family.lato};
  padding: 10px;
`;
const StyledDate = styled.span`
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: 700;
`;
const StyledAllArticles = styled.div`
  padding: 0 10px 10px 10px;
  h2 {
    font-size: ${({ theme }) => theme.font.size.l};
    color: ${({ theme }) => theme.primary};
    font-family: ${({ theme }) => theme.font.family.lato};
    text-align: center;
  }
`;
const AllArticlesPage = ({
  data: {
    allSitePage: { edges }
  }
}) => {
  return (
    <Layout>
      <SEO title="All Articles" keywords={[`gatsby`, `application`, `react`]} />
      <StyledAllArticles>
        <h2>All Articles List</h2>
        {edges.map(article => (
          <StyledLink key={article.node.path} to={article.node.path}>
            {article.node.context.data.title}{" "}
            <StyledDate>
              {moment(article.node.context.data.createdAt).format("DD/MM/YYYY")}
            </StyledDate>
          </StyledLink>
        ))}
      </StyledAllArticles>
    </Layout>
  );
};

export const allArticlesQuery = graphql`
  {
    allSitePage(
      filter: {
        component: {
          eq: "D:/ShareOnWindows/Blog/kod/src/templates/articleTemplate.js"
        }
      }
      sort: { fields: context___data___createdAt, order: DESC }
    ) {
      edges {
        node {
          path
          context {
            data {
              createdAt
              title
              content
              slug
            }
          }
        }
      }
    }
  }
`;
export default AllArticlesPage;
