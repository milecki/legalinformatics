import React from "react"
import styled from "styled-components"
import Container from "../globals/container"
import SectionHeading from "../globals/sectionHeading"
import oficyna from "../../images/oficyna.png"
import kghm from "../../images/kghm.png"
import exlege from "../../images/exlege.png"
import neurosoft from "../../images/neurosoft.png"
import szydlo from "../../images/szydlo.png"

const TrustedBySection = styled.section`
  margin-top: -50px;
  padding: 60px 0 50px;
  background-color: white;

  @media (min-width: 768px) {
    margin-top: inherit;
    padding: 80px 0 120px;
  }
`

const Partners = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const Partner = styled.img`
  margin: 60px 0px 0px;

  @media (min-width: 768px) {
    margin: 40px 40px 0px;
  }

  @media (min-width: 1136px) {
    margin: 40px 20px 0px;
  }

  &[alt="Kancelaria prawna Prof. Szydło i Współpracownicy"] {
    width: 80%;
    height: 80%;

    @media (min-width: 375px) {
      width: initial;
      height: initial;
    }
  }
`

export default function trustedBy() {
  return (
    <TrustedBySection id="trusted-by">
      <Container>
        <SectionHeading>Zaufali nam</SectionHeading>
        <Partners>
          <Partner height="60" src={kghm} alt="KGHM" />
          <Partner height="60" src={neurosoft} alt="Neurosoft" />
          <Partner
            height="30"
            src={szydlo}
            alt="Kancelaria prawna Prof. Szydło i Współpracownicy"
          />
          <Partner height="60" src={exlege} alt="Ex Lege" />
          <Partner
            height="60"
            src={oficyna}
            alt="Wydawnictwo Oficyna Prawnicza"
          />
        </Partners>
      </Container>
    </TrustedBySection>
  )
}
