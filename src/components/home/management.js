import React from "react"
import Container from "../globals/container"
import SectionHeading from "../globals/sectionHeading"
import styled from "styled-components"
import adam from "../../images/adam-hareza.jpg"
import igor from "../../images/igor-bialowas.jpg"

const Management = styled.section`
  margin-top: -3.125em;
  padding: 3.75em 0 3.125em;
  font-size: 1rem;

  @media (min-width: 768px) {
    padding: 8.125em 0 7.5em;
  }
`

const Members = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`
const Member = styled.div`
  margin: 1.25em;
  text-align: center;

  @media (min-width: 768px) {
    margin: 1.25em 1.875em 0;
  }
`

const MemberPhoto = styled.img`
  border-radius: 50%;
  width: 8.125em;
  height: 8.125em;

  @media (min-width: 768px) {
    width: 10.75em;
    height: 10.75em;
  }
`

const MemberName = styled.h3`
  margin: 0.5555555556em 0;
  font-size: 1.125em;
  font-weight: 500;
`

const MemberVocationalTitle = styled.p`
  margin-bottom: 0.1428571429em;
  font-size: 0.875em;
`

const MemberRole = styled.p`
  font-size: 0.875em;
`

export default function management() {
  return (
    <Container>
      <Management id="management">
        <SectionHeading>Zarząd</SectionHeading>
        <Members>
          <Member>
            <MemberPhoto src={adam} alt="Adam Haręża" />
            <MemberName>dr Adam Haręża</MemberName>
            <MemberVocationalTitle>radca prawny</MemberVocationalTitle>
            <MemberRole>Prezes zarządu</MemberRole>
          </Member>
          <Member>
            <MemberPhoto src={igor} alt="Igor Białowąs" />
            <MemberName>Igor Białowąs</MemberName>
            <MemberVocationalTitle>radca prawny</MemberVocationalTitle>
            <MemberRole>Wiceprezes Zarządu</MemberRole>
          </Member>
        </Members>
      </Management>
    </Container>
  )
}
