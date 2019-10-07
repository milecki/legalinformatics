import React from "react"
import styled from "styled-components"

const Heading = styled.h1`
  color: #ffffff;
  font-weight: bold;
  font-size: 30px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);

  @media (min-width: 768px) {
    font-size: 36px;
  }

  @media (min-width: 992px) {
    font-size: 48px;
  }

  @media (min-width: 1200px) {
    font-size: 54px;
  }
`

export default function pageHeading(props) {
  return <Heading>{props.children}</Heading>
}
