import React from "react";
import { StaticQuery, graphql } from "gatsby";
import GraphImg from "graphcms-image";
import styled from "styled-components";
const StyledImg = styled(GraphImg)`
  position: relative;
  object-fit: cover;
  height: 100%;
  width: 100%;
  grid-area: image;
  border-radius: 5px;
  div.graphcms-image-wrapper {
    z-index: 0;
  }
`;
const Image = ({ id }) => {
  const query = graphql`
    {
      wbd {
        assets {
          status
          fileName
          handle
          width
          height
          imageArticle {
            id
          }
        }
      }
    }
  `;
  return (
    <StaticQuery
      query={query}
      render={data => {
        let image = {};
        data.wbd.assets.forEach(asset => {
          asset.imageArticle.forEach(imageArticle => {
            const imageArticleId = imageArticle.id;
            if (imageArticleId === id) {
              image.handle = asset.handle;
              image.width = asset.width;
              image.height = asset.height;
            }
          });
        });
        return (
          <StyledImg
            image={image}
            blurryPlaceholder={true}
            position={"relative"}
          />
        );
      }}
    />
  );
};

export default Image;
