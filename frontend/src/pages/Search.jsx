import { useParams } from "react-router-dom"

const Search = () => {
    const params = useParams();
    const term = params.id
    
    return (
        <>
            <div>
                <h1>Search Result</h1>
                <p>You searched for "{term}"</p>
            </div>



        </>
    )
}

export default Search