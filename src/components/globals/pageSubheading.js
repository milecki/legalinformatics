import React from "react"
import styled from "styled-components"

const Subheading = styled.p`
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
  padding: 0 15px;
  text-align: center;
  margin-top: 8px;

  @media (min-width: 768px) {
    font-size: 22px;
  }

  @media (min-width: 992px) {
    font-size: 30px;
  }

  @media (min-width: 1200px) {
    font-size: 32px;
  }
`

export default function pagesSubheading(props) {
  return <Subheading>{props.children}</Subheading>
}
