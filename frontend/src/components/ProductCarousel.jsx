import React from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import "@splidejs/react-splide/css/core";

function ProductCarousel() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`/api/product`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      <h3>Products</h3>

      {product.map((para) => {
        return (
          <div key={para._id}>
        
                  <p>{para.product_name}</p>
                  <img src={para.product_image} alt="" />
             
          </div>
        );
      })}
    </div>
  );
}

export default ProductCarousel;
