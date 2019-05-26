import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.bgColor};
  z-index: 1;
  transform: ${showMenu =>
    showMenu.showMenu ? "translateX(0%)" : "translateX(-100%)"};
  transition: transform 0.5s;
  ul {
    width: 100%;
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    li {
      margin-bottom: 35px;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.l}) {
    & {
      transform: translateX(0%);
      position: relative;
      width: 100%;
      height: 100%;
      ul {
        justify-content: space-around;
        li {
          margin: 0;
          writing-mode: vertical-lr;
          text-orientation: mixed;
          transform: rotate(180deg);
        }
      }
    }
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.grey};
  font-size: ${({ theme }) => theme.font.size.xl};
  font-family: ${({ theme }) => theme.font.family.raleway};
  &.active {
    font-weight: 700;
    color: ${({ theme }) => theme.primary};
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.m}) {
    font-size: ${({ theme }) => theme.font.size.xxl};
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.l}) {
    font-size: ${({ theme }) => theme.font.size.m};
    &.active::after {
      position: absolute;
      top: 0;
      left: -4px;
      content: "";
      width: 2px;
      height: 100%;
      background-color: ${({ theme }) => theme.primary};
    }
  }
`;
const StyledA = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.grey};
  font-size: ${({ theme }) => theme.font.size.xl};
  font-family: ${({ theme }) => theme.font.family.raleway};
  &.active {
    font-weight: 700;
    color: black;
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.m}) {
    font-size: ${({ theme }) => theme.font.size.xxl};
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.l}) {
    font-size: ${({ theme }) => theme.font.size.m};
  }
`;

const Nav = props => {
  const { showMenu, toggleMenu } = props;
  return (
    <StyledNav showMenu={showMenu}>
      <ul>
        <li>
          <StyledLink to="/" activeClassName="active" onClick={toggleMenu}>
            Strona Główna
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to="/about/"
            activeClassName="active"
            onClick={toggleMenu}
          >
            O Blogu
          </StyledLink>
        </li>
        <li>
          <StyledA
            href="https://github.com/wesolypl"
            target="_blank"
            rel="noreferrer"
            onClick={toggleMenu}
          >
            Github
          </StyledA>
        </li>
        <li>
          <StyledLink
            to="/contact/"
            activeClassName="active"
            onClick={toggleMenu}
          >
            Kontakt
          </StyledLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
