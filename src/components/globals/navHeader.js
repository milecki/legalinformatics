import React from "react"
import MenuToggler from "./menuToggler"
import styled from "styled-components"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"

const StyledNavHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`

const Logo = styled.img`
  box-sizing: content-box;
  display: block;
  width: 5.625em;
  padding: 0.625em 0.9375em;
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
