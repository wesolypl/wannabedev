import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { Link } from "gatsby";
import Image from "components/images/latestArticleImage";
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
`;
const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.size.l};
  margin-top: 10px;
  text-shadow: 0px 0px 5px #000000;
  z-index: 1;
`;
const StyledLatest = styled.div`
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: 700;
  text-shadow: 0px 0px 5px #000000;
  display: flex;
  align-items: center;
  z-index: 1;
`;
const StyledTriangle = styled.div`
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid ${({ theme }) => theme.red};
  margin-right: 5px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
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
        <div>
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
        </div>
      )}
    />
  );
};

export default LatestArticle;
