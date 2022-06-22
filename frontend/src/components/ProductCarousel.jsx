import React from "react";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import '@splidejs/react-splide/css';



function ProductCarousel() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`/api/product`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>

      <Splide options={{
        perPage:4,
        gap:"1rem",
        height:" 15rem"
}}>
        {product.map((para) => {
          return (
            <SplideSlide key={para._id}>
              <p>{para.product_name}</p>
              <img src={para.product_image} alt="" 
              width={"200px"}
              height={"200px"}/>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

export default ProductCarousel;
