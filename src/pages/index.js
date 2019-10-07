import React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
// import Container from "../components/globals/container"

import BackgroundSection from "../components/globals/backgroundSection"
import Offer from "../components/home/offer"
import TrustedBy from "../components/home/trustedBy"
import Management from "../components/home/management"
import Contact from "../components/home/contact"
import PageHeading from "../components/globals/pageHeading"
// import SectionHeading from "../components/globals/sectionHeading"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.bgImg.childImageSharp.fluid}
      title="Legal Informatics"
      styleClass="defaultBackground"
    >
      <PageHeading>You have a right to know how</PageHeading>
    </BackgroundSection>
    <Offer />
    <BackgroundSection
      img={data.foto1.childImageSharp.fluid}
      styleClass="defaultBackground"
    />
    <TrustedBy />
    <BackgroundSection
      img={data.foto2.childImageSharp.fluid}
      styleClass="defaultBackground"
    />
    <Management />
    <BackgroundSection
      img={data.foto3.childImageSharp.fluid}
      styleClass="defaultBackground"
    />
    <Contact />
  </Layout>
)

export const query = graphql`
  {
    bgImg: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    foto1: file(relativePath: { eq: "foto1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    foto2: file(relativePath: { eq: "foto2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    foto3: file(relativePath: { eq: "foto3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
