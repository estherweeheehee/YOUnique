import React, { useEffect } from "react";
import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css/sea-green';
import styled from "styled-components";

//persist the state in the local storage
//atom with storage under jotai documents

function HeroBanner() {
  const [display, setDisplay] = useState([]);
  useEffect(() => {
    fetch(`/api/product`)
      .then((response) => response.json())
      .then((data) => setDisplay(data));
  }, []);

  let i = Math.floor(Math.random() * display.length);
  let random = display[i]?.product_image;
  let x = Math.floor(Math.random() * display.length);
  let random2 = display[x]?.product_image;

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
    <div className=" max-w-2xl mx-auto py-16 px-4 sm:py-6 sm:px-3 lg:max-w-7xl lg:px-8">
      <Splide
        options={{
          type: "loop",
          focus: "center",
          perPage: 1,
          height: "30rem",
          arrows: true,
          drag: "free",
          snap: true,
          autoplay: true,
          autoScroll: {
            speed: 3,
          },
        }}
      >
        {images.map((para) => {
          return (
            <SplideSlide key={para.id}>
              <img src={para.img} alt="" 
              className=" w-full h-[30rem] " />
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

export default HeroBanner;
