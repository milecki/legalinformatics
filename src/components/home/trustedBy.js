import React from "react"
import styled from "styled-components"
import Container from "../globals/container"
import SectionHeading from "../globals/sectionHeading"
import oficyna from "../../images/oficyna.png"
import exlege from "../../images/exlege.png"
import neurosoft from "../../images/neurosoft.png"
import szydlo from "../../images/szydlo.png"

const TrustedBySection = styled.section`
  margin-top: -3.125em;
  padding: 3.75em 0 3.125em;
  background-color: white;
  font-size: 1rem;

  @media (min-width: 768px) {
    padding: 8.125em 0 7.5em;
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
  margin: 3.75em 0 0;
  height: 3.75em;

  @media (min-width: 768px) {
    margin: 2.5em 2.5em 0;
  }

  @media (min-width: 1136px) {
    margin: 2.5em 1.25em 0;
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
          <Partner src={neurosoft} alt="Neurosoft" />
          <Partner
            src={szydlo}
            alt="Kancelaria prawna Prof. Szydło i Współpracownicy"
          />
          <Partner src={exlege} alt="Ex Lege" />
          <Partner src={oficyna} alt="Wydawnictwo Oficyna Prawnicza" />
        </Partners>
      </Container>
    </TrustedBySection>
  )
}
