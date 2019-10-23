import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import PageHeading from "../globals/pageHeading"
import PageSubheading from "../globals/pageSubheading"

const StyledBackgroundImage = styled(BackgroundImage)`
  height: 125px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 640px) {
    height: 250px;
  }
  @media screen and (min-width: 768px) {
    height: 300px;
  }
  @media screen and (min-width: 992px) {
    height: 450px;
  }

  &.hero {
    height: 250px;

    @media screen and (min-width: 768px) {
      height: 350px;
    }

    @media screen and (min-width: 992px) {
      height: 450px;
    }
  }
`

export default function BackgroundSection({
  img,
  styleClass,
  title,
  slogan,
  children,
}) {
  return (
    <div>
      <StyledBackgroundImage className={styleClass} fluid={img}>
        {title ? <PageHeading className="title">{title}</PageHeading> : ""}
        {slogan ? <PageSubheading>{slogan}</PageSubheading> : ""}
        {children}
      </StyledBackgroundImage>
    </div>
  )
}

BackgroundSection.defaultProps = {
  styleClass: "",
}
