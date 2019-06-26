import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
const StyledButton = styled.button`
  border: 2px solid ${({ theme }) => theme.blue};
  border-radius: 25px;
  width: 140px;
  height: 50px;
  align-self: center;
  background: none;
  padding: 4px 20px;
  margin-bottom: 20px;
  transition: background-color 0.25s ease-in-out;
  @media only screen and (min-width: ${({ theme }) => theme.media.l}) {
    width: 160px;
    height: 70px;
    &:hover {
      background-color: ${({ theme }) => theme.blue};
    }
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.m};
  font-family: ${({ theme }) => theme.font.family.lato};
  color: ${({ theme }) => theme.blue};
  width: 100%;
  height: 100%;
  transition: color 0.25s ease-in-out;
  @media only screen and (min-width: ${({ theme }) => theme.media.l}) {
    ${StyledButton}:hover & {
      color: #fff;
    }
  }
`;

const moreArticlesButton = props => {
  const link = props.link;
  const text = props.text;
  return (
    <StyledButton>
      <StyledLink to={link}>{text}</StyledLink>
    </StyledButton>
  );
};

export default moreArticlesButton;
