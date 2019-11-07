import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import NavLinks from "./navLinks"
import Container from "./container"
import NavHeader from "./navHeader"

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  min-height: 3.96875em;
  background: #fff;
  box-shadow: 0 0.0625em 0.625em 0 rgba(50, 50, 50, 0.33);
  font-size: 1rem;
  z-index: 2;
`
const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`

class Header extends Component {
  state = {
    navbarOpen: false,
  }

  handleNavbar = () => {
    this.setState(prevState => {
      return { navbarOpen: !prevState.navbarOpen }
    })
  }

  render() {
    return (
      <HeaderWrapper>
        <Container>
          <NavContainer>
            <NavHeader
              handleNavbar={this.handleNavbar}
              siteTitle={this.props.siteTitle}
            />
            <NavLinks navbarOpen={this.state.navbarOpen} />
          </NavContainer>
        </Container>
      </HeaderWrapper>
    )
  }
}

export default Header

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
