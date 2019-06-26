import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import Nav from "./nav";
import { appearLeft } from "../animations/appear";
const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  font-family: ${({ theme }) => theme.font.family.raleway};
  background-color: ${({ theme }) => theme.bgColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  color: ${({ theme }) => theme.primary};
  z-index: 100;

  @media only screen and (min-width: ${({ theme }) => theme.media.m}) {
    & {
      height: 50px;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.l}) {
    & {
      position: absolute;
      top: 0;
      right: 0;
      width: 150px;
      height: 400px;
      animation: ${appearLeft} 1s both;
    }
  }
`;
const StyledHamburgerButton = styled.button`
  z-index: 101;
  position: relative;
  width: 26px;
  height: 26px;
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
  @media only screen and (min-width: ${({ theme }) => theme.media.m}) {
    & {
      width: 36px;
      height: 36px;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.l}) {
    & {
      display: none;
    }
  }
`;
const StyledInnerHamburger = styled.div`
  z-index: 100;
  position: relative;
  width: 26px;
  height: 3px;
  border: 0;
  background: transparent;
  border-bottom: ${showMenu => (showMenu.showMenu ? "0" : "3px solid #263843")};
  transform: translateX(${showMenu => (showMenu.showMenu ? "5px" : "0px")});
  transition: 0.3s transform linear, 0.3s border-bottom;
  ::before,
  ::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    border-bottom: 3px solid ${({ theme }) => theme.primary};
    transition: 0.3s transform linear;
  }
  ::before {
    transform-origin: left center;
    transform: translateY(-8px)
      rotate(${showMenu => (showMenu.showMenu ? "45deg" : "0deg")})
      translate(${showMenu => (showMenu.showMenu ? "-2px, -1px" : "0px, 0px")});
  }
  ::after {
    transform-origin: left center;
    transform: translateY(8px)
      rotate(${showMenu => (showMenu.showMenu ? "-45deg" : "0deg")});
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.m}) {
    & {
      width: 36px;
      ::before {
        transform: translateY(-10px)
          rotate(${showMenu => (showMenu.showMenu ? "45deg" : "0deg")})
          translate(
            ${showMenu => (showMenu.showMenu ? "-3px, -3px" : "0px, 0px")}
          );
      }
      ::after {
        transform: translateY(10px)
          rotate(${showMenu => (showMenu.showMenu ? "-45deg" : "0deg")});
      }
    }
  }
`;
const StyledLogo = styled(Link)`
  font-size: ${({ theme }) => theme.font.size.l};
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
  @media only screen and (min-width: ${({ theme }) => theme.media.m}) {
    font-size: ${({ theme }) => theme.font.size.xl};
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.l}) {
    & {
      display: none;
    }
  }
`;
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }
  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  };
  render() {
    return (
      <>
        <StyledHeader>
          <StyledLogo to="/">WBDev</StyledLogo>
          <StyledHamburgerButton
            onClick={this.toggleMenu}
            showMenu={this.state.showMenu}
            aria-label="Menu"
          >
            <StyledInnerHamburger showMenu={this.state.showMenu} />
          </StyledHamburgerButton>
          <Nav showMenu={this.state.showMenu} toggleMenu={this.toggleMenu} />
        </StyledHeader>
      </>
    );
  }
}

// export default Header;
// const Header = ({ children }) => (
//   <StyledHeader>
//     <p>WBDev</p>
//     <StyledMenuButton />
//     <Nav />
//   </StyledHeader>
// );

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
