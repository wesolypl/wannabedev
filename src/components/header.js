import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
const StyledHeader = styled.header`
  width: 100%;
  height: 40px;
  font-family: ${({ theme }) => theme.font.family.raleway};
  background-color: ${({ theme }) => theme.bgColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  color: ${({ theme }) => theme.primary};
  p {
    font-size: ${({ theme }) => theme.font.size.l};
    font-weight: 600;
    cursor: pointer;
  }
`
const StyledMenuButton = styled.div`
  position: relative;
  width: 26px;
  height: 3px;
  border-bottom: 3px solid ${({ theme }) => theme.primary};
  cursor: pointer;
  ::before,
  ::after {
    position: absolute;

    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    border-bottom: 3px solid ${({ theme }) => theme.primary};
  }
  ::before {
    top: -8px;
  }
  ::after {
    top: 8px;
  }
`
const Header = ({ children }) => (
  <StyledHeader>
    <p>WBDev</p>
    <StyledMenuButton />
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
