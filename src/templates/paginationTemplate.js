import React from "react";
import { graphql, Link } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";
import SingleArticle from "../components/articles/singleArticle";
import styled from "styled-components";
import Button from "../components/articles/moreArticlesButton";
import { appearBottom } from "../components/animations/appear";

const StyledArticlesList = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  padding: 20px 10px;
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
const StyledPaginatnion = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: space-around;
`;
export default class PaginationList extends React.Component {
  render() {
    const { data } = this.props;
    const articles = data.wbd.articles;
    const { currentPage, numPages } = this.props.pageContext;
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString();
    const nextPage = (currentPage + 1).toString();
    return (
      <Layout>
        <SEO
          title={`Główna ${currentPage}`}
          keywords={[`gatsby`, `application`, `react`]}
        />
        <StyledArticlesList>
          {articles.map(article => (
            <StyledLink
              to={`/${article.slug}`}
              key={article.id}
              aria-label={article.title}
            >
              <SingleArticle {...article} />
            </StyledLink>
          ))}
        </StyledArticlesList>
        <StyledPaginatnion>
          {currentPage === 2 ? (
            <Button link="/" text="Poprzednia strona" />
          ) : (
            <Button link={`/blog/${prevPage}/`} text="Poprzednia strona" />
          )}
          {currentPage + 1 <= numPages ? (
            <Button link={`/blog/${nextPage}/`} text="Następna strona" />
          ) : (
            ""
          )}
        </StyledPaginatnion>
      </Layout>
    );
  }
}

export const paginationListQuery = graphql`
  query pagiantionListQuery($skip: Int!, $limit: Int!) {
    wbd {
      articles(skip: $skip, first: $limit, orderBy: createdAt_DESC) {
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
