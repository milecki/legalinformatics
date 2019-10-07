import React from "react"
// import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import PageHeading from "../globals/pageHeading"

// const StyledBackgroundImage = styled(BackgroundImage)`
//   /* .defaultBackground {
//     min-height: 100vh;
//     margin-top: 500px;
//     display: block;
//   } */
// `

const style = {
  // minHeight: "60vh",
  height: 450,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}

export default function BackgroundSection({
  img,
  styleClass,
  title,
  children,
}) {
  return (
    <div>
      <BackgroundImage className={styleClass} fluid={img} style={style}>
        {title ? <PageHeading className="title">{title}</PageHeading> : ""}
        {children}
      </BackgroundImage>
    </div>
  )
}

BackgroundSection.defaultProps = {
  styleClass: "defaultBackground",
}
