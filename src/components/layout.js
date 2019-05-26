import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../assets/styles/GlobalStyle";
import { theme } from "../assets/styles/theme";
import styled from "styled-components";
import Footer from "./footer/footer";
import Header from "./header/header";
import Main from "./main";
const StyledLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  @media only screen and (min-width: ${({ theme }) => theme.media.l}) {
    & {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
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
