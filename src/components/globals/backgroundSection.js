import React from "react"
import BackgroundImage from "gatsby-background-image"
import PageHeading from "../globals/pageHeading"

const style = {
  height: "450px",
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
