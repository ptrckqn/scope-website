import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputWrapper = styled.span`
  display: flex;
  flex-direction: column-reverse;
  margin: 1.5rem 0;
`;

const Input = styled.input`
  width: 50%;
  margin: 0.5rem 0;
  padding: 0.5rem 0;
  border: none;
  border-bottom: 1px solid #7d8c8f;
  font-size: 1.8rem;
  transition: all 0.3s;
  color: #131418;
  :focus {
    width: 90%;
    outline: none;
    ::placeholder {
      opacity: 1;
    }
  }
  &::placeholder {
    opacity: 0;
  }
`;

const AltLabel = styled.label`
  font-size: 2.4rem;
  padding: 1rem 0;
  color: #8f8f8f;
`;

const RadioWrapper = styled.div`
  margin: 1.5rem auto;
  justify-content: center;
  display: flex;
`;

const RadioInput = styled.input`
  display: none;
`;

const RadioLabel = styled.label`
  width: 33%;
  display: grid;
  grid-template-rows: 1fr max-content;
  justify-items: center;
  border: 1px solid #8f8f8f;
  transition: all 0.3s;
  ${RadioInput}:checked + & {
    border: 1px solid #131418;
  }
  :nth-child(2) {
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
  }
  :nth-child(4) {
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
  }
`;

const Phone = styled.svg`
  width: 30%;
  padding: 1.5rem 0;
  fill: #8f8f8f;
  transition: all 0.3s;
  ${RadioInput}:checked + ${RadioLabel} & {
    fill: #131418;
  }
`;

const Email = styled.svg`
  width: 30%;
  padding: 1.5rem 0;
  fill: #8f8f8f;
  transition: all 0.3s;
  ${RadioInput}:checked + ${RadioLabel} & {
    fill: #131418;
  }
`;

const TextInput = styled.textarea`
  width: 50%;
  height: 4rem;
  margin-bottom: 1.5rem;
  border: none;
  border-bottom: 1px solid #7d8c8f;
  font-size: 1.8rem;
  transition: all 0.3s;
  color: #131418;
  resize: none;
  :focus {
    width: 90%;
    height: 30rem;
    outline: none;
    ::placeholder {
      opacity: 1;
    }
  }
  &::placeholder {
    opacity: 0;
  }
`;

const Label = styled.label`
  font-size: 2.4rem;
  transition: all 0.3s;
  transform-origin: left bottom;
  color: #8f8f8f;
  ${Input}:placeholder-shown ~ & {
    transform: translate(0, 2.75rem) scale(1);
    cursor: text;
  }
  ${Input}:not(:placeholder-shown) ~ &,
  ${Input}:focus ~ & {
    transform: translate(0, 0) scale(0.5);
  }
  ${TextInput}:placeholder-shown ~ & {
    transform: translate(0, 2.75rem) scale(1);
    cursor: text;
  }
  ${TextInput}:not(:placeholder-shown) ~ &,
  ${TextInput}:focus ~ & {
    transform: translate(0, 0) scale(0.5);
  }
`;

const Submit = styled.span`
  align-self: center;
  width: auto;
  border: 1px solid #8f8f8f;
  color: #8f8f8f;
  border-radius: 25px;
  padding: 1rem 3rem;
  font-size: 1.8rem;
  transition: all 0.3s;
  &:focus,
  &:active {
    border: 1px solid #131418;
    color: #131418;
  }
`;

const Form = () => {
  return (
    <Container>
      <InputWrapper>
        <Input id="name" type="text" placeholder="&nbsp;" />
        <Label htmlFor="name">What's your name?</Label>
      </InputWrapper>
      <InputWrapper>
        <Input id="email" type="email" placeholder="&nbsp;" />
        <Label htmlFor="email">What's your email?</Label>
      </InputWrapper>
      <InputWrapper>
        <Input id="number" type="text" placeholder="&nbsp;" />
        <Label htmlFor="number">What's your number?</Label>
      </InputWrapper>
      <AltLabel>How would you like to be contacted?</AltLabel>
      <RadioWrapper>
        <RadioInput
          type="radio"
          name="contactMethod"
          id="emailRadio"
          value="email"
        />
        <RadioLabel htmlFor="emailRadio">
          <Email xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path d="M29 4H3a3 3 0 00-3 3v18a3 3 0 003 3h26a3 3 0 003-3V7a3 3 0 00-3-3zM2.741 25.99l-.731-.732 8.249-8.248.731.732-8.249 8.248zm26.518 0l-8.249-8.248.731-.732 8.249 8.248-.731.732zM17 19.325V20h-2v-.675L2.003 7.275l1.272-1.272L16 17.801 28.725 6.003l1.272 1.272L17 19.325z" />
          </Email>
          Email
        </RadioLabel>
        <RadioInput
          type="radio"
          name="contactMethod"
          id="phoneRadio"
          value="phone"
        />
        <RadioLabel htmlFor="phoneRadio">
          <Phone xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path d="M2.126 1.188C3.404-.093 7.267-.307 7.296.371c.029.677 3.479 8.191 3.509 8.869s-2.274 2.987-2.948 3.663c-.668.669 4.508 6.533 4.606 6.644.11.099 5.96 5.287 6.628 4.617.674-.676 2.979-2.985 3.653-2.955.676.029 8.173 3.487 8.849 3.518.676.029.463 3.9-.815 5.182-1.093 1.095-6.752 5.071-16.592-2.029-1.079-.622-2.788-2.049-5.38-4.646a.022.022 0 00-.005-.004l-.006-.006-.006-.006a.022.022 0 00-.004-.005c-2.59-2.598-4.014-4.312-4.635-5.393C-2.933 7.956 1.034 2.283 2.126 1.188z" />
          </Phone>
          Phone
        </RadioLabel>
      </RadioWrapper>
      <InputWrapper>
        <TextInput id="body" placeholder="&nbsp;" />
        <Label htmlFor="body">What would you like us to know?</Label>
      </InputWrapper>
      <Submit>Send</Submit>
    </Container>
  );
};

export default Form;
