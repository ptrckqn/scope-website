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
  margin: 0 auto 1.5rem;
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

const Label = styled.label`
  color: #8f8f8f;
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

const Form = ({ full }) => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    preferredContact: "",
    body: ""
  });
  const [sending, setSending] = useState(false);

  const handleChange = e => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSending(true);
    return;
    if (!sending) {
      const res = await fetch(
        "https://g6fpvfhdmb.execute-api.us-west-2.amazonaws.com/dev",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(details)
        }
      );
      if (res.ok) {
        setDetails({
          name: "",
          email: "",
          phone: "",
          preferredContact: "",
          body: ""
        });
        setSending(false);
      }
    }
  };

  return (
    <Container>
      <Label htmlFor="name">Name</Label>
      <Input
        name="name"
        id="name"
        type="text"
        placeholder="What's your name?"
        value={details.name}
        onChange={handleChange}
        required
      />
      <Label htmlFor="email">Email</Label>
      <Input
        name="email"
        id="email"
        type="email"
        placeholder="What's your email?"
        value={details.email}
        onChange={handleChange}
        required
      />
      <Label htmlFor="phone">Phone</Label>
      <Input
        name="phone"
        id="phone"
        type="text"
        placeholder="What's your phone number?"
        value={details.phone}
        onChange={handleChange}
      />

      {full && (
        <>
          <Label>How would you like to be contacted?</Label>
          <RadioWrapper>
            <RadioInput
              type="radio"
              name="contactMethod"
              id="emailRadio"
              value="email"
              onChange={() =>
                setDetails({ ...details, preferredContact: "email" })
              }
              required
            />
            <RadioLabel htmlFor="emailRadio">Email</RadioLabel>
            <RadioInput
              type="radio"
              name="contactMethod"
              id="phoneRadio"
              value="phone"
              onChange={() =>
                setDetails({ ...details, preferredContact: "phone" })
              }
            />
            <RadioLabel htmlFor="phoneRadio">Phone</RadioLabel>
          </RadioWrapper>
          <Label htmlFor="body">Additional Information</Label>
          <TextInput
            name="body"
            id="body"
            placeholder="What would you like us to know?"
            value={details.body}
            onChange={handleChange}
          />
        </>
      )}

      <Submit onClick={handleSubmit}>{sending ? "Sending..." : "Send"}</Submit>
    </Container>
  );
};

export default Form;
