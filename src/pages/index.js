import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/globals/backgroundSection"
import Offer from "../components/home/offer"
import TrustedBy from "../components/home/trustedBy"
import Management from "../components/home/management"
import Contact from "../components/home/contact"
import PageHeading from "../components/globals/pageHeading"

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
      img={data.szermierz.childImageSharp.fluid}
      styleClass="defaultBackground"
    />
    <TrustedBy />
    <BackgroundSection
      img={data.zegar.childImageSharp.fluid}
      styleClass="defaultBackground"
    />
    <Management />
    <BackgroundSection
      img={data.hala_stulecia.childImageSharp.fluid}
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
    szermierz: file(relativePath: { eq: "szermierz.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    zegar: file(relativePath: { eq: "zegar.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hala_stulecia: file(relativePath: { eq: "hala-stulecia.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
