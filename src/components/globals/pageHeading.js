import React from "react"
import styled from "styled-components"

const Heading = styled.h1`
  color: #ffffff;
  font-weight: bold;
  font-size: 34px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
  padding: 0 15px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 42px;
  }

  @media (min-width: 992px) {
    font-size: 56px;
  }

  @media (min-width: 1200px) {
    font-size: 62px;
  }
`

export default function pageHeading(props) {
  return <Heading>{props.children}</Heading>
}
