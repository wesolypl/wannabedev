import React from "react";
import styled from "styled-components";
const StyledAboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  padding: 10px;
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
`;
const StyledTitle = styled.h2`
  font-family: ${({ theme }) => theme.font.family.lato};
  font-size: ${({ theme }) => theme.font.size.l};
  color: ${({ theme }) => theme.primary};
  margin-bottom: 10px;
`;
const StyledDescription = styled.p`
  font-family: ${({ theme }) => theme.font.family.lato};
  font-size: ${({ theme }) => theme.font.size.m};
  color: ${({ theme }) => theme.grey};
  margin-bottom: 10px;
  width: 100%;
  padding: 0 10px;
  text-align: justify;
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
