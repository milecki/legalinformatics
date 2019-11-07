import React from "react"
import styled from "styled-components"
import Container from "../globals/container"
import SectionHeading from "../globals/sectionHeading"

const ContactSection = styled.section`
  margin-top: -3.125em;
  padding: 3.75em 0 3.125em;
  font-size: 1rem;

  @media (min-width: 768px) {
    padding: 8.125em 0 7.5em;
  }
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: row;
  max-width: 43.75em;
  margin: 0 auto;
  padding-top: 1.25em;
  flex-wrap: wrap;
  justify-content: space-between;
`
const Input = styled.input`
  height: 2.4285714286em;
  flex-basis: 100%;
  margin-bottom: 1.0714285714em;
  padding: 0.4285714286em 0.8571428571em;
  border: 0.07142857143em solid #cccccc;
  box-shadow: inset 0 0.07142857143em 0.07142857143em rgba(0, 0, 0, 0.075);
  color: #555555;
  font-size: 0.875em;
  font-family: "Aller Light", sans-serif;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;

  &:focus {
    border-color: #66afe9;
    box-shadow: inset 0 0.07142857143em 0.07142857143em rgba(0, 0, 0, 0.075),
      0 0 0.5714285714em rgba(102, 175, 233, 0.6);
    outline: 0;
  }

  @media (min-width: 386px) {
    flex-basis: 48%;
  }
`
const SuperInput = styled.input`
  display: none;
`

const TextArea = styled.textarea`
  height: 13.1428571429em;
  flex-basis: 100%;
  margin-bottom: 1.0714285714em;
  padding: 0.4285714286em 0.8571428571em;
  border: 0.07142857143em solid #cccccc;
  box-shadow: inset 0 0.07142857143em 0.07142857143em rgba(0, 0, 0, 0.075);
  color: #555555;
  font-size: 0.875em;
  font-family: "Aller Light", sans-serif;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;

  &:focus {
    border-color: #66afe9;
    box-shadow: inset 0 0.07142857143em 0.07142857143em rgba(0, 0, 0, 0.075),
      0 0 0.5714285714em rgba(102, 175, 233, 0.6);
    outline: 0;
  }
`
const SubmitButton = styled.input`
  flex-basis: 100%;
  padding: 0.5555555556em 0;
  background-color: #428bca;
  border-color: #357ebd;
  cursor: pointer;
  color: #ffffff;
  font-size: 1.125em;
  font-family: "Aller Light", sans-serif;
  line-height: 1.33;

  &:hover {
    background-color: #3276b1;
    border-color: #285e8e;
  }
`

export default function contact() {
  return (
    <Container>
      <ContactSection id="contact">
        <SectionHeading>Kontakt</SectionHeading>
        <ContactForm
          action="https://formspree.io/michal@kulecki.me"
          method="post"
        >
          <input type="hidden" name="_language" value="pl" />
          <Input type="text" name="Imię" aria-label="Imię" placeholder="Imię" />
          <Input
            type="text"
            name="Nazwisko"
            aria-label="Nazwisko"
            placeholder="Nazwisko"
            required="required"
          />
          <Input
            type="email"
            name="_replyto"
            aria-label="Twój email"
            placeholder="Twój email"
            required="required"
          />
          <Input
            type="text"
            name="Temat"
            aria-label="Temat"
            placeholder="Temat"
          />
          <SuperInput
            type="text"
            name="_gotcha"
            placeholder="Dodatkowe informacje"
            aria-hidden="true"
          />
          <TextArea
            name="Treść wiadomości"
            aria-label="Treść wiadomości"
            placeholder="Treść wiadomości"
            required="required"
          ></TextArea>
          <SubmitButton type="submit" value="Wyślij"></SubmitButton>
        </ContactForm>
      </ContactSection>
    </Container>
  )
}
