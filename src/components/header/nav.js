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
`;

const Nav = props => {
  const { showMenu, toggleMenu } = props;
  return (
    <StyledNav showMenu={showMenu}>
      <ul>
        <li>
          <StyledLink to="/" activeClassName="active" onClick={toggleMenu}>
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/about" activeClassName="active" onClick={toggleMenu}>
            About
          </StyledLink>
        </li>
        <li>
          <StyledA
            href="https://github.com/wesolypl"
            target="_blank"
            onClick={toggleMenu}
          >
            Github
          </StyledA>
        </li>
        <li>
          <StyledLink
            to="/contact"
            activeClassName="active"
            onClick={toggleMenu}
          >
            Contact
          </StyledLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
