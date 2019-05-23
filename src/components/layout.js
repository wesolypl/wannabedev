import React, { Component } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import { theme } from "styles/theme";
import styled from "styled-components";
import Footer from "components/footer/footer";
import Header from "components/header/header";
import Main from "components/main";
const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;
const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <StyledLayout>
          <Header />
          <Main children={children} />
          <Footer />
        </StyledLayout>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
