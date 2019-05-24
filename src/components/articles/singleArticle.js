import React from "react";
import styled from "styled-components";
const StyledArticle = styled.article`
  display: grid;
  grid-template-columns: 100px auto;
  grid-template-rows: 1fr;
  grid-template-areas: "image content" "image content";
  grid-column-gap: 10px;
  width: 100%;
  height: 90px;
  margin-bottom: 20px;
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
const StyledThumbnail = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  grid-area: image;
  border-radius: 5px;
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
`;
const StyledShortcut = styled.p`
  display: block;
  font-family: ${({ theme }) => theme.font.family.lato};
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: 400;
  color: ${({ theme }) => theme.grey};
`;
const Article = props => {
  const { thumbnail, id, title, shortcut } = props;
  return (
    <StyledArticle>
      <StyledThumbnail src={thumbnail} alt={id} />
      <StyledContentBox>
        <StyledTitle>{title}</StyledTitle>
        <StyledShortcut>{shortcut}</StyledShortcut>
      </StyledContentBox>
    </StyledArticle>
  );
};

export default Article;
