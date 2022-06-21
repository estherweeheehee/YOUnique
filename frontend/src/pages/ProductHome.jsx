import ProductCarousel from "../components/ProductCarousel";
import ProductCategory from "../components/ProductCategory";
import { useState, useEffect } from "react";

const ProductHome = () => {
  const [bakedGoods, setBakedGoods] = useState([])
  const [jewellery, setJewellery] = useState([])

  const product_category = ["Baked Goods", "Jewellery"];

  useEffect(() => {
    fetch(`/api/product/category/${product_category[0]}`)
      .then((response) => response.json())
      .then((data) => setBakedGoods(data));
  }, []);

  useEffect(() => {
    fetch(`/api/product/category/${product_category[1]}`)
      .then((response) => response.json())
      .then((data) => setJewellery(data));
  }, []);

  return (
    <>
      <ProductCarousel />
      <ProductCategory productdata={bakedGoods} />
      <ProductCategory productdata={jewellery} />

      {/* <Splide options={{
        perPage:4,
        arrows: false,
        pagination:false,
        drag: "free",
        gap: "rem5",
      }}> */}
      {/* .map(()=>{
          return(
            <SplideSlide>
              <Link>
              OUTPUT HERE
              </Link>
            </SplideSlide>
          </Splide>
          )
        }) */}

      {/* <Splide options={{
        perPage:4,
        arrows: false,
        pagination:false,
        drag: "free",
        gap: "rem5",
      }}> */}
      {/* .map(()=>{
          return(
            <SplideSlide>
              <Link>
              OUTPUT HERE
              </Link>
            </SplideSlide>
          </Splide>
          )
        }) */}
    </>
  );
};

export default ProductHome;
