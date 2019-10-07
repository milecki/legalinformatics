import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
// import logoSymbol from "../../images/hr_nav.png"
// import logoName from "../../images/logo2x.png"
import logo from "../../images/logo3.svg"
import MainNav from "./mainNav"
import Container from "./container"

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: #fff;
  margin-bottom: 1.45rem;
  box-shadow: 0px 1px 10px 0px rgba(50, 50, 50, 0.33);
  z-index: 2;
  /* 
  @media (min-width: 768px) {
    height: 98px;
  } */
`
// const BrandSymbol = styled.img`
//   display: none;
//   @media (min-width: 768px) {
//     display: block;
//     /* width: 124%; */
//     width: 130%;
//     margin: 0 0 0 -122px;
//   }
// `
const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`

const Logo = styled.img`
  display: block;
  box-sizing: content-box;
  width: 120px;
  padding: 15px;
  /* margin-left: 65px; */
  /* margin: 0 70px; */
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Container>
      {/* <BrandSymbol src={logoSymbol} alt="logo symbol" /> */}
      <NavContainer>
        <Link to="/">
          <Logo src={logo} alt="logo" />
        </Link>
        <MainNav />
      </NavContainer>
    </Container>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
