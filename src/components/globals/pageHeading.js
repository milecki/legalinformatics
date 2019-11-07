import React from "react"
import styled from "styled-components"

const Heading = styled.h1`
  color: #ffffff;
  padding: 0 0.4411764706em;
  font-weight: bold;
  font-size: 2.125rem;
  text-shadow: 0 0.02941176471em 0.05882352941em rgba(0, 0, 0, 0.6);
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.625rem;
  }

  @media (min-width: 992px) {
    font-size: 3.5rem;
  }

  @media (min-width: 1200px) {
    font-size: 3.875rem;
  }
`

export default function pageHeading(props) {
  return <Heading>{props.children}</Heading>
}
