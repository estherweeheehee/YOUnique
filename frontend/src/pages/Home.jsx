import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ProductCarousell from "./ProductHome";
import { Outlet } from "react-router-dom";
import ProductCategory from "../components/ProductCategory";


function Home() {
  const [searchTerm, setSearchTerm] = useState("")
  const [bakedGoods, setBakedGoods] = useState([])
  const [jewellery, setJewellery] = useState([])
  let navigate = useNavigate();

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")
  }
  
  const product_category = ["Baked Goods","Jewellery"]

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

  return(
    <>
    <div className="search">
    <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Find a creator or item</legend>
            <label htmlFor="searchterm">Search term</label>
            <input 
            name="searchterm" 
            id="searchterm" 
            placeholder="Find a creator or item" 
            value={searchTerm}
            onChange={handleChange}
            />
            <button>Search</button>
          </fieldset>
        </form>
      </div>
    <Outlet />
    
    </>
    ) 
}

export default Home;
