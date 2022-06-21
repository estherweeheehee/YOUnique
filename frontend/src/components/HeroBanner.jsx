import React from 'react'
import styled from "styled-components";

function HeroBanner() {
  return (
    <HeroText>
        Test
    </HeroText>
  )
}

const HeroText = styled.h1`
text-align: center;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
color: black;
background-color : yellow;
`

export default HeroBanner