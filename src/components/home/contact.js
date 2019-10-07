import React from "react"
import styled from "styled-components"
import Container from "../globals/container"
import SectionHeading from "../globals/sectionHeading"

const ContactSection = styled.section`
  padding: 80px 0 120px;
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: row;
  max-width: 700px;
  margin: 0 auto;
  padding-top: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`
const Input = styled.input`
  height: 34px;
  flex-basis: 48%;
  margin-bottom: 15px;
  padding: 6px 12px;
  border: 1px solid #cccccc;
  /* -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); */
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  /* -webkit-transition: border-color ease-in-out 0.15s,
    box-shadow ease-in-out 0.15s; */
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  color: #555555;
  font-size: 14px;
  font-family: "Aller Light", sans-serif;

  &:focus {
    border-color: #66afe9;
    outline: 0;
    /* -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(102, 175, 233, 0.6); */
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(102, 175, 233, 0.6);
  }
`
const TextArea = styled.textarea`
  flex-basis: 100%;
  margin-bottom: 15px;
  padding: 6px 12px;
  border: 1px solid #cccccc;
  /* -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); */
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  /* -webkit-transition: border-color ease-in-out 0.15s,
    box-shadow ease-in-out 0.15s; */
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  color: #555555;
  font-size: 14px;
  font-family: "Aller Light", sans-serif;

  &:focus {
    border-color: #66afe9;
    outline: 0;
    /* -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(102, 175, 233, 0.6); */
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(102, 175, 233, 0.6);
  }
`
const Button = styled.button`
  flex-basis: 100%;
  padding: 10px 0;
  font-size: 18px;
  /* -webkit-appearance: none; */
  font-family: "Aller Light", sans-serif;
  line-height: 1.33;
  color: #ffffff;
  background-color: #428bca;
  border-color: #357ebd;
  cursor: pointer;

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
        <ContactForm action="">
          <Input type="text" placeholder="Imię" />
          <Input type="text" placeholder="Nazwisko" />
          <Input type="email" placeholder="Twój email" />
          <Input type="text" placeholder="Temat" />
          <TextArea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Treść wiadomości"
          ></TextArea>
          <Button type="submit">Wyślij</Button>{" "}
        </ContactForm>
      </ContactSection>
    </Container>
  )
}
