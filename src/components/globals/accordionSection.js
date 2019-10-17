import React, { Component } from "react"

class AccordionSection extends Component {
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
        <div
          onClick={onClick}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
            marginTop: "30px",
          }}
        >
          <img
            src={imgSrc}
            alt=""
            style={{ width: "50px", height: "50px", marginRight: "14px" }}
          ></img>
          <h4 style={{ fontSize: "24px", fontWeight: 400 }}>{label}</h4>
          <div style={{ marginLeft: "10px", fontSize: "12px" }}>
            {!isOpen && <span>&#9660;</span>}
            {isOpen && <span>&#9650;</span>}
          </div>
        </div>
        {isOpen && (
          <div
            style={{
              marginBottom: "40px",
              marginLeft: "64px",
              lineHeight: 1.6,
            }}
          >
            {this.props.children}
          </div>
        )}
      </div>
    )
  }
}

export default AccordionSection
