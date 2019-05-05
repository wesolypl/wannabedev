import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import Article from 'components/articles/article'
import styled from 'styled-components'
const StyledArticlesList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`

const Posts = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          wbdv2 {
            articleses {
              id
              title
              content
              thumbnail
            }
          }
        }
      `}
      render={({ wbdv2: { articleses } }) => (
        <StyledArticlesList>
          {articleses.map(article => (
            <Article {...article} />
          ))}
        </StyledArticlesList>
      )}
    />
  )
}

export default Posts
