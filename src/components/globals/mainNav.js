import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  a {
    display: block;
    padding: 10px 15px;
    text-decoration: none;
    color: #777;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  a:hover {
    color: #333333;
  }

  @media (min-width: 768px) {
    ul {
      flex-direction: row;
    }

    a {
      padding-top: 15px;
      padding-bottom: 15px;
    }
  }
`

export default function MainNav() {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/#offer">Oferta</Link>
        </li>
        <li>
          <Link to="/#trusted-by">Zaufali nam</Link>
        </li>
        <li>
          <Link to="/#management">Zarząd</Link>
        </li>
        <li>
          <Link to="/#contact">Kontakt</Link>
        </li>
      </ul>
    </Nav>
  )
}
