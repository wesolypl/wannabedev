import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import { theme } from "styles/theme";
import Layout from "components/layout";
const Theme = props => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme} />
    </>
  );
};

export default Theme;
