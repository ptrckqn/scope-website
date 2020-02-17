import React from "react";
import styled from "styled-components";

const Container = styled.section`
  height: 35rem;
  background: url(${props => props.image}) center center/cover no-repeat;
  position: relative;
`;

const Details = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h4`
  text-transform: uppercase;
  text-align: center;
  font-size: 4rem;
  color: #fff;
  margin-bottom: 2rem;
  width: 100%;
`;

const ApplyBtn = styled.button`
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  background-color: transparent;
  padding: 1.5rem;
  font-size: inherit;
  font-family: inherit;
  cursor: pointer;
  border: 2px solid #fff;
  border-radius: 3px;
  transition: all 300ms;
  &:hover {
    color: #202020;
    background-color: #fff;
    border: 2px solid #202020;
  }
`;

const Interested = ({ setShowApply, image }) => {
  const handleClick = e => {
    e.preventDefault();

    setShowApply(true);
  };
  return (
    <Container image={image}>
      <Details>
        <Title>Are you interested?</Title>
        <ApplyBtn onClick={handleClick}>Apply Now</ApplyBtn>
      </Details>
    </Container>
  );
};

export default Interested;
