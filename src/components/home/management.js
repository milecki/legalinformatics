import React from "react"
import Container from "../globals/container"
import SectionHeading from "../globals/sectionHeading"
import styled from "styled-components"
import adam from "../../images/adam-hareza.jpg"
import igor from "../../images/igor-bialowas.jpg"

const Management = styled.section`
  padding: 80px 0 120px;
`

const Members = styled.div`
  display: flex;
  justify-content: center;
`
const Member = styled.div`
  margin: 20px 30px 0;
  text-align: center;
`

const MemberPhoto = styled.img`
  border-radius: 50%;
`

const MemberName = styled.h3`
  font-size: 18px;
  font-weight: 500;
  margin: 10px 0;
`

const MemberVocationalTitle = styled.p`
  font-size: 14px;
  margin-bottom: 2px;
`

const MemberRole = styled.p`
  font-size: 14px;
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
