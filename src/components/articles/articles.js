import { StaticQuery, graphql } from "gatsby";
import React from "react";
import SingleArticle from "components/articles/singleArticle";
import styled from "styled-components";
import { Link } from "gatsby";
const StyledArticlesList = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  align-items: center;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Articles = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          wbd {
            articles(skip: 1, orderBy: createdAt_DESC) {
              id
              createdAt
              title
              shortcut
              thumbnail
              slug
            }
          }
        }
      `}
      render={({ wbd: { articles } }) => (
        <StyledArticlesList>
          {articles.map(article => (
            <StyledLink to={`/${article.slug}`} key={article.id}>
              <SingleArticle {...article} />
            </StyledLink>
          ))}
        </StyledArticlesList>
      )}
    />
  );
};

export default Articles;
