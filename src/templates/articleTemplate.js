import React from "react";
import Layout from "components/layout";
import styled from "styled-components";
import SEO from "components/seo";
import moment from "moment";
const StyledArticle = styled.article`
  width: 100%;
  font-family: ${({ theme }) => theme.font.family.lato};
`;
const StyledImage = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ src }) => src});
  background-size: cover;
`;
const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.size.l};
  color: ${({ theme }) => theme.primary};
  padding: 0 10px 10px 10px;
`;
const StyledData = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.font.size.xs};
`;
const StyledContent = styled.p`
  padding: 10px 10px;
  font-size: ${({ theme }) => theme.font.size.m};
  color: ${({ theme }) => theme.primary};
  text-align: justify;
`;

const ArticleTemplate = ({ pageContext: { data } }) => {
  return (
    <Layout>
      <SEO title={data.title} keywords={[`gatsby`, `application`, `react`]} />
      <StyledArticle>
        <StyledTitle>
          {data.title}{" "}
          <StyledData>{moment(data.createdAt).format("DD/MM/YYYY")}</StyledData>
        </StyledTitle>
        <StyledImage src={data.thumbnail} />
        <StyledContent>{data.content}</StyledContent>
      </StyledArticle>
    </Layout>
  );
};

export default ArticleTemplate;
