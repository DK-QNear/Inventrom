import React from 'react'
import styled from 'styled-components'
import insta from '../files/instagram.png'
import fb from '../files/facebook.png'
import twitter from '../files/twitter.png'
export default function Footer() {
  return (
    <footer>
      <Divisions>
        <LHS>
                <p >@COPYRIGHT(C)</p>
        </LHS>
        <RHS>
            <img src={insta}/>
            <img src={fb}/>
            <img src={twitter}/>
        </RHS>
      </Divisions>
    </footer>
  )
}

const Divisions=styled.div`
    display:flex;
    justify-content:space-between;
    background-color:#808080;
`

const LHS=styled.div`
p{
  color:white;
}
`
const RHS=styled.div`
 display:flex;
 justify-content:space-between;
 
 img{
    height:30px;
    width: 30px;
    padding:1rem 1rem;
 }
`