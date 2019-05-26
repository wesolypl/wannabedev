import React from "react";
import styled from "styled-components";
import Image from "components/Images/homePageArticleImage";
const StyledArticle = styled.article`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "image content" "image content";
  grid-column-gap: 10px;
  width: 100%;
  height: 90px;
  margin-bottom: 20px;
  /* media queries small */
  @media only screen and (min-width: ${({ theme }) => theme.media.m}) {
    & {
      height: 130px;
      grid-template-columns: 130px 1fr;
    }
  }
`;
const StyledContentBox = styled.div`
  grid-area: content;
  overflow: hidden;
`;
const StyledTitle = styled.h3`
  display: block;
  font-family: ${({ theme }) => theme.font.family.lato};
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  text-transform: uppercase;
  @media only screen and (min-width: ${({ theme }) => theme.media.m}) {
    & {
      font-size: 2rem;
    }
  }
`;
const StyledShortcut = styled.p`
  display: block;
  font-family: ${({ theme }) => theme.font.family.lato};
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: 400;
  color: ${({ theme }) => theme.grey};
  width: 100%;
  @media only screen and (min-width: ${({ theme }) => theme.media.m}) {
    & {
      font-size: ${({ theme }) => theme.font.size.m};
    }
  }
`;
const Article = props => {
  const { id, title, shortcut } = props;
  return (
    <StyledArticle>
      <Image id={id} />
      <StyledContentBox>
        <StyledTitle>{title}</StyledTitle>
        <StyledShortcut>{shortcut}</StyledShortcut>
      </StyledContentBox>
    </StyledArticle>
  );
};

export default Article;
