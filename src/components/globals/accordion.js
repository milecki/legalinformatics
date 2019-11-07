import React, { Component } from "react"
import styled from "styled-components"
import posed, { PoseGroup } from "react-pose"

const OuterDiv = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 0.625em;
  margin-top: 1.875em;
  transition: color 0.2s ease-in-out;
  font-size: 1rem;

  &:hover {
    color: #1e7cc1;
  }
`

const ServiceIcon = styled.img`
  width: 2.8125em;
  height: 2.8125em;
  margin-right: 0.875em;
`

const ServiceName = styled.h4`
  font-size: 1em;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 1.25em;
  }
`
const ArrowIcon = styled.div`
  margin-left: 0.8333333333em;
  font-size: 0.75em;

  span {
    display: block;
    transform: ${props => (props.isOpen ? "rotate(180deg)" : "")};
    transform-origin: center center;
    transition: transform 0.2s ease-in-out;
  }
`

const InnerDiv = posed.div({
  enter: {
    opacity: 1,
    y: 0,
    delay: 100,
    transition: { duration: 300 },
  },
  exit: {
    opacity: 0,
    y: "-15%",
    transition: { duration: 300 },
  },
  flip: {
    transition: {
      duration: 0,
      type: "tween",
    },
  },
})

class Accordion extends Component {
  onClick = () => {
    this.props.onClick(this.props.label)
  }

  render(props) {
    const {
      onClick,
      props: { isOpen, label, imgSrc, id },
    } = this

    return (
      <div>
        <OuterDiv onClick={onClick} key={id}>
          <ServiceIcon src={imgSrc} alt=""></ServiceIcon>
          <ServiceName>{label}</ServiceName>
          <ArrowIcon isOpen={isOpen}>
            <span>&#9660;</span>
          </ArrowIcon>
        </OuterDiv>
        <PoseGroup>
          {isOpen && (
            <InnerDiv key="posedInnerDiv">{this.props.children}</InnerDiv>
          )}
        </PoseGroup>
      </div>
    )
  }
}

export default Accordion
