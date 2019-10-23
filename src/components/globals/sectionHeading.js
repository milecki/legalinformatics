import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  position: relative;
  text-align: center;
  width: 80%;
  height: 2px;
  margin: 20px auto 30px;
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
    margin: 20px auto 50px;
  }
`

const StyledSpan = styled.span`
  position: relative;
  display: inline-block;
  padding: 0 25px;
  background-color: #ffffff;
  top: -13px;
  left: initial;
`

const StyledH2 = styled.h2`
  font-size: 22px;
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
