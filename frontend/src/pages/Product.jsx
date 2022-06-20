import React from "react";
import { useParams } from 'react-router-dom'

function Product() {
    const { id } = useParams();

    useEffect(() => {
        fetch(`/api/product/${id}`)
          .then((response) => response.json())
          .then((data) => setUserData(data));
      }, []);

  return(
    <div>
    </div>
    ) 
}

export default Product;
