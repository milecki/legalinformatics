import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ imgName }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fixed(width: 50, height: 50) {
                ...GatsbyImageSharpFixed
                originalName
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.allImageSharp.edges.find(
        edge => edge.node.fixed.originalName === imgName
      )
      if (!image) {
        return null
      }
      return <Img fixed={image.node.fixed} />
    }}
  />
)
export default Image
