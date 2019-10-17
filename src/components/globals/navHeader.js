import React from "react"
import MenuToggler from "./menuToggler"
import styled from "styled-components"
import { Link } from "gatsby"
import logo from "../../images/logo3.svg"

const StyledNavHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.5s ease-in-out;
`

const Logo = styled.img`
  display: block;
  width: 110px;
  box-sizing: content-box;
  padding: 10px 15px;
`

const NavHeader = props => (
  <StyledNavHeader>
    <Link to="/">
      <Logo src={logo} alt="logo" />
    </Link>

    <MenuToggler click={props.handleNavbar} />
  </StyledNavHeader>
)

export default NavHeader
