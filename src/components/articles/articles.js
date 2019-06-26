import { StaticQuery, graphql } from "gatsby";
import React from "react";
import SingleArticle from "./singleArticle";
import styled from "styled-components";
import { Link } from "gatsby";
import { appearBottom } from "../animations/appear";

const StyledArticlesList = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  padding: 0 10px;
  animation: ${appearBottom} 2s both;
  @media only screen and (min-width: ${({ theme }) => theme.media.s}) {
    & {
      width: 540px;
      align-self: center;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.m}) {
    & {
      width: 720px;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.l}) {
    & {
      width: 960px;
    }
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  @media only screen and (min-width: ${({ theme }) => theme.media.m}) {
    width: 49%;
    height: 320px;
    border-bottom: 1px solid ${({ theme }) => theme.greyFooter};
    margin-bottom: 10px;
    &:nth-child(2n) {
      margin-top: 10px;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.l}) {
    height: 420px;
    border-bottom: 2px solid ${({ theme }) => theme.greyFooter};
  }
`;

const Articles = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          wbd {
            articles(skip: 1, first: 8, orderBy: createdAt_DESC) {
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
            <StyledLink
              to={`/${article.slug}/`}
              key={article.id}
              aria-label={article.title}
            >
              <SingleArticle {...article} />
            </StyledLink>
          ))}
        </StyledArticlesList>
      )}
    />
  );
};

export default Articles;
