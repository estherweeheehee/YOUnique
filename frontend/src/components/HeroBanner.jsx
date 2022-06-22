import React, { useEffect } from "react";
import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css/core';
import styled from "styled-components";

function HeroBanner() {
    const [product, setProduct] = useState([])
    useEffect(()=>{
        fetch(`/api/product`)
        .then(response => response.json())
        .then(data => setProduct(data));
    },[])

    console.log(Math.floor(Math.random))
    
  const images = [
    {
      img: "https://i.imgur.com/mwWQy9h.png",
      id: 1,
    },
    {
      img: "https://www.foodbusinessnews.net/ext/resources/2020/2/Blended-protein-bread_Lead.jpg?t=1581622397&width=1080",
      id: 2,
      name: "Baked Goods",
    },
    {
      img: "https://shopee.sg/blog/wp-content/uploads/2018/12/tamara-bellis-429124-unsplash.jpg",
      id: 3,
      name: "Handmade Jewellery",
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
          type   : 'loop',
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
