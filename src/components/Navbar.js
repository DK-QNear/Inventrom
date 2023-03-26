import React from 'react'
import styled from 'styled-components'
import logo from '../files/logo.png'
export default function Navbar() {
  return (
    <Wrap>
      <Image>
      <img src={logo} height="35rem"  width="90rem"/>
      </Image>
      <Buttons>
        <a class="but" href="#">About</a>
        <a class="but" href="#">Awards</a>
        <a class="but" href="#">Contact</a>
      </Buttons>
    </Wrap>
  )
}
const Wrap = styled.div`
  display:flex;
  justify-content:space-between;
  background: rgb(0, 0, 0);
  background: linear-gradient(90deg, rgba(0, 0, 0, 1) 4%, rgba(46, 7, 138, 1) 30%, rgba(59, 58, 143, 1) 51%, rgba(88, 88, 222, 1) 74%, rgba(45, 50, 167, 1) 86%, rgba(48, 26, 217, 1) 93%);
  height:70px;  
  width:100%
 `
 const Image=styled.div`
   padding:20px 35px;
 `
const Buttons = styled.div`
  display:flex;
  justify-content:space-between;
  a{
    color:black;
    padding:1.4rem 1rem;
  }
`