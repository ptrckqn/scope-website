import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.h4`
  font-weight: 700;
  font-size: 2.5rem;
  color: #131418;
`;

const InputWrapper = styled.span`
  display: flex;
  flex-direction: column-reverse;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid #8f8f8f;
  border-radius: 3px;
  padding: 1.5rem;
  font-size: 1.8rem;
  transition: all 0.3s;
  color: #131418;
  :focus {
    outline: none;
    border: 1px solid #131418;
    ::placeholder {
      opacity: 1;
    }
  }
  &::placeholder {
    opacity: 0;
  }
  @media only screen and (max-width: 56.25em) {
    font-size: 1.6rem;
  }
`;

const AltLabel = styled.label`
  font-size: 2.4rem;
  padding: 1rem 0;
  color: #8f8f8f;
  @media only screen and (max-width: 56.25em) {
    font-size: 1.8rem;
  }
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
  padding: 1.5rem 3rem;
  display: grid;
  grid-template-rows: 1fr max-content;
  justify-items: center;
  border: 1px solid #8f8f8f;
  transition: all 0.3s;
  cursor: pointer;
  color: #7d8c8f;
  ${RadioInput}:checked + & {
    border: 1px solid #7d8c8f;
    background-color: #7d8c8f;
    color: #fff;
  }
  :nth-child(2) {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  :nth-child(4) {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  &:focus,
  &:hover {
    border: 1px solid #8f8f8f;
    background-color: #8f8f8f;
    color: #fff;
  }
`;

const TextInput = styled.textarea`
  width: 100%;
  height: 5.5rem;
  border: 1px solid #8f8f8f;
  border-radius: 3px;
  padding: 1.5rem;
  font-size: 1.8rem;
  transition: all 0.3s;
  color: #131418;
  resize: none;
  margin-bottom: 1.5rem;
  :focus {
    outline: none;
    height: 20rem;
    ::placeholder {
      opacity: 1;
    }
  }
  &::placeholder {
    opacity: 0;
  }
`;

const Label = styled.label`
  font-size: 1.8rem;
  transition: all 0.3s;
  transform-origin: left bottom;
  color: #8f8f8f;
  ${Input}:placeholder-shown ~ & {
    transform: translate(1.5rem, 4.35rem) scale(1);
    cursor: text;
    @media only screen and (max-width: 56.25em) {
          transform: translate(1.5rem, 3.9rem) scale(1);
    }
  }
  ${Input}:not(:placeholder-shown) ~ &,
  ${Input}:focus ~ & {
    transform: translate(0, 0) scale(0.75);

  }
  ${TextInput}:placeholder-shown ~ & {
    transform: translate(1.5rem, 4.35rem) scale(1);
    cursor: text;
    @media only screen and (max-width: 56.25em) {
          transform: translate(1.5rem, 4.1rem) scale(1);
    }
  }
  ${TextInput}:not(:placeholder-shown) ~ &,
  ${TextInput}:focus ~ & {
    transform: translate(0, 0) scale(0.75);
  }
`;

const Submit = styled.span`
  align-self: center;
  width: auto;
  border: 1px solid #8f8f8f;
  color: #8f8f8f;
  border-radius: 3px;
  padding: 1rem 3rem;
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.2s;
  &:focus,
  &:hover {
    border: 1px solid #8f8f8f;
    background-color: #8f8f8f;
    color: #fff;
  }
  &:active {
    border: 1px solid #7d8c8f;
    background-color: #7d8c8f;
    color: #fff;
  }
`;

const Form = () => {
  // TODO: MAKE FORM WORK
  const [details, setDetails] = useState({
    name: "",
    email: "",
    number: "",
    preferredContact: "",
    body: ""
  });

  function handleChange(e) {
    setDetails({ ...details, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(details);
  }

  return (
    <Container>
      <Title>Contact Form</Title>
      <InputWrapper>
        <Input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={details.name}
          onChange={handleChange}
        />
        <Label htmlFor="name">What's your name?</Label>
      </InputWrapper>
      <InputWrapper>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={details.email}
          onChange={handleChange}
        />
        <Label htmlFor="email">What's your email?</Label>
      </InputWrapper>
      <InputWrapper>
        <Input
          id="number"
          type="text"
          placeholder="Enter your number"
          value={details.number}
          onChange={handleChange}
        />
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
        <RadioLabel htmlFor="emailRadio">Email</RadioLabel>
        <RadioInput
          type="radio"
          name="contactMethod"
          id="phoneRadio"
          value="phone"
        />
        <RadioLabel htmlFor="phoneRadio">Phone</RadioLabel>
      </RadioWrapper>
      <InputWrapper>
        <TextInput
          id="body"
          placeholder="&nbsp;"
          value={details.body}
          onChange={handleChange}
        />
        <Label htmlFor="body">What would you like us to know?</Label>
      </InputWrapper>
      <Submit onClick={handleSubmit}>Send</Submit>
    </Container>
  );
};

export default Form;
