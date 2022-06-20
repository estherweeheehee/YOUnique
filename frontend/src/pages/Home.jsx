import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ProductCarousell from "./ProductCarousell";
import { Outlet } from "react-router-dom";


function Home() {
  

  const [searchTerm, setSearchTerm] = useState("")
  let navigate = useNavigate();

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")
  }
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
