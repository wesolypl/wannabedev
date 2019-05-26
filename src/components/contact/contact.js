import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import axios from "axios";
const StyledTitle = styled.h2`
  font-family: ${({ theme }) => theme.font.family.lato};
  font-size: ${({ theme }) => theme.font.size.l};
  color: ${({ theme }) => theme.primary};
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
  @media only screen and (min-width: ${({ theme }) => theme.media.m}) {
    & {
      font-size: 2.8rem;
    }
  }
`;
const StyledDescription = styled.p`
  width: 100%;
  margin-bottom: 10px;
  font-family: ${({ theme }) => theme.font.family.lato};
  font-size: ${({ theme }) => theme.font.size.m};
  color: ${({ theme }) => theme.primary};
  text-align: center;
  @media only screen and (min-width: ${({ theme }) => theme.media.m}) {
    & {
      font-size: 2rem;
    }
  }
`;
const StyledContactWrapper = styled.div`
  width: 100%;
  padding: 10px;
  flex-grow: 1;
  @media only screen and (min-width: ${({ theme }) => theme.media.s}) {
    & {
      width: 540px;
      align-self: center;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.m}) {
    & {
      width: 720px;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.l}) {
    & {
      width: calc(100% - 150px);
      align-self: flex-start;
      transform: translateX(150px);
      padding-top: 20px;
    }
  }
`;
const StyledFormik = styled(Formik)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  @media only screen and (min-width: ${({ theme }) => theme.media.l}) {
    & {
      width: 80%;
      justify-content: center;
    }
  }
`;

const StyledFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
`;
const StyledInput = styled.input`
  width: 70%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-bottom: 3px solid ${({ theme }) => theme.primary};
  font-size: ${({ theme }) => theme.font.size.m};
  font-family: ${({ theme }) => theme.font.family.lato};
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.primary};
  outline: none;
  transition: border-bottom 0.4s;
  &:focus {
    border-bottom: 3px solid ${({ theme }) => theme.blue};
  }
  &::placeholder {
    color: ${({ theme }) => theme.primary};
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.m}) {
    & {
      font-size: 2rem;
    }
  }
`;
const StyledTextarea = styled.textarea`
  width: 70%;
  height: 100px;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-bottom: 3px solid ${({ theme }) => theme.primary};
  font-size: ${({ theme }) => theme.font.size.m};
  font-family: ${({ theme }) => theme.font.family.lato};
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.primary};
  outline: none;
  transition: border-bottom 0.2s;
  &:focus {
    border-bottom: 3px solid ${({ theme }) => theme.blue};
  }
  &::placeholder {
    color: ${({ theme }) => theme.primary};
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.m}) {
    & {
      font-size: 2rem;
    }
  }
`;
const StyledButton = styled.button`
  align-self: center;
  margin-top: 10px;
  padding: 10px 20px;
  border: 2px solid ${({ theme }) => theme.blue};
  border-radius: 25px;
  font-size: ${({ theme }) => theme.font.size.m};
  font-family: ${({ theme }) => theme.font.family.lato};
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.blue};
  text-transform: uppercase;
  outline: none;
  @media only screen and (min-width: ${({ theme }) => theme.media.m}) {
    & {
      font-size: 2rem;
    }
  }
`;
const Contact = () => {
  return (
    <StyledContactWrapper>
      <StyledTitle>Kontakt</StyledTitle>
      <StyledDescription>
        Tutaj możesz się ze mną skontaktować
      </StyledDescription>
      <StyledFormik
        initialValues={{ name: "", email: "", content: "" }}
        onSubmit={(values, { resetForm }) => {
          if (
            values.name !== "" &&
            values.email !== "" &&
            values.content !== ""
          ) {
            const json = JSON.stringify({
              email: values.email,
              name: values.name,
              content: values.content
            });
            axios
              .post(
                "https://oe2o6awipk.execute-api.eu-west-1.amazonaws.com/default/wbdSendMail",
                json
              )
              .then(res => {
                if (res.status === 200) {
                  alert("Udało się! Wiadmość została wysłana");
                }
              })
              .catch(err => {
                console.log(err);
              });
            resetForm();
            return;
          }
          alert("Pola nie mogą być pustę");
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <StyledFormWrapper onSubmit={handleSubmit}>
            <StyledInput
              name="name"
              type="text"
              placeholder="Twoje imię"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <StyledInput
              name="email"
              type="email"
              placeholder="Twój email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <StyledTextarea
              name="content"
              placeholder="W czym Ci mogę pomóc?"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.content}
            />
            <StyledButton type="submit">Wyślij</StyledButton>
          </StyledFormWrapper>
        )}
      </StyledFormik>
    </StyledContactWrapper>
  );
};

export default Contact;
