import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Success = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-family: "Montserrat";
  width: 100%;
  height: 100%;
  border: 1px solid #8f8f8f;
  border-radius: 3px;
  padding: 1.5rem;
  font-size: 1.8rem;
  transition: all 0.3s;
  color: #131418;
  margin: 1.5rem auto;
  :focus {
    outline: none;
    border: 1px solid #131418;
  }
  &::placeholder {
    font-family: "Montserrat";
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
  margin: 0 auto 1.5rem;
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
  font-family: "Montserrat";
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
  }
  &::placeholder {
    font-family: "Montserrat";
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
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    preferredContact: "",
    body: ""
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState();

  function handleChange(e) {
    setDetails({ ...details, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // https://0v1lxszhha.execute-api.us-west-2.amazonaws.com/dev Development

    // https://g6fpvfhdmb.execute-api.us-west-2.amazonaws.com/dev Production
    await fetch("https://0v1lxszhha.execute-api.us-west-2.amazonaws.com/dev", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(details)
    }).then(res => setStatus(res.status));
    setSending(true);
    setDetails({
      name: "",
      email: "",
      phone: "",
      preferredContact: "",
      body: ""
    });
  }

  return (
    <Container>
      <Title>Contact Form</Title>
      <InputWrapper>
        <Input
          name="name"
          id="name"
          type="text"
          placeholder="What's your name?"
          value={details.name}
          onChange={handleChange}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          name="email"
          id="email"
          type="email"
          placeholder="What's your email?"
          value={details.email}
          onChange={handleChange}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          name="phone"
          id="phone"
          type="text"
          placeholder="What's your phone number?"
          value={details.phone}
          onChange={handleChange}
        />
      </InputWrapper>
      <AltLabel>How would you like to be contacted?</AltLabel>
      <RadioWrapper>
        <RadioInput
          type="radio"
          name="contactMethod"
          id="emailRadio"
          value="email"
          onChange={() => setDetails({ ...details, preferredContact: "email" })}
          required
        />
        <RadioLabel htmlFor="emailRadio">Email</RadioLabel>
        <RadioInput
          type="radio"
          name="contactMethod"
          id="phoneRadio"
          value="phone"
          onChange={() => setDetails({ ...details, preferredContact: "phone" })}
        />
        <RadioLabel htmlFor="phoneRadio">Phone</RadioLabel>
      </RadioWrapper>
      <InputWrapper>
        <TextInput
          name="body"
          id="body"
          placeholder="What would you like us to know?"
          value={details.body}
          onChange={handleChange}
        />
      </InputWrapper>
      <Submit onClick={handleSubmit}>{sending ? "Sending..." : "Send"}</Submit>
    </Container>
  );
};

export default Form;
