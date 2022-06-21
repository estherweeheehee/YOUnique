import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import SearchResults from "../components/SearchResults";

const Search = () => {
    const [results, setResults] = useState();
    const params = useParams();
    const term = params.id
    const lowercaseTerm = term.toLowerCase()

    useEffect(() => {
        fetch(`/api/product/search/${lowercaseTerm}`)
          .then((response) => response.json())
          .then((data) => setResults(data));
      }, [lowercaseTerm]);
    
    return (
        <>
            <div>
                <h1>Search Result</h1>
                <p>You searched for "{term}"</p>
                <SearchResults results={results} />
            </div>
        </>
    )
}

export default Search