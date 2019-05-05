import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/GlobalStyle'
import Header from 'components/header'
import Main from 'components/main'
import Footer from 'components/footer'
import { theme } from 'styles/theme'
import styled from 'styled-components'
const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <StyledLayout>
        <Header />
        <Main />
        <Footer />
      </StyledLayout>
    </ThemeProvider>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
