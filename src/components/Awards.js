import React from 'react'
import styled from 'styled-components'
import award1 from '../files/award1.png'
import award2 from '../files/award2.png'
import award3 from '../files/award3.png'
import award4 from '../files/award4.png'
export default function Awards() {
  return (
    <Container>
        <p style={{ color: 'green', fontWeight: "Arial", fontSize: "2rem" }}>Awards</p> 
        <Divisions>
            <FirstAward>
                <img src={award1}/>
                <p>Showcase</p>
                <text >INDO-US STARTUP CONNECT PROGRAM SILICON VALLEY</text>
            </FirstAward>
            <SecondAward>
            <img src={award2 }/>
                <p>Winner</p>
            <text >DST-LOCKHEED MARTIN INDIA INNOVATION GROWTH PROGRAM</text>
            </SecondAward>
            <ThirdAward>
            <img src={award3}/>
            <p>Winner</p>
            <text>POWER OF IDEAS</text>
            </ThirdAward>
            <FourthAward>
            <img src={award4}/>
            <p>Winner</p>
            <text >CHIEF MINISTER AWARD FOR THE BEST START-UP IN GOA</text>
            </FourthAward>
        </Divisions>
    </Container>
  )
}

const Container=styled.div`
    text-align:center;
`
const Divisions=styled.div`
    display:flex;
    width:100vw;
    p{
        font-size: 25px;
        text-decoration: underline;
    }
    text{
        text-transform: uppercase;
  font-size: 12px;  
    }
    img{
        width:100%;
    }
    @media(max-width:750px){
        display:flex;
        flex-direction:column;
        align-items:center;
     }
`
const FirstAward=styled.div`
    // width:25vw;
`
const SecondAward=styled.div`
// width:25vw;

`
const ThirdAward=styled.div`
// width:25vw;

`
const FourthAward=styled.div`
// width:25vw;
`