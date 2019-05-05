import React from 'react'
import styled from 'styled-components'
const StyledArticle = styled.article`
  display: grid;
  grid-template-columns: 100px auto;
  grid-template-rows: 20px 70px;
  grid-template-areas: 'image title' 'image content';
  grid-column-gap: 10px;
  width: 95%;
  height: 90px;
  margin-bottom: 20px;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    grid-area: image;
    border-radius: 5px;
  }
  h3 {
    display: block;
    grid-area: title;
    font-family: ${({ theme }) => theme.font.family.lato};
    font-size: ${({ theme }) => theme.font.size.m};
    font-weight: 700;
    color: ${({ theme }) => theme.primary};
    text-transform: uppercase;
  }
  p {
    display: block;
    grid-area: content;
    font-family: ${({ theme }) => theme.font.family.lato};
    font-size: ${({ theme }) => theme.font.size.s};
    font-weight: 400;
    color: ${({ theme }) => theme.grey};
  }
`
const StyledTitle = styled.h3``

const Article = props => {
  return (
    <StyledArticle key={props.id}>
      <img src={props.thumbnail} alt={props.id} />
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </StyledArticle>
  )
}

export default Article
