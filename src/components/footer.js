import React from "react"
import styled from "styled-components"

const Container = styled.footer`
  background-color: #3e4246;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Body = styled.p`
  color: #fff;
  text-align: center;
  font-weight: 300;
`

const Footer = () => {
  return (
    <Container>
      <Body>The SCOPE Trial</Body>
      <Body>University of Regina, Department of Psychology</Body>
    </Container>
  )
}

export default Footer
