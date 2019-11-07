import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 0.9375em;
  font-size: 1rem;
`

const Container = props => {
  return <StyledContainer>{props.children}</StyledContainer>
}

export default Container
