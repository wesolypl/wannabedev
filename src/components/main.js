import React from "react";
import styled from "styled-components";
const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.bgColor};
  /* background-color: ${({ theme }) => theme.primary}; */
  @media only screen and (min-width: ${({ theme }) => theme.media.l}) {
    & {
      /* width: auto; */
      min-height:calc(100vh - 130px);
      padding-bottom:0;
    }
  }
`;

const Main = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
