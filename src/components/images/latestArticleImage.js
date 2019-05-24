import React from "react";
import { StaticQuery, graphql } from "gatsby";
import GraphImg from "graphcms-image";
import styled from "styled-components";
const StyledImg = styled(GraphImg)`
  object-fit: cover;
  height: 100%;
  width: 100%;
  display: block;
  position: relative;
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
        const style = {
            position: "absolute",
            top:"0",
            left:"0",
            width:"100%",
            height:"100%"
        }
        return <StyledImg image={image} style={style} blurryPlaceholder={true}/>
      }}
    />
  );
};

export default Image;
