import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const LinkList = styled.ul`
  height: ${props => props.ulHeight};
  transition: height 0.2s ease-in-out;
  overflow: hidden;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    height: initial;
  }
`

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  padding: 10px 15px;
  margin-right: 30px;
  color: #777;
  font-size: 0.875rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.2s ease-in, background-color 0.2s ease-in;

  &:hover {
    color: #333333;
    background-color: #eeeeee;
  }

  @media (min-width: 768px) {
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: center;

    &:hover {
      background-color: #ffffff;
    }
  }
`

class NavLinks extends Component {
  render() {
    return (
      <LinkList ulHeight={this.props.navbarOpen ? "156px" : 0}>
        <li>
          <StyledLink to="/#offer">Oferta</StyledLink>
        </li>
        <li>
          <StyledLink to="/#trusted-by">Zaufali nam</StyledLink>
        </li>
        <li>
          <StyledLink to="/#management">Zarząd</StyledLink>
        </li>
        <li>
          <StyledLink to="/#contact">Kontakt</StyledLink>
        </li>
      </LinkList>
    )
  }
}

export default NavLinks
