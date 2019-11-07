import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const LinkList = styled.ul`
  height: ${props => props.ulHeight};
  overflow: hidden;
  transition: height 0.2s ease-in-out;
  font-size: 1rem;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    height: initial;
  }
`

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  padding: 0.7142857143em 1.0714285714em;
  margin-right: 2.1428571429em;
  color: #777777;
  font-size: 0.875em;
  letter-spacing: 0.07142857143em;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.2s ease-in, background-color 0.2s ease-in;

  &:hover {
    color: #333333;
    background-color: #eeeeee;
  }

  @media (min-width: 768px) {
    padding-top: 1.0714285714em;
    padding-bottom: 1.0714285714em;
    text-align: center;

    &:hover {
      background-color: #ffffff;
    }
  }
`

class NavLinks extends Component {
  render() {
    return (
      <LinkList ulHeight={this.props.navbarOpen ? "10.375em" : 0}>
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
