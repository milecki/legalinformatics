import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  /* display: block; */
  /* display: flex; */
  max-width: 1170px;
  margin: 0 auto;
  /* justify-content: center; */
  /* background-color: pink; */
`

const Container = props => {
  return <StyledContainer>{props.children}</StyledContainer>
}

export default Container
