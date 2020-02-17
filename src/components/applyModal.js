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
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  z-index: 100;
  @media only screen and (max-width: 39em) {
    width: 90%;
  }
`;

const Title = styled.h5`
  text-transform: capitalize;
  font-weight: 700;
  font-size: 3rem;
  color: #131418;
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
        <Form full />
      </FormWrapper>
    </Container>
  );
};

export default ApplyModal;
