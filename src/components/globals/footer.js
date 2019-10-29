import React from "react"
import styled from "styled-components"
import Container from "../globals/container"

const Footer = styled.footer`
  border-top: 1px solid #e7e7e7;
  padding: 20px 0;
  background-color: #f8f8f8;
`
const FooterContainer = styled.div`
  margin: 0 auto;

  @media (min-width: 640px) {
    display: grid;

    grid-template-columns: repeat(3, auto);
    grid-template-rows: 2;
    justify-items: center;
    justify-content: center;
    grid-gap: 30px;
  }
`
const FooterCol = styled.div`
  margin: 0 0 10px;

  .copy {
    margin-top: 10px;
  }
`

const FooterColHeading = styled.h3`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.44;
`

const FooterParagraph = styled.p`
  font-size: 12px;
  line-height: 1.44;
`

const FooterLink = styled.a`
  color: #1e7cc1;
  text-decoration: none;
`

export default function footer() {
  return (
    <Footer>
      <Container>
        <FooterContainer>
          <FooterCol>
            <FooterColHeading>Kontakt</FooterColHeading>
            <FooterParagraph>
              E-mail:{" "}
              <FooterLink href="mailto:biuro@legalinformatics.pl">
                biuro@legalinformatics.pl
              </FooterLink>
            </FooterParagraph>
            <FooterParagraph>
              Telefon:{" "}
              <FooterLink href="tel:48-513-96-96-96">
                +48 513 96 96 96
              </FooterLink>
            </FooterParagraph>
          </FooterCol>

          <FooterCol>
            <FooterColHeading>Legal Informatics sp. z o. o.</FooterColHeading>
            <FooterParagraph>Stalowa 1/5</FooterParagraph>
            <FooterParagraph>53-425 Wrocław</FooterParagraph>
            <FooterParagraph>KRS: 0000420178</FooterParagraph>
            <FooterParagraph>REGON: 021877770</FooterParagraph>
            <FooterParagraph>NIP: 897-178-25-41</FooterParagraph>
          </FooterCol>

          <FooterCol>
            <FooterParagraph>
              Ten serwis wykorzystuje pliki cookies.
              <br />
              Korzystanie z witryny oznacza zgodę na ich
              <br /> zapis lub odczyt wg ustawień przeglądarki.
            </FooterParagraph>
            <FooterParagraph className="copy">
              &copy; 2015–{new Date().getFullYear()} legalinformatics
            </FooterParagraph>
          </FooterCol>
        </FooterContainer>
      </Container>
    </Footer>
  )
}
