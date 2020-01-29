import React, { useEffect } from "react";
import styled from "styled-components";
import Form from "./form";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99;
`;

const FormWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90%;
  max-height: 90%;
  overflow: scroll;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  z-index: 100;
`;

const Title = styled.h5`
  text-transform: capitalize;
  font-weight: 700;
  font-size: 3rem;
  color: #131418;
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
  margin-top: 1.5rem;
`;

const ApplyModal = ({ setShowApply }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", e =>
      e.keyCode === 27 ? setShowApply(false) : null
    );

    return () => {
      document.removeEventListener("keydown", e =>
        e.keyCode === 27 ? setShowApply(false) : null
      );
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleClick = ({ target }) => {
    if (target.getAttribute("name") === "container") {
      setShowApply(false);
    }
  };

  return (
    <Container name="container" onClick={handleClick}>
      <FormWrapper>
        <Title>Apply For The SCOPE Trial</Title>
        <form>
          <Form />
        </form>
      </FormWrapper>
    </Container>
  );
};

export default ApplyModal;
