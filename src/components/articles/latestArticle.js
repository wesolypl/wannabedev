import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { Link } from "gatsby";
import Image from "../images/latestArticleImage";
import { appearTop } from "../animations/appear";
const StyledLatestArticle = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.font.family.raleway};
  font-weight: 600;
  padding: 10px;
  animation: ${appearTop} 1s both;
  @media only screen and (min-width: ${({ theme }) => theme.media.m}) {
    & {
      height: 250px;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.l}) {
    & {
      width: 100%;
      height: 400px;
    }
  }
`;
const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.size.l};
  margin-top: 10px;
  text-shadow: 0px 0px 5px #000000;
  z-index: 1;
  @media only screen and (min-width: ${({ theme }) => theme.media.s}) {
    & {
      width: 540px;
      align-self: center;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.m}) {
    & {
      width: 720px;
      font-size: ${({ theme }) => theme.font.size.xl};
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.l}) {
    & {
      transform: translateX(150px);
      align-self: flex-start;
    }
  }
`;
const StyledLatest = styled.div`
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: 700;
  text-shadow: 0px 0px 5px #000000;
  display: flex;
  align-items: center;
  z-index: 1;
  @media only screen and (min-width: ${({ theme }) => theme.media.s}) {
    & {
      width: 540px;
      align-self: center;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.m}) {
    & {
      width: 720px;
      font-size: ${({ theme }) => theme.font.size.m};
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.l}) {
    & {
      transform: translateX(150px);
      align-self: flex-start;
    }
  }
`;
const StyledTriangle = styled.div`
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid ${({ theme }) => theme.red};
  margin-right: 5px;
  @media only screen and (min-width: ${({ theme }) => theme.media.m}) {
    & {
      border-top: 12px solid transparent;
      border-bottom: 12px solid transparent;
      border-left: 12px solid ${({ theme }) => theme.red};
      margin-right: 10px;
    }
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  @media only screen and (min-width: ${({ theme }) => theme.media.l}) {
    & {
      /* width: calc(100% - 150px); */
      flex-basis: calc(100% - 150px);
      height: 400px;
    }
  }
`;
const LatestArticle = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          wbd {
            articles(first: 1, orderBy: createdAt_DESC) {
              id
              createdAt
              title
              thumbnail
              slug
            }
          }
        }
      `}
      render={({ wbd: { articles } }) => (
        <>
          {articles.map(article => (
            <StyledLink
              to={`/${article.slug}/`}
              key={article.id}
              aria-label={article.title}
            >
              <StyledLatestArticle>
                <Image id={article.id} />
                <StyledLatest>
                  <StyledTriangle />
                  Ostatni artykuł
                </StyledLatest>
                <StyledTitle>{article.title}</StyledTitle>
              </StyledLatestArticle>
            </StyledLink>
          ))}
        </>
      )}
    />
  );
};

export default LatestArticle;
