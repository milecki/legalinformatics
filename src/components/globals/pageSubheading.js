import React from "react"
import styled from "styled-components"

const Subheading = styled.p`
  color: #ffffff;
  font-weight: bold;
  font-size: 1.25rem;
  text-shadow: 0 0.05em 0.1em rgba(0, 0, 0, 0.6);
  padding: 0 0.75em;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.5625rem;
  }

  @media (min-width: 992px) {
    font-size: 2.0625rem;
  }

  @media (min-width: 1200px) {
    font-size: 2.3125rem;
  }
`

export default function pagesSubheading(props) {
  return <Subheading>{props.children}</Subheading>
}
