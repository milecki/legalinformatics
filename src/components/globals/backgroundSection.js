import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import PageHeading from "../globals/pageHeading"
import PageSubheading from "../globals/pageSubheading"

const StyledBackgroundImage = styled(BackgroundImage)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7.8125em;
  flex-direction: column;
  font-size: 1rem;

  @media screen and (min-width: 640px) {
    height: 15.625em;
  }
  @media screen and (min-width: 768px) {
    height: 18.75em;
  }
  @media screen and (min-width: 992px) {
    height: 21.875em;
  }

  @media (min-width: 1600px) {
    height: 28.125em;
  }

  &.hero {
    height: 15.625em;

    @media screen and (min-width: 768px) {
      height: 21.875em;
    }

    @media screen and (min-width: 992px) {
      height: 28.125em;
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
