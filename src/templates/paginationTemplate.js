import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "components/layout";
import SingleArticle from "components/articles/singleArticle";
import styled from "styled-components";
import Button from "components/articles/moreArticlesButton";
const StyledArticlesList = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  align-items: center;
  padding: 0 10px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
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
          {console.log(data)}
        </StyledArticlesList>
        <StyledPaginatnion>
          {currentPage === 2 ? (
            <Button link="/" text="Poprzednia strona" />
          ) : (
            <Button link={`/blog/${prevPage}`} text="Poprzednia strona" />
          )}
          {currentPage + 1 <= numPages ? (
            <Button link={`/blog/${nextPage}`} text="Następna strona" />
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
