import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Articles from 'components/articles/articles'

const StyledMain = styled.main`
  flex-grow: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.bgColor};
`

const Main = ({ children }) => (
  <StyledMain>
    <Articles />
  </StyledMain>
)

export default Main
