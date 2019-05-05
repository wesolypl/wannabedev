import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.blueFooter};
  align-self: flex-end;
`
const Footer = () => (
  <StyledFooter>
    <p>footer</p>
  </StyledFooter>
)
export default Footer
