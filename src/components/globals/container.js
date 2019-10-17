import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
`

const Container = props => {
  return <StyledContainer>{props.children}</StyledContainer>
}

export default Container
