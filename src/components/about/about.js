import React from "react";
import styled from "styled-components";
import { appear } from "../animations/appear";
const StyledAboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  padding: 10px;
  animation: ${appear} 1.5s both;
  @media only screen and (min-width: ${({ theme }) => theme.media.s}) {
    & {
      width: 540px;
      align-self: center;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.m}) {
    & {
      width: 720px;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.l}) {
    & {
      width: calc(100% - 150px);
      align-self: flex-start;
      transform: translateX(150px);
      padding-top: 20px;
    }
  }
`;
const StyledHeroImage = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.grey};
  box-sizing: border-box;
  margin-bottom: 10px;
  @media only screen and (min-width: ${({ theme }) => theme.media.m}) {
    & {
      width: 180px;
      height: 180px;
    }
  }
`;
const StyledTitle = styled.h2`
  font-family: ${({ theme }) => theme.font.family.lato};
  font-size: ${({ theme }) => theme.font.size.l};
  color: ${({ theme }) => theme.primary};
  margin-bottom: 10px;
  @media only screen and (min-width: ${({ theme }) => theme.media.m}) {
    & {
      font-size: 2.8rem;
    }
  }
`;
const StyledDescription = styled.p`
  font-family: ${({ theme }) => theme.font.family.lato};
  font-size: ${({ theme }) => theme.font.size.m};
  color: ${({ theme }) => theme.grey};
  margin-bottom: 10px;
  width: 100%;
  padding: 0 10px;
  text-align: justify;
  @media only screen and (min-width: ${({ theme }) => theme.media.m}) {
    & {
      font-size: 2rem;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.l}) {
    & {
      padding: 0 20px;
      max-width: 960px;
    }
  }
`;
const About = () => {
  return (
    <StyledAboutWrapper>
      <StyledHeroImage />
      <StyledTitle>Cześć, jestem Patryk</StyledTitle>
      <StyledDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cumque
        eaque voluptatibus est distinctio ad omnis doloribus exercitationem sed
        incidunt!
      </StyledDescription>
    </StyledAboutWrapper>
  );
};

export default About;
