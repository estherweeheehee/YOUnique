import React, { useEffect } from "react";
import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import styled from "styled-components";

function HeroBanner() {
    const [display, setDisplay] = useState([])
    useEffect(()=>{
        fetch(`/api/product`)
        .then(response => response.json())
        .then(data => setDisplay(data));
    },[])

    let i = Math.floor(Math.random() * display.length);
    let random =display[i]?.product_image 
    let x = Math.floor(Math.random() * display.length);
    let random2 =display[x]?.product_image 
   
const images = [
    {
      img: "https://i.imgur.com/mwWQy9h.png",
      id: 1,
    },
    {
      img: random,
      id: 2,
    },
    {
      img: random2,
      id: 3,
    },
  ];
  return (
    <div>
      <Splide
        options={{
          type: "loop",
          focus: "center",
          perPage: 1,
          height:"30rem",
          arrows:true,
          drag   : 'free',
          snap   : true,
        }}
      >
        {images.map((para) => {
            return (
              <SplideSlide key={para.id}>
              <Logo src={para.img} alt="" />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}
const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 75rem;
  height: 25rem;
`;

const Div = styled.div`

`

export default HeroBanner;
