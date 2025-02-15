import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  position: relative;
  text-align: center;
  width: 80%;
  height: 0.125em;
  margin: 3.125em auto 1.875em;
  font-size: 1rem;
  background: linear-gradient(
    to right,
    #ffffff 0%,
    #299cd7 25%,
    #044574 48%,
    #044574 52%,
    #044574 52%,
    #299cd7 75%,
    #ffffff 100%
  );

  @media (min-width: 768px) {
    margin: 1.875em auto 3.125em;
  }
`

const StyledSpan = styled.span`
  position: relative;
  display: inline-block;
  padding: 0 1.5625em;
  background-color: #ffffff;
  top: -0.8125em;
  left: initial;
`

const StyledH2 = styled.h2`
  font-size: 1.375em;
`

export default function sectionHeading(props) {
  return (
    <StyledDiv>
      <StyledSpan>
        <StyledH2>{props.children}</StyledH2>
      </StyledSpan>
    </StyledDiv>
  )
}
