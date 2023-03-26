import React from 'react'
import styled from 'styled-components'
import backgroundImage from '../files/backimage.jpg'
export default function Home() {
    return (
        <Container>
            <BackgroundImage style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '100%', margin: '0' }}>
                <p>Bolt is an Internet Of Things Platform for enterprise ready for Product and Solutions
                    <br></br>
                    <Button>Click for more!</Button>
                </p>
            </BackgroundImage>
        </Container>
    )
}

const Container = styled.div`

`

const BackgroundImage = styled.div`
        height:100vh;
        p{
            height:100vh
            position:relative;
            padding:50vh 0;
            text-align: center;
            color:white;
            margin:0 0;

        }    
`

const Button = styled.span`
        color:white;
        transition: transform .3s;
        &:hover{
            transform: scale(1.25);
            color: gray;
            border: 1px solid white;
            border-radius: 4px;
            cursor: pointer;
        }
`
