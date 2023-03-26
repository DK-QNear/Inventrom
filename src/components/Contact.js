import React from 'react'
import styled from 'styled-components'
export default function Contact() {
  return (
    <Container>
      <p style={{ color: 'green', fontWeight: "Arial", fontSize: "2rem" ,textAlign:'center'}}>Get In Touch</p>
      <Divisions>
        <LHS>
          <p>Fill The Details Below</p>
          <form>
            <input type='text' placeholder='First-Name' required />
            <input type='text' placeholder='Last-Name' />
            <br />
            <br />
            <input type="tel" placeholder="Mobile-number" />
            <input type="email" placeholder="Email" />
            <br />
            <br />
            <input type="text"placeholder="Message"/>
            <br />
            <br />
            <input type="text"  placeholder="City"/>
            <input type="text"  placeholder="State"/>
            <Button onclick="alert('Message Sent')">
            <button type="button" ><text
                            style={{fontsize:'18px' }}>Submit</text></button>
            </Button>
          </form>
        </LHS>
        <RHS>
          <p>Our Location</p>
          <text>Mumbai
             <br/>
              Inventrom Private Limited, Unit no:B 32-A,B-wing, 2nd floor, Raj Industrial Complex,Military Road, Marol, Andheri East, Mumbai, Maharashtra - 400059
              <br/>
              <br/>
              Goa
              <br/>
              Inventrom Private Limited, 10, Gasper Apartment, behind Suzuki showroom, Panjim, Goa - 403001,Near People's High School
              </text>
        </RHS>
      </Divisions>
    </Container>
  )
}

const Container = styled.div`
@media(max-width:750px){    
text-align:center;
}
`
const Divisions = styled.div`
display:flex;
p{
    font-size: 25px;
}
@media(max-width:750px){
  display:flex;
  flex-direction:column;
  align-items:center;
} 

`
const LHS = styled.div`
    width:30vw;
    input{
      background-color: rgb(0, 0, 0, 0);
      color: rgb(2, 2, 2);
      border-radius: 5px;
      border: 0.25px solid rgb(0, 0, 0);
      padding: 10px;
      font-size: 15px;
      font-family: 'Poppins', sans-serif;
    }
   button{
    text-align:center;
    background-color:#808080;
    color:white;
    width:70px;
    height:25px;
   }
`

const RHS = styled.div`
    width:70vw;
    text{
      font-size: 18px;
    }
`
const Button=styled.div`
 text-align:center;
`