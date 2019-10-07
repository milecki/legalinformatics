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
  padding: 80px 0 120px;
  background-color: white;
`

const Partners = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Partner = styled.img`
  margin: 40px 15px 0px;
`

export default function trustedBy() {
  return (
    <TrustedBySection id="trusted-by">
      <Container>
        <SectionHeading>Zaufali nam</SectionHeading>
        <Partners>
          <Partner
            height="30"
            src={szydlo}
            alt="Kancelaria prawna Prof. Szydło i Współpracownicy"
          />
          <Partner height="60" src={kghm} alt="KGHM" />
          <Partner height="60" src={neurosoft} alt="Neurosoft" />
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
