import React from 'react'
import styled from 'styled-components'
import OurVision from '../files/vision01.jpg'
import OurMission from '../files/mission.png'
export default function About() {
  return (
    <Container>
      <p style={{ color: 'green', fontWeight: "Arial", fontSize: "2rem" }}>About Us</p>
      <p style={{ color: "black" }}>We are an ward winning IoT team has an extensive experiencein enterprise IoT projects. Before working on Bolt platform, we have been strategic IoT consultants to various Fortune 500 companies.</p>
      <Divisions>
        <LHS>
          <img src={OurVision} />
          <h4>Our Vision</h4>
          <p>Build technology platforms for better communication.</p>
        </LHS>
        <RHS>
          <img src={OurMission} width="420px" height="280px" />
          <h4>Our Mission</h4>
          <p>To build a Platform to make IoT development quick, easy and low cost for developers. This will help in better connectivity between humans and machines helping us all in getting the most out of the machines.</p>
        </RHS>
      </Divisions>
    </Container>
  )
}

const Container = styled.div`
    text-align:center;
    width:100vw;
`
const Divisions = styled.div`
    display:flex;
    justify-content:space-between;
    width:100vw;
    @media(max-width:840px){
      display:flex;
      flex-direction:column;
      align-items:center;
   }
`
const LHS = styled.div`
  // width:50vw;
  @media(min-width:840px){
    width:50%;
  }
`
const RHS = styled.div`
// width:50vw;
@media(min-width:840px){
  width:50%;
}
p{
flex-wrap:wrap;
}
`