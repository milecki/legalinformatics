import React from "react"
import styled from "styled-components"

const MenuTogglerIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 34px;
  margin-right: 15px;
  padding: 0 7px;
  cursor: pointer;
  border: 1px solid #dddddd;
  border-radius: 4px;
  transition: all 0.2s ease-in;

  &:hover {
    border-color: #888888;
    color: #333333;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`

const Bar = styled.div`
  width: 22px;
  height: 2px;
  margin-bottom: 4px;
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
