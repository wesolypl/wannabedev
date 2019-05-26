import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";
import moment from "moment";
import Image from "../components/images/articlePageImage";
const StyledArticle = styled.article`
  width: 100%;
  font-family: ${({ theme }) => theme.font.family.lato};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  @media only screen and (min-width: ${({ theme }) => theme.media.l}) {
    & {
      padding-top: 20px;
      width: calc(100% - 150px);
      transform: translateX(150px);
      align-self: flex-start;
    }
  }
`;
const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.size.l};
  color: ${({ theme }) => theme.primary};
  padding: 0 10px 10px 10px;
  @media only screen and (min-width: ${({ theme }) => theme.media.m}) {
    & {
      font-size: 2.8rem;
    }
  }
`;
const StyledData = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.font.size.xs};
  @media only screen and (min-width: ${({ theme }) => theme.media.m}) {
    & {
      font-size: ${({ theme }) => theme.font.size.s};
    }
  }
`;
const StyledContent = styled.p`
  display: block;
  padding: 10px 20px;
  font-size: ${({ theme }) => theme.font.size.m};
  color: ${({ theme }) => theme.primary};
  text-align: justify;
  @media only screen and (min-width: ${({ theme }) => theme.media.s}) {
    & {
      width: 540px;
      align-self: center;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.m}) {
    & {
      width: 720px;
      font-size: 1.8rem;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.l}) {
    & {
      width: 98%;
      align-self: flex-start;
    }
  }
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
        <Image id={data.id} />
        <StyledContent dangerouslySetInnerHTML={{ __html: data.content }} />
      </StyledArticle>
    </Layout>
  );
};

export default ArticleTemplate;
