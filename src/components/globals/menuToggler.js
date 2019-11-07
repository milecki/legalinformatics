import React from "react"
import styled from "styled-components"

const MenuTogglerIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 2.125em;
  margin-right: 0.9375em;
  padding: 0 0.4375em;
  font-size: 1rem;
  cursor: pointer;
  border: 0.0625em solid #dddddd;
  border-radius: 0.25em;
  transition: all 0.2s ease-in;

  &:hover {
    border-color: #888888;
    color: #333333;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

const Bar = styled.div`
  width: 1.375em;
  height: 0.125em;
  margin-bottom: 0.25em;
  background-color: #888888;

  &:last-child {
    margin-bottom: 0;
  }
`
const MenuToggler = props => (
  <MenuTogglerIcon onClick={() => props.click()}>
    <Bar></Bar>
    <Bar></Bar>
    <Bar></Bar>
  </MenuTogglerIcon>
)

export default MenuToggler
