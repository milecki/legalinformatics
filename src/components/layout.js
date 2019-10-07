import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import GlobalStyle from "../components/globals/globalStyle"

// import Container from "../components/globals/container"

import Header from "./globals/header"
import Footer from "./globals/footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      {/* <Container> */}
      <Header siteTitle={data.site.siteMetadata.title} />
      {/* </Container> */}
      <main style={{ display: "block" }}>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
