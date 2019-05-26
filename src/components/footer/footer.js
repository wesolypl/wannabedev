import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  height: 130px;
  background-color: ${({ theme }) => theme.blueFooter};
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    font-family: ${({ theme }) => theme.font.family.lato};
    font-size: 1.2rem;
    padding: 10px 20px 10px 20px;
    flex-grow: 1;

    h5 {
      /* position: relative; */
      font-size: 1.4rem;
      margin-bottom: 5px;
      color: ${({ theme }) => theme.greyFooter};
      /* z-index: 1; */
    }
    hr {
      width: 100%;
      height: 1px;
      border: 1px solid ${({ theme }) => theme.greyFooter};
      margin-bottom: 5px;
    }
    p {
      color: ${({ theme }) => theme.grey};
    }
  }
  span {
    justify-self: flex-end;
    font-size: ${({ theme }) => theme.font.size.s};
    font-family: ${({ theme }) => theme.font.family.raleway};
    color: ${({ theme }) => theme.grey};
    display: block;
    height: 24px;
    width: 100%;
    text-align: center;
    background-color: ${({ theme }) => theme.primary};
    line-height: 24px;
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.s}) {
    div {
      width: 540px;
      align-self: center;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.m}) {
    div {
      width: 720px;
      align-self: center;
    }
  }
`;
const Footer = data => (
  <StyledFooter>
    <div>
      <h5>O blogu</h5>
      <hr />
      <p>
        Blog powstał aby zainsiprować osoby zaczynąjące swoją przygodę z
        frontendem. Regularnie umieszczane są wpisy, w których opisuję i
        przedstawiam co udało mi się nauczyć w ostatnim czasie.
      </p>
    </div>
    <span>Wanna Be Dev 2019</span>
  </StyledFooter>
);
export default Footer;
