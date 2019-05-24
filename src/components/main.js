import React from "react";
import styled from "styled-components";
const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.bgColor};
  padding-bottom: 20px;
`;

const Main = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
