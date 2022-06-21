import ProductCarousel from "../components/ProductCarousel"
import ProductCategory from "../components/ProductCategory"

const ProductHome = () => {
    return (
      <>
      
      
        <ProductCarousel />
        <ProductCategory productdata={bakedGoods}/>
        <ProductCategory productdata={jewellery}/>
        
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
     
    )
}

export default ProductHome