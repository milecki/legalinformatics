import React, { Component } from "react"
import styled from "styled-components"

const OuterDiv = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 30px;
`

const ServiceIcon = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 14px;
`

const ServiceName = styled.h4`
  font-size: 20px;
  font-weight: 400;
`
const ArrowIcon = styled.div`
  margin-left: 10px;
  font-size: 12px;
`

const InnerDiv = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  line-height: 1.6;
  /* transition: all 1s ease; */
`

class Accordion extends Component {
  onClick = () => {
    this.props.onClick(this.props.label)
  }

  render(props) {
    const {
      onClick,
      props: { isOpen, label, imgSrc },
    } = this

    return (
      <div>
        <OuterDiv onClick={onClick}>
          <ServiceIcon src={imgSrc} alt=""></ServiceIcon>
          <ServiceName>{label}</ServiceName>
          <ArrowIcon>
            {!isOpen && <span>&#9660;</span>}
            {isOpen && <span>&#9650;</span>}
          </ArrowIcon>
        </OuterDiv>
        {isOpen && (
          <InnerDiv>
            <div style={{ transition: "all 2s ease-in" }}>
              {this.props.children}
            </div>
          </InnerDiv>
        )}
      </div>
    )
  }
}

export default Accordion
