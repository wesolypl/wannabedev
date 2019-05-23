import React from "react";
import styled from "styled-components";
const StyledArticle = styled.article`
  display: grid;
  grid-template-columns: 100px auto;
  grid-template-rows: 1fr;
  grid-template-areas: "image content" "image content";
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
  div {
    grid-area: content;
    overflow: hidden;
    h3 {
      display: block;
      font-family: ${({ theme }) => theme.font.family.lato};
      font-size: ${({ theme }) => theme.font.size.m};
      font-weight: 700;
      color: ${({ theme }) => theme.primary};
      text-transform: uppercase;
    }
    p {
      display: block;
      font-family: ${({ theme }) => theme.font.family.lato};
      font-size: ${({ theme }) => theme.font.size.s};
      font-weight: 400;
      color: ${({ theme }) => theme.grey};
    }
  }
  /* media queries small */
  ${({ theme }) => theme.media.s} {
  }
  /* media quereis medium */
  ${({ theme }) => theme.media.m} {
  }
  /* media queries large */
  ${({ theme }) => theme.media.l} {
  }
  /* media queries large */
  ${({ theme }) => theme.media.xl} {
  }
`;

const Article = props => {
  const { thumbnail, id, title, shortcut } = props;
  return (
    <StyledArticle>
      <img src={thumbnail} alt={id} />
      <div>
        <h3>{title}</h3>
        <p>{shortcut}</p>
      </div>
    </StyledArticle>
  );
};

export default Article;
