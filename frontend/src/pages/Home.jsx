import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [popular, setPopular] = useState({});
  const [trend, setTrend] = useState({});

  const [searchTerm, setSearchTerm] = useState("")
  let navigate = useNavigate();

  
  // useEffect(()=>{
  //     fetch("http://example.com/movies.json")
  //       .then((response) => response.json())
  //       .then((data) => setPopular(data));
  //   },[])

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(`/search/${searchTerm}`)
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
    <div>
      <h3>Popular</h3>
      


      <h3>New</h3>
      

    </div>
    </>
    ) 
}

export default Home;
