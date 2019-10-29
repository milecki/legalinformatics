import React, { Component } from "react"
import styled from "styled-components"
import posed, { PoseGroup } from "react-pose"

const OuterDiv = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 30px;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #1e7cc1;
  }
`

const ServiceIcon = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 14px;
`

const ServiceName = styled.h4`
  font-size: 18px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`
const ArrowIcon = styled.div`
  margin-left: 10px;
  font-size: 12px;

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
          <ArrowIcon>
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
